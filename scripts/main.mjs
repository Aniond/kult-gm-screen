// kult-gm-screen/scripts/main.mjs
// Kult: Divinity Lost — GM Screen Module for Foundry VTT

import { KultGMScreen } from "./gm-screen.mjs";
import { KultChatCommands } from "./chat-commands.mjs";

const MODULE_ID = "kult-gm-screen";

Hooks.once("init", () => {
  console.log(`${MODULE_ID} | Initializing Kult: Divinity Lost GM Screen`);

  // Register module settings
  game.settings.register(MODULE_ID, "defaultTab", {
    name: "Default Tab",
    hint: "The tab shown when the GM Screen is first opened.",
    scope: "client",
    config: true,
    type: String,
    default: "moves",
    choices: {
      moves: "GM Moves",
      rules: "Rules",
      harm: "Harm",
      unique: "Unique Moves",
      npc: "NPC Builder",
      horror: "Horror Contract",
      xp: "Experience",
      chat: "GM Chat"
    }
  });

  game.settings.register(MODULE_ID, "screenPosition", {
    name: "Screen Position",
    hint: "Where the GM Screen appears on screen.",
    scope: "client",
    config: true,
    type: String,
    default: "right",
    choices: {
      left: "Left",
      right: "Right",
      center: "Center"
    }
  });

  game.settings.register(MODULE_ID, "rememberTab", {
    name: "Remember Last Tab",
    hint: "Re-open the GM Screen on whichever tab you last used.",
    scope: "client",
    config: true,
    type: Boolean,
    default: true
  });

  game.settings.register(MODULE_ID, "lastTab", {
    scope: "client",
    config: false,
    type: String,
    default: "moves"
  });
});

Hooks.once("ready", () => {
  console.log(`${MODULE_ID} | Ready`);

  // Attach to game object for macro/console access
  game.kultGMScreen = new KultGMScreen();

  // Register chat commands
  KultChatCommands.register();

  // Add toolbar button (for GMs only)
  if (game.user.isGM) {
    KultGMScreen.addToolbarButton();
  }
});

// Register a keyboard shortcut to open/close the screen
Hooks.once("ready", () => {
  if (!game.user.isGM) return;

  game.keybindings.register(MODULE_ID, "openScreen", {
    name: "Open/Close GM Screen",
    hint: "Toggle the Kult GM Screen panel.",
    editable: [{ key: "KeyG", modifiers: ["Alt"] }],
    onDown: () => {
      game.kultGMScreen?.toggle();
    }
  });
});
