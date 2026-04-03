// kult-gm-screen/scripts/chat-commands.mjs
// Intercept Foundry chat messages for /kult commands

import { KultGMScreen } from "./gm-screen.mjs";

export class KultChatCommands {

  static register() {
    // Hook into chat message creation to intercept /kult commands
    Hooks.on("chatMessage", (chatLog, message, chatData) => {
      return KultChatCommands.handleMessage(message, chatData);
    });
  }

  /**
   * Returns false to prevent the default chat message if we handle the command.
   */
  static handleMessage(message, chatData) {
    const msg = message.trim();

    // Only handle messages starting with /kult
    if (!msg.startsWith("/kult")) return true;

    // GM only
    if (!game.user.isGM) {
      ui.notifications.warn("Kult GM Screen commands are GM-only.");
      return false;
    }

    const parts = msg.split(" ");
    const subCmd = parts[1]?.toLowerCase() || "open";

    switch (subCmd) {
      case "open":
      case "screen":
        game.kultGMScreen?.render(true);
        return false;

      case "roll":
      case "r": {
        const diceStr = parts[2] || "2d10";
        const response = KultGMScreen.processCommand(`/roll ${diceStr}`);
        KultChatCommands._postGMResult(response.html);
        return false;
      }

      case "move": {
        const response = KultGMScreen.processCommand("/move");
        KultChatCommands._postGMResult(response.html);
        return false;
      }

      case "npc": {
        const response = KultGMScreen.processCommand("/npc");
        KultChatCommands._postGMResult(response.html);
        return false;
      }

      case "harm": {
        const val = parts[2] || "1";
        const response = KultGMScreen.processCommand(`/harm ${val}`);
        KultChatCommands._postGMResult(response.html);
        return false;
      }

      case "wound": {
        const type = parts[2] || "serious";
        const response = KultGMScreen.processCommand(`/wound ${type}`);
        KultChatCommands._postGMResult(response.html);
        return false;
      }

      case "stability": {
        const response = KultGMScreen.processCommand("/stability");
        KultChatCommands._postGMResult(response.html);
        return false;
      }

      case "help": {
        KultChatCommands._postGMResult(`
          <strong>Kult GM Screen Chat Commands:</strong><br>
          <code>/kult open</code> — Open the GM Screen<br>
          <code>/kult roll [XdY]</code> — Roll dice (default 2d10)<br>
          <code>/kult move</code> — Random GM Move<br>
          <code>/kult npc</code> — Generate a random NPC<br>
          <code>/kult harm [N]</code> — Harm N reference<br>
          <code>/kult wound [serious|critical]</code> — Wound reference<br>
          <code>/kult stability</code> — Stability track<br>
          <code>/kult help</code> — Show this help
        `);
        return false;
      }

      default:
        ui.notifications.warn(`Unknown /kult command: "${subCmd}". Try /kult help.`);
        return false;
    }
  }

  static _postGMResult(html) {
    ChatMessage.create({
      speaker: { alias: "Kult GM Screen" },
      content: `<div class="kult-chat-result">${html}</div>`,
      type: CONST.CHAT_MESSAGE_TYPES.OTHER,
      whisper: game.users.filter(u => u.isGM).map(u => u.id)
    });
  }
}
