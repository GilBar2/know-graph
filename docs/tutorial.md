# Knowledge Graph — User Tutorial (v2.7)

> **App URL:** https://gilbar2.github.io/know-graph/
>
> This tutorial covers every feature of the app, from basic navigation to admin editing tools.

---

## Table of Contents

1. [Opening the App](#1-opening-the-app)
2. [The Graph Canvas](#2-the-graph-canvas)
3. [Searching for Nodes](#3-searching-for-nodes)
4. [Node Info Panel](#4-node-info-panel)
5. [Category Legend](#5-category-legend)
6. [Admin Panel — Logging In](#6-admin-panel--logging-in)
7. [Admin: Editing Node Labels & Descriptions](#7-admin-editing-node-labels--descriptions)
8. [Admin: Editing Category Names](#8-admin-editing-category-names)
9. [Admin: Editing Site Titles & Labels](#9-admin-editing-site-titles--labels)
10. [Admin: Adding a Thumbnail Image (Manual Crop)](#10-admin-adding-a-thumbnail-image-manual-crop)
11. [Admin: Auto Thumbnail Generation](#11-admin-auto-thumbnail-generation)
12. [Admin: Connecting Nodes](#12-admin-connecting-nodes)
13. [Admin: Disconnecting Nodes](#13-admin-disconnecting-nodes)
14. [Saving Changes](#14-saving-changes)
15. [Mobile Usage](#15-mobile-usage)

---

## 1. Opening the App

Open a browser and navigate to:

```
https://gilbar2.github.io/know-graph/
```

The app loads directly into the knowledge graph — no password is required for public access.

> **[SCREENSHOT: Full app on load — dark background, glowing nodes, header with logo and search bar]**

---

## 2. The Graph Canvas

The main view is an interactive force-directed graph. Each circle (node) represents an entity in the archive. Lines between nodes (edges) show relationships.

### Interacting with the graph

| Action | Result |
|--------|--------|
| **Click a node** | Opens the info panel for that node |
| **Drag a node** | Moves the node; the physics simulation adjusts |
| **Drag the background** | Pans the entire canvas |
| **Scroll wheel / pinch** | Zooms in or out |
| **Click empty space** | Closes the info panel |

### Node appearance

- **Size** reflects the node's relative importance
- **Color** reflects its category (see the legend, bottom-left)
- **Pulsing glow** on hover highlights the selected node and its connected neighbors
- **Thumbnail image** (if set) appears inside the node circle

> **[SCREENSHOT: Graph canvas with several nodes visible, one highlighted in hover state]**

---

## 3. Searching for Nodes

The search bar is at the top-right of the screen.

1. Type any part of a node's Hebrew name into the search box
2. Matching nodes **highlight** on the canvas; non-matching nodes dim
3. Clear the search to restore the full graph

> **[SCREENSHOT: Search bar with text entered, matching nodes lit up]**

---

## 4. Node Info Panel

Clicking any node opens the **info panel** on the right side of the screen.

The panel contains:

- **Node title** (large, at top)
- **Category badge** (color-coded pill)
- **Thumbnail image** — if one has been assigned, it appears above the description
- **Description text** — freeform Hebrew text about the node
- **Google Drive carousel** — if a Drive folder URL is linked to the node, an embedded file browser appears showing documents, images, and videos from that folder
- **Connected nodes list** — all nodes directly linked to this one, clickable to navigate

> **[SCREENSHOT: Info panel open for a node that has a thumbnail, description, and carousel]**

> **[SCREENSHOT: Drive carousel inside the info panel showing a folder's grid view]**

To **close** the panel, click anywhere on the empty canvas.

---

## 5. Category Legend

The legend is in the **bottom-left corner**. It shows the 8 categories with their color and icon.

- **Click a category** in the legend to filter the graph — only nodes in that category remain fully visible
- **Click again** to clear the filter

> **[SCREENSHOT: Legend panel bottom-left, one category selected/highlighted]**

---

## 6. Admin Panel — Logging In

The admin panel lets authorized users edit node content, manage connections, and add images.

1. Click the **⚙** (gear) icon in the top-right corner of the header
2. A password prompt appears — enter the admin password
3. The admin panel slides in from the right

> **[SCREENSHOT: Gear icon in header, top-right]**

> **[SCREENSHOT: Password prompt dialog]**

> **[SCREENSHOT: Admin panel open, showing list of nodes]**

---

## 7. Admin: Editing Node Labels & Descriptions

In the admin panel, every node in the graph appears as an expandable row.

1. Find the node you want to edit (scroll or search the list)
2. Click **+ ערוך תיאור** (Edit description) to expand the editing area
3. Edit the **label** (name) field
4. Edit the **description** text area
5. A **checkbox** next to each node can be checked to select it for connect/disconnect operations (see sections 12–13)

> **[SCREENSHOT: Node row expanded with label and description text fields visible]**

---

## 8. Admin: Editing Category Names

In the **Categories** tab of the admin panel:

1. Switch to the **קטגוריות** (Categories) tab
2. Each category shows its icon and a text field for its display name
3. Edit the name — changes apply live to the legend and all node badges

> **[SCREENSHOT: Categories tab with editable name fields next to each category icon]**

---

## 9. Admin: Editing Site Titles & Labels

In the **Texts** tab (טקסטים):

- **Site title** — appears in the browser tab and the logo
- **Node count label** — the word shown next to the node counter in the header stats
- **Edge count label** — the word shown next to the edge counter
- **Search placeholder** — the hint text inside the search bar

All changes are previewed immediately on the page.

> **[SCREENSHOT: Texts tab showing editable site title and label fields]**

---

## 10. Admin: Adding a Thumbnail Image (Manual Crop)

Each node can have a custom thumbnail image that appears in hover tooltips and in the info panel.

### Steps

1. In the admin node list, click **+ הוסף תמונה** (Add image) on the node you want
2. An **image upload dialog** appears — choose a file from your device
3. The **crop tool** opens showing your image

### Using the crop tool

The crop tool shows a **square selection box** over your image.

| Action | How |
|--------|-----|
| **Move the crop box** | Click and drag inside the box |
| **Resize the crop box** | Drag any of the 4 corner handles |
| The box is always 1:1 (square) | Aspect ratio is locked |

4. Position and resize the crop box to frame the part of the image you want
5. Click **✓ אשר חיתוך** (Confirm crop) to save the thumbnail (180×180 px)
6. The thumbnail now appears on the node in the graph and in the info panel

> **[SCREENSHOT: Crop tool open with image and square selection box, corner handles visible]**

> **[SCREENSHOT: Node in the graph with thumbnail visible inside the circle]**

To **replace** a thumbnail, click **+ הוסף תמונה** again and repeat the process.

---

## 11. Admin: Auto Thumbnail Generation

The **auto thumbnail** feature instantly generates a designed thumbnail for every node that doesn't already have one — no image upload needed.

1. At the bottom of the admin panel, click the purple **🖼 auto thumbnail** button
2. The app generates a canvas-based thumbnail for each node, using:
   - The node's **category color** as a background gradient
   - The **category icon** (emoji) as the central graphic
   - The **node label** in Hebrew text
   - A colored bar at the bottom with the category name
3. Thumbnails appear immediately on all nodes in the graph

> **[SCREENSHOT: Admin panel footer showing the blue "Connect", orange "Disconnect", and purple "Auto thumbnail" buttons]**

> **[SCREENSHOT: Graph after auto thumbnail — nodes showing generated thumbnails]**

**Note:** Auto thumbnail only fills nodes that have no existing thumbnail. Nodes with manually uploaded images are not overwritten.

To clear a manually set thumbnail and revert to auto, use auto thumbnail again after removing the custom image.

---

## 12. Admin: Connecting Nodes

To add a new edge (connection) between two nodes:

1. In the admin node list, check the **checkbox** next to two nodes you want to connect
2. Click the blue **🔗 חיבור צמתים** (Connect nodes) button in the admin footer
3. A new edge appears between the two selected nodes on the graph
4. The checkboxes are cleared automatically

> **[SCREENSHOT: Two checkboxes checked in the admin node list]**

> **[SCREENSHOT: Blue "Connect" button in the admin footer]**

> **[SCREENSHOT: New edge visible on the graph between the two nodes]**

---

## 13. Admin: Disconnecting Nodes

To remove an existing edge between two nodes:

1. Check the **checkbox** next to the two nodes whose connection you want to remove
2. Click the orange **✂️ ניתוק צמתים** (Disconnect nodes) button in the admin footer
3. If an edge exists between those two nodes, it is removed from the graph
4. If no edge exists between them, nothing changes

> **[SCREENSHOT: Orange "Disconnect" button in the admin footer]**

---

## 14. Saving Changes

All admin changes (labels, descriptions, thumbnails, connections) are **saved in the browser's localStorage** — they persist automatically across page reloads on the same browser.

To explicitly save and see confirmation:

1. Click the green **שמור שינויים** (Save changes) button at the bottom of the admin panel
2. The button briefly shows **✓ נשמר!** to confirm the save

> **[SCREENSHOT: Green "Save changes" button]**

**Important:** Changes are stored in the local browser only. If you open the app in a different browser or device, you will see the default data. To share changes with all users, the node data in `index.html` must be updated and the app redeployed.

---

## 15. Mobile Usage

The app is fully responsive and works on phones and tablets.

### Mobile layout differences

- The **info panel** slides up from the bottom and fills the full screen width
- The **admin panel** also fills the full width
- The **search bar** is narrower to fit the smaller header
- The **stats counter** (node/edge counts) is hidden on small screens to save space
- The **legend** repositions to the bottom of the screen

### Tips for mobile

- Use **pinch-to-zoom** on the canvas to zoom the graph
- **Tap** a node to open its info panel
- **Scroll inside the panel** with a finger swipe
- The admin panel is fully functional on mobile — all editing, thumbnail, and connect features work the same way

> **[SCREENSHOT: App on iPhone — graph visible with header and a node selected]**

> **[SCREENSHOT: Info panel open on mobile, filling the screen]**

---

## Notes for Screenshot Collection

When taking screenshots for this tutorial, capture the following states:

1. App on initial load (desktop, full browser)
2. A node hovered/highlighted on the canvas
3. Search bar with text, nodes highlighted
4. Info panel open — node with thumbnail, description, and Drive carousel
5. Legend with one category filtered
6. Admin gear icon (zoomed in on header)
7. Admin password prompt
8. Admin panel open — node list visible
9. A node row expanded with edit fields
10. Categories tab in admin
11. Texts tab in admin
12. Crop tool open with image
13. Node with thumbnail visible in graph
14. Admin footer — three buttons (blue, orange, purple)
15. Graph after auto thumbnail applied
16. Two checkboxes checked in node list
17. New edge visible after connecting
18. Green save button
19. App on iPhone (portrait)
20. Info panel on iPhone

---

*Tutorial written for v2.7 — last updated April 2026*
