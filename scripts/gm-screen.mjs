// kult-gm-screen/scripts/gm-screen.mjs
// Main Application window for the Kult GM Screen

import {
  MOVES, UNIQUE_MOVES, NPC_DATA, HORROR_CONTRACT,
  HARM_DATA, STABILITY, EXPERIENCE_QUESTIONS
} from "./data.mjs";

const MODULE_ID = "kult-gm-screen";

export class KultGMScreen extends Application {

  constructor(options = {}) {
    super(options);
    this._currentTab = game.settings.get(MODULE_ID, "rememberTab")
      ? game.settings.get(MODULE_ID, "lastTab")
      : game.settings.get(MODULE_ID, "defaultTab");
    this._uniqueFilter = "all";
    this._npcSelections = { body: [], face: [], eyes: [], clothes: [], drive: [] };
    this._xpChecked = [false, false, false];
    this._chatLog = [];
  }

  static get defaultOptions() {
    const pos = game.settings.get(MODULE_ID, "screenPosition") ?? "right";
    const leftPos = pos === "left" ? 10 : pos === "center" ? window.innerWidth / 2 - 380 : window.innerWidth - 780;
    return mergeObject(super.defaultOptions, {
      id: "kult-gm-screen",
      title: "Kult: Divinity Lost — GM Screen",
      template: "modules/kult-gm-screen/templates/gm-screen.hbs",
      width: 760,
      height: 640,
      resizable: true,
      left: leftPos,
      top: 60,
      classes: ["kult-gm-screen"]
    });
  }

  getData() {
    return {
      moves: MOVES,
      uniqueMoves: UNIQUE_MOVES,
      npcData: NPC_DATA,
      horrorContract: HORROR_CONTRACT,
      harmData: HARM_DATA,
      stability: STABILITY,
      experienceQuestions: EXPERIENCE_QUESTIONS,
      currentTab: this._currentTab,
      uniqueFilter: this._uniqueFilter,
      npcSelections: this._npcSelections,
      xpChecked: this._xpChecked,
      chatLog: this._chatLog,
      moveCategories: Object.keys(MOVES),
      uniqueCategories: Object.keys(UNIQUE_MOVES)
    };
  }

  activateListeners(html) {
    super.activateListeners(html);

    // Tab switching
    html.find(".kult-tab").on("click", (e) => {
      const tab = e.currentTarget.dataset.tab;
      this._switchTab(tab, html);
    });

    // Search
    html.find("#kult-search").on("input", (e) => {
      this._handleSearch(e.currentTarget.value, html);
    });

    // Move chips — click to output to chat
    html.find(".move-chip").on("click", (e) => {
      const move = e.currentTarget.dataset.move;
      this._sendMoveToChat(move);
    });

    // Unique move filter buttons
    html.find(".um-filter-btn").on("click", (e) => {
      const cat = e.currentTarget.dataset.cat;
      this._uniqueFilter = cat;
      this.render();
    });

    // NPC tag toggling
    html.find(".tag-item").on("click", (e) => {
      const el = e.currentTarget;
      const category = el.dataset.category;
      const value = el.dataset.value;
      this._toggleNPCTag(category, value, html);
    });

    // NPC generate / clear
    html.find("#npc-generate").on("click", () => this._generateRandomNPC(html));
    html.find("#npc-clear").on("click", () => this._clearNPC(html));

    // Experience checkboxes
    html.find(".xp-item").on("click", (e) => {
      const idx = parseInt(e.currentTarget.dataset.index);
      this._toggleXP(idx, html);
    });
    html.find("#xp-reset").on("click", () => this._resetXP(html));

    // GM Chat
    html.find("#chat-send").on("click", () => this._sendChatCmd(html));
    html.find("#chat-input").on("keydown", (e) => {
      if (e.key === "Enter") this._sendChatCmd(html);
    });
    html.find(".quick-cmd").on("click", (e) => {
      const cmd = e.currentTarget.dataset.cmd;
      html.find("#chat-input").val(cmd);
      this._sendChatCmd(html);
    });
    html.find("#chat-clear").on("click", () => {
      this._chatLog = [];
      html.find("#chat-output").html('<p class="kult-chat-system">Chat cleared.</p>');
    });

    // Open GM Screen button from chat
    html.find("#open-chat-btn").on("click", () => this._switchTab("chat", html));

    // Restore tab state
    this._switchTab(this._currentTab, html, false);
    this._renderXPState(html);
    this._renderNPCState(html);
    this._renderChatLog(html);
  }

  _switchTab(tabId, html, save = true) {
    this._currentTab = tabId;
    if (save && game.settings.get(MODULE_ID, "rememberTab")) {
      game.settings.set(MODULE_ID, "lastTab", tabId);
    }
    html.find(".tab-panel").removeClass("active").hide();
    html.find(`#panel-${tabId}`).addClass("active").show();
    html.find(".kult-tab").removeClass("active");
    html.find(`.kult-tab[data-tab="${tabId}"]`).addClass("active");
  }

  _handleSearch(query, html) {
    const q = query.toLowerCase().trim();
    if (!q) {
      html.find(".move-chip").show();
      return;
    }
    html.find(".move-chip").each((_, el) => {
      const text = (el.dataset.move || el.textContent).toLowerCase();
      $(el).toggle(text.includes(q));
    });
    // Switch to moves tab for search
    if (q.length > 1) this._switchTab("moves", html);
  }

  _sendMoveToChat(moveName) {
    ChatMessage.create({
      speaker: { alias: "GM (Kult Screen)" },
      content: `<div class="kult-chat-move"><strong>GM Move:</strong> ${moveName}</div>`,
      type: CONST.CHAT_MESSAGE_TYPES.OTHER,
      whisper: game.users.filter(u => u.isGM).map(u => u.id)
    });
  }

  _toggleNPCTag(category, value, html) {
    const idx = this._npcSelections[category].indexOf(value);
    if (idx === -1) {
      this._npcSelections[category].push(value);
    } else {
      this._npcSelections[category].splice(idx, 1);
    }
    html.find(`.tag-item[data-category="${category}"][data-value="${value}"]`)
      .toggleClass("selected", idx === -1);
    this._renderNPCState(html);
  }

  _generateRandomNPC(html) {
    this._clearNPC(html, false);
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];
    for (const [cat, items] of Object.entries(NPC_DATA)) {
      const chosen = pick(items);
      this._npcSelections[cat] = [chosen];
      html.find(`.tag-item[data-category="${cat}"][data-value="${chosen}"]`).addClass("selected");
    }
    this._renderNPCState(html);
  }

  _clearNPC(html, render = true) {
    this._npcSelections = { body: [], face: [], eyes: [], clothes: [], drive: [] };
    html.find(".tag-item").removeClass("selected");
    if (render) this._renderNPCState(html);
  }

  _renderNPCState(html) {
    const result = html.find("#npc-result");
    const hasAny = Object.values(this._npcSelections).some(a => a.length > 0);
    if (!hasAny) { result.html(""); return; }
    const labels = { body: "Body", face: "Face", eyes: "Eyes", clothes: "Clothes", drive: "Drive" };
    let out = `<div class="kult-npc-result"><div class="kult-npc-result-title">✦ NPC Profile</div>`;
    for (const [key, label] of Object.entries(labels)) {
      if (this._npcSelections[key].length > 0) {
        out += `<div class="kult-npc-row"><span class="kult-npc-label">${label}:</span><span>${this._npcSelections[key].join(", ")}</span></div>`;
      }
    }
    out += `<button class="kult-btn-small" id="npc-send-chat">Send to Chat</button></div>`;
    result.html(out);
    result.find("#npc-send-chat").on("click", () => this._sendNPCToChat());
  }

  _sendNPCToChat() {
    const labels = { body: "Body", face: "Face", eyes: "Eyes", clothes: "Clothes", drive: "Drive" };
    let content = `<div class="kult-chat-npc"><h3>✦ NPC Profile</h3>`;
    for (const [key, label] of Object.entries(labels)) {
      if (this._npcSelections[key].length > 0) {
        content += `<p><strong>${label}:</strong> ${this._npcSelections[key].join(", ")}</p>`;
      }
    }
    content += `</div>`;
    ChatMessage.create({
      speaker: { alias: "GM (Kult Screen)" },
      content,
      type: CONST.CHAT_MESSAGE_TYPES.OTHER,
      whisper: game.users.filter(u => u.isGM).map(u => u.id)
    });
  }

  _toggleXP(index, html) {
    this._xpChecked[index] = !this._xpChecked[index];
    this._renderXPState(html);
  }

  _resetXP(html) {
    this._xpChecked = [false, false, false];
    this._renderXPState(html);
  }

  _renderXPState(html) {
    this._xpChecked.forEach((checked, i) => {
      const check = html.find(`#xp-check-${i}`);
      check.toggleClass("checked", checked);
    });
    const total = this._xpChecked.filter(Boolean).length;
    html.find("#xp-count").text(total);
  }

  _sendChatCmd(html) {
    const input = html.find("#chat-input");
    const val = input.val().trim();
    if (!val) return;
    input.val("");
    this._chatLog.push({ who: "You", msg: val, cls: "user" });
    const response = KultGMScreen.processCommand(val);
    this._chatLog.push({ who: "System", msg: response.html, cls: response.cls || "system" });
    this._renderChatLog(html);
  }

  _renderChatLog(html) {
    const output = html.find("#chat-output");
    if (this._chatLog.length === 0) {
      output.html(`<p class="kult-chat-system">Kult GM Screen ready. Type <em>/help</em> for commands.</p>`);
      return;
    }
    output.html(this._chatLog.map(entry =>
      `<div class="kult-chat-msg">
        <div class="kult-chat-label ${entry.cls}">${entry.who}</div>
        <div class="kult-chat-body">${entry.msg}</div>
      </div>`
    ).join(""));
    output[0].scrollTop = output[0].scrollHeight;
  }

  // Static command processor (also used by chat hooks)
  static processCommand(cmd) {
    const c = cmd.toLowerCase().trim();

    if (c.startsWith("/roll") || c.startsWith("/r ")) {
      const match = cmd.match(/(\d+)d(\d+)/i);
      if (match) {
        const dice = parseInt(match[1]), sides = parseInt(match[2]);
        const rolls = Array.from({ length: dice }, () => Math.floor(Math.random() * sides) + 1);
        const total = rolls.reduce((a, b) => a + b, 0);
        const label = dice === 2 && sides === 10 ? KultGMScreen.getResultLabel(total) : "";
        return { html: `Rolling ${dice}d${sides}: [${rolls.join(", ")}] = <strong>${total}</strong> ${label}`, cls: "gm" };
      }
      const r1 = Math.floor(Math.random() * 10) + 1;
      const r2 = Math.floor(Math.random() * 10) + 1;
      const tot = r1 + r2;
      return { html: `Rolling 2d10: [${r1}, ${r2}] = <strong>${tot}</strong> — ${KultGMScreen.getResultLabel(tot)}`, cls: "gm" };
    }

    if (c.startsWith("/move")) {
      const allMoves = Object.values(MOVES).flat();
      const m = allMoves[Math.floor(Math.random() * allMoves.length)];
      return { html: `<em class="kult-gold">GM Move: ${m}</em>`, cls: "gm" };
    }

    if (c.startsWith("/harm")) {
      const val = parseInt(cmd.split(" ")[1]) || 1;
      return {
        html: `Harm ${val}: Roll +Fortitude −${val} (add armor if worn).<br>
          <span class="rb-15">15+</span> Ride out the pain.<br>
          <span class="rb-10">10–14</span> Still standing — GM picks condition.<br>
          <span class="rb-fail">–9</span> Knocked out / Critical Wound / Die.`,
        cls: "gm"
      };
    }

    if (c.startsWith("/stability")) {
      return {
        html: `Stability track: Composed → Uneasy → Unfocused → Shaken → Distressed → Neurotic → Anxious → Irrational → Unhinged → <strong class="kult-red">Broken</strong> (GM makes a Move)`,
        cls: "gm"
      };
    }

    if (c.startsWith("/npc")) {
      const pick = arr => arr[Math.floor(Math.random() * arr.length)];
      const body = pick(NPC_DATA.body);
      const face = pick(NPC_DATA.face);
      const eyes = pick(NPC_DATA.eyes);
      const clothes = pick(NPC_DATA.clothes);
      const drive = pick(NPC_DATA.drive);
      return {
        html: `<strong class="kult-gold">Random NPC</strong><br>Body: ${body} | Face: ${face} | Eyes: ${eyes}<br>Clothes: ${clothes} | Drive: ${drive}`,
        cls: "gm"
      };
    }

    if (c.startsWith("/wound")) {
      if (c.includes("critical")) {
        return { html: `<strong class="kult-red">Critical Wound</strong> — Will not heal on its own. Gets worse without treatment. Urgent medical care required. −1 ongoing.`, cls: "gm" };
      }
      return { html: `<strong class="kult-gold">Serious Wound</strong> — Requires care and time. Won't worsen on its own. Max 4 (extras become Critical). −1 ongoing.`, cls: "gm" };
    }

    if (c === "/help") {
      return {
        html: `<strong class="kult-gold">Commands:</strong><br>
          /roll [XdY] — Roll dice (default 2d10)<br>
          /move — Random GM move<br>
          /harm [N] — Harm N reference<br>
          /stability — Stability track<br>
          /npc — Random NPC<br>
          /wound serious|critical — Wound reference`,
        cls: "gm"
      };
    }

    // Fuzzy move search
    const allMoves = Object.values(MOVES).flat();
    const found = allMoves.find(m => m.toLowerCase().includes(c.replace("/", "")));
    if (found) return { html: `Move found: <em class="kult-gold">${found}</em>`, cls: "gm" };

    return { html: `Unknown command. Type <em>/help</em> for available commands.`, cls: "system" };
  }

  static getResultLabel(total) {
    if (total >= 15) return `<span class="rb-15">Full success (15+)</span>`;
    if (total >= 10) return `<span class="rb-10">Partial success (10–14)</span>`;
    return `<span class="rb-fail">Failure (–9)</span>`;
  }

  static addToolbarButton() {
    Hooks.on("renderSceneControls", (app, html) => {
      // Add a sidebar button via the Players section or use a macro-bar approach
    });

    // Simpler: add a button to the sidebar
    Hooks.on("renderSidebarTab", (app, html) => {
      if (app.tabName !== "chat") return;
      if (html.find("#kult-screen-btn").length) return;
      const btn = $(`<button id="kult-screen-btn" class="kult-sidebar-btn" title="Open GM Screen">
        ◈ Kult GM Screen
      </button>`);
      btn.on("click", () => game.kultGMScreen.render(true));
      html.find(".directory-footer, .directory-header").first().append(btn);
    });
  }

  toggle() {
    if (this.rendered) {
      this.close();
    } else {
      this.render(true);
    }
  }
}
