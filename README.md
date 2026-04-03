# Kult: Divinity Lost — GM Screen

A comprehensive **Foundry VTT module** providing a quick-reference GM Screen for *Kult: Divinity Lost*. All GM Moves, Rules, Harm tables, Unique Moves, NPC Builder, Horror Contract, and an in-module command system — all in one resizable panel.

![Kult GM Screen Preview](assets/cover.webp)

---

## Features

| Tab | Contents |
|-----|----------|
| **GM Moves** | All 9 categories: Regular, Elysium, Madness, Passion, Dream, Underworld, Metropolis, Inferno, Gaia |
| **Rules** | Keep it Together, Avoid Harm, Endure Injury (with colour-coded roll results), Stability track, Relation Moves |
| **Harm** | Wound penalties, Typical Harm table, Weapon Harm table, Serious/Critical Wound descriptions |
| **Unique Moves** | Combat, Influence, Magic — all tiers (1 Weak → 5 Exceptional), filterable by category |
| **NPC Builder** | Click-to-select tag clouds for Body, Face, Eyes, Clothes, Drive — or generate a random NPC instantly |
| **Horror Contract** | All 9 GM principles with explanations |
| **Experience** | Checkable session questions with reset |
| **GM Chat** | In-panel command system with quick-action buttons |

### Chat Commands

Works both inside the GM Screen panel **and** in Foundry's main chat as `/kult [command]`:

| Command | Description |
|---------|-------------|
| `/kult open` | Open the GM Screen |
| `/kult roll [XdY]` | Roll dice (default 2d10) with Kult success labels |
| `/kult move` | Output a random GM Move to GM-only chat |
| `/kult npc` | Generate a random NPC description |
| `/kult harm [N]` | Show Endure Injury reference for Harm N |
| `/kult wound [serious\|critical]` | Show wound rules |
| `/kult stability` | Show the full Stability track |
| `/kult help` | List all commands |

### Other Features

- **Search bar** — filter all GM moves by keyword
- **Click any move chip** to whisper it to GM chat
- **Send NPC to Chat** button on generated NPCs
- **Keyboard shortcut** — `Alt + G` to toggle the screen
- **Sidebar button** in the chat tab for quick access
- **Remembers your last tab** between sessions
- **Resizable window** — drag to fit your layout
- **Position setting** — left, right, or center of screen

---

## Installation

### Method 1 — Foundry Package Manager (recommended)

1. Open Foundry VTT → **Configuration** → **Add-on Modules**
2. Click **Install Module**
3. Paste the manifest URL:
   ```
   https://raw.githubusercontent.com/Aniond/kult-gm-screen/main/module.json
   ```
4. Click **Install**, then enable the module in your World

### Method 2 — Manual

1. Download the [latest release ZIP](https://github.com/Aniond/kult-gm-screen/releases)
2. Extract to `{your Foundry data folder}/Data/modules/kult-gm-screen/`
3. Restart Foundry and enable the module in your World

---

## Usage

- Click the **◈ Kult GM Screen** button in the sidebar chat panel, **or**
- Use the keyboard shortcut `Alt + G`
- The screen is **GM-only** — players cannot open or see GM commands

### Settings

Go to **Game Settings → Module Settings → Kult GM Screen**:

- **Default Tab** — which tab opens first
- **Screen Position** — left / right / center of screen
- **Remember Last Tab** — re-open on your last used tab

---

## Compatibility

| Foundry Version | Status |
|-----------------|--------|
| v12 | ✅ Verified |
| v11 | ✅ Minimum supported |
| v10 and below | ❌ Not supported |

---

## Contributing

Pull requests welcome! Please:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

### Project Structure

```
kult-gm-screen/
├── module.json          # Foundry module manifest
├── README.md
├── CHANGELOG.md
├── LICENSE
├── scripts/
│   ├── main.mjs         # Entry point, hooks, settings, keybindings
│   ├── gm-screen.mjs    # Main Application class
│   ├── chat-commands.mjs # /kult chat command handler
│   └── data.mjs         # All GM Screen reference data
├── styles/
│   └── kult-gm-screen.css
├── templates/
│   └── gm-screen.hbs    # Handlebars template
├── lang/
│   └── en.json          # English strings
└── assets/
    └── cover.webp       # Module preview image
```

---

## Legal

This module is an **unofficial fan tool** for *Kult: Divinity Lost* by Helmgast AB. It contains only reference data from the published GM Screen supplement. *Kult: Divinity Lost* and all associated content are the property of Helmgast AB. This module is not affiliated with or endorsed by Helmgast AB.

Released under the [MIT License](LICENSE).

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md)
