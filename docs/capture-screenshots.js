// node docs/capture-screenshots.js
const { chromium } = require('playwright');
const path = require('path');

const BASE     = 'http://localhost:8765';
const OUT      = path.join(__dirname, 'screenshots');
const ADMIN_PW = 'itonut26';

async function shot(page, name) {
  await page.screenshot({ path: `${OUT}/${name}.jpg`, type: 'jpeg', quality: 90 });
  console.log(`✓ ${name}.jpg`);
}

(async () => {
  const browser = await chromium.launch();

  // ─── Desktop screenshots ───────────────────────────────────────
  {
    const ctx  = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await ctx.newPage();
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000); // let physics settle

    // 1. App on load
    await shot(page, '01-app-load');

    // 2. Node hover — find first node position via JS
    const np = await page.evaluate(() => {
      const t = window._transform || {};
      const canvas = document.querySelector('canvas');
      const r = canvas.getBoundingClientRect();
      const cx = r.left + r.width  / 2;
      const cy = r.top  + r.height / 2;
      if (!window.nodes) return { sx: cx, sy: cy - 60 };
      const n = window.nodes[0];
      const k = t.k || 1;
      const tx = t.x != null ? t.x : r.width  / 2;
      const ty = t.y != null ? t.y : r.height / 2;
      return { sx: r.left + tx + n.x * k, sy: r.top + ty + n.y * k };
    });
    await page.mouse.move(np.sx, np.sy);
    await page.waitForTimeout(500);
    await shot(page, '02-node-hover');

    // 3. Info panel — click same node
    await page.mouse.click(np.sx, np.sy);
    await page.waitForTimeout(600);
    await shot(page, '03-info-panel');
    // close panel
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    // 4. Search
    await page.click('#search');
    await page.type('#search', 'ארכי', { delay: 80 });
    await page.waitForTimeout(500);
    await shot(page, '04-search');
    await page.fill('#search', '');
    await page.waitForTimeout(300);

    // 5. Legend filter
    await page.click('.legend-item');
    await page.waitForTimeout(400);
    await shot(page, '05-legend-filter');
    await page.click('.legend-item'); // clear
    await page.waitForTimeout(300);

    // 6. Admin gear icon (full page for context)
    await shot(page, '06-admin-gear');

    // 7. Admin password prompt
    await page.click('#adminTrigger');
    await page.waitForTimeout(400);
    await shot(page, '07-admin-password');

    // 8. Login → admin panel open
    await page.fill('#adminPasswordInput', ADMIN_PW);
    await page.click('#adminLoginBtn');
    await page.waitForTimeout(600);
    await shot(page, '08-admin-panel');

    // 9. Expand first node edit row
    await page.click('.admin-desc-toggle');
    await page.waitForTimeout(300);
    await shot(page, '09-node-edit-row');

    // 10. Admin footer buttons (scroll to bottom of panel)
    await page.evaluate(() => {
      document.getElementById('adminConnectBtn')
        ?.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await page.waitForTimeout(200);
    await shot(page, '10-admin-footer-buttons');

    // 11. Auto thumbnail — click, then close admin and show graph
    await page.click('#autoFetchBtn');
    await page.waitForTimeout(800);
    await page.click('#adminPanelClose');
    await page.waitForTimeout(500);
    await shot(page, '11-graph-thumbnails');

    await ctx.close();
  }

  // ─── Mobile screenshots ────────────────────────────────────────
  {
    const ctx  = await browser.newContext({
      viewport: { width: 390, height: 844 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1'
    });
    const page = await ctx.newPage();
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    await shot(page, '12-mobile');

    // tap first node
    const np = await page.evaluate(() => {
      const t = window._transform || {};
      const canvas = document.querySelector('canvas');
      const r = canvas.getBoundingClientRect();
      if (!window.nodes) return { sx: 195, sy: 422 };
      const n = window.nodes[0];
      const k = t.k || 1;
      const tx = t.x != null ? t.x : r.width  / 2;
      const ty = t.y != null ? t.y : r.height / 2;
      return { sx: r.left + tx + n.x * k, sy: r.top + ty + n.y * k };
    });
    await page.mouse.click(np.sx, np.sy);
    await page.waitForTimeout(600);
    await shot(page, '13-mobile-panel');

    await ctx.close();
  }

  await browser.close();
  console.log(`\nAll screenshots saved to docs/screenshots/`);
})();
