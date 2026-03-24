# Bug Triage Calculator

A static, single-page **Bug Triage Calculator** based on the
[User Pain methodology by Lost Garden](https://lostgarden.com/2008/05/20/improving-bug-triage-with-user-pain/).

> **Live page →** https://saschalucius.github.io/bug-triage/

---

## What it does

Helps your team objectively rank bugs by calculating a single **User Pain %** score:

```
User Pain = (Type × Likelihood × Priority) ÷ MaxPossibleScore × 100
```

Bugs are then sorted into a **Pain List** so you can set quality-bar thresholds and
decide what must be fixed before a release.

---

## Features

| Feature | Details |
|---|---|
| 📋 **Anchored scales** | Every rating option shows its full description so submitters aren't guessing |
| 🔢 **Auto-calculation** | User Pain is computed live as you select values |
| 📊 **Pain List** | All bugs sorted by User Pain, highest first |
| 🚦 **Quality Bar** | Drag a threshold line to split "must fix" from "nice to have" |
| 💾 **Persistent storage** | Bugs are saved in `localStorage` — no server needed |
| ⬇ **Export / Import** | JSON export and import for backups or sharing |
| 🎨 **Fully customisable** | Edit `config.js` to change factors, labels and thresholds |

---

## Customisation

All configurable values live in **`config.js`**. Open it and edit:

```js
const BugTriageConfig = {
  appTitle: "My Project – Bug Triage",

  factors: [
    {
      id: "type",
      label: "Type",
      description: "What type of bug is this?",
      options: [
        { value: 7, label: "Crash", description: "Bug causes crash or data loss." },
        // … add or remove options here
      ]
    },
    // … add or remove factors here
  ],

  qualityBars: [
    { threshold: 60, label: "Must fix before release", color: "#e53e3e" },
    // … customise thresholds
  ],

  defaultQualityBarThreshold: 30
};
```

No build step required — just edit and refresh.

---

## GitHub Pages setup

1. Go to **Settings → Pages** in this repository.
2. Under **Source**, choose `Deploy from a branch`.
3. Select branch `main` (or your default branch) and folder `/ (root)`.
4. Save. GitHub will publish the page at `https://<owner>.github.io/<repo>/`.

---

## Local development

Because the app is plain HTML + CSS + JavaScript, you can open `index.html` directly
in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## Credits

Methodology: [Improving Bug Triage with User Pain](https://lostgarden.com/2008/05/20/improving-bug-triage-with-user-pain/) by Daniel Cook / Lost Garden.