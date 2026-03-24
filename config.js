/**
 * Bug Triage Calculator – Configuration
 *
 * Edit this file to customise the calculator for your project.
 * - Add, remove or rename factors.
 * - Change scale values, labels and descriptions.
 * - Adjust the quality-bar thresholds shown on the pain list.
 *
 * User Pain is calculated as:
 *   (factor1.value * factor2.value * … * factorN.value) / maxPossibleScore * 100
 *
 * maxPossibleScore is derived automatically from the highest value in each factor.
 */

const BugTriageConfig = {

  /** Title shown in the browser tab and page header */
  appTitle: "Bug Triage Calculator",

  /** Sub-heading shown below the main title */
  appSubtitle: "Based on the User Pain methodology by Lost Garden",

  /** Link shown in the header (set to null to hide) */
  methodologyLink: {
    url: "https://lostgarden.com/2008/05/20/improving-bug-triage-with-user-pain/",
    label: "Methodology"
  },

  /**
   * Rating factors.
   * Each factor has:
   *   id      – unique key used internally (no spaces)
   *   label   – display name shown in the form
   *   description – short sentence explaining the factor
   *   options – array of { value, label, description, catMeme? }
   *             listed from HIGHEST to LOWEST impact so the most critical
   *             option appears first in the UI.
   *             catMeme (optional) – URL of a cat meme image shown when
   *             ?catmode is present in the URL.
   */
  factors: [
    {
      id: "type",
      label: "Type",
      description: "What type of bug is this?",
      options: [
        { value: 7, label: "Crash",           description: "Bug causes crash or data loss. Asserts in the Debug release.", catMeme: "https://cataas.com/cat/says/OH%20NO!" },
        { value: 6, label: "Major Usability", description: "Impairs usability in key scenarios.",                         catMeme: "https://cataas.com/cat/says/It's%20broken!" },
        { value: 5, label: "Minor Usability", description: "Impairs usability in secondary scenarios.",                   catMeme: "https://cataas.com/cat/says/Kinda%20broken" },
        { value: 4, label: "Balancing",       description: "Enables degenerate usage strategies that harm the experience.", catMeme: "https://cataas.com/cat/says/Something's%20off" },
        { value: 3, label: "Polish",          description: "Visual and sound aesthetic issues.",                           catMeme: "https://cataas.com/cat/says/Needs%20more%20love" },
        { value: 2, label: "Localization",    description: "A localization or internationalization issue.",                catMeme: "https://cataas.com/cat/says/Lost%20in%20translation" },
        { value: 1, label: "Documentation",   description: "A documentation issue.",                                      catMeme: "https://cataas.com/cat/says/Where%20are%20the%20docs%3F" }
      ]
    },
    {
      id: "likelihood",
      label: "Likelihood",
      description: "Who will be affected by this bug?",
      options: [
        { value: 5, label: "All users",     description: "Will affect all users.",                        catMeme: "https://cataas.com/cat/says/Everyone%20is%20affected!" },
        { value: 4, label: "Most users",    description: "Will affect most users.",                       catMeme: "https://cataas.com/cat/says/Most%20are%20affected" },
        { value: 3, label: "Average",       description: "Will affect an average number of users.",       catMeme: "https://cataas.com/cat/says/Some%20are%20affected" },
        { value: 2, label: "Few users",     description: "Will only affect a few users.",                 catMeme: "https://cataas.com/cat/says/A%20few%20are%20affected" },
        { value: 1, label: "Almost no one", description: "Will affect almost no one.",                    catMeme: "https://cataas.com/cat/says/Nobody%20cares" }
      ]
    },
    {
      id: "priority",
      label: "Priority",
      description: "How will those affected feel about the bug?",
      options: [
        { value: 5, label: "Blocking",  description: "Blocking further progress on the daily build.",                                                                             catMeme: "https://cataas.com/cat/says/HALP!%20Blocking!" },
        { value: 4, label: "Critical",  description: "A user would return the product. Cannot release. The team would hold the release for this bug.",                            catMeme: "https://cataas.com/cat/says/This%20is%20critical!" },
        { value: 3, label: "Serious",   description: "A user would likely not purchase the product. Will show up in reviews. Clearly a noticeable issue.",                        catMeme: "https://cataas.com/cat/says/Quite%20serious" },
        { value: 2, label: "Annoying",  description: "A pain – users won't like this once they notice it. A moderate number of users won't buy.",                                 catMeme: "https://cataas.com/cat/says/So%20annoying" },
        { value: 1, label: "Nuisance",  description: "Not a big deal but noticeable. Extremely unlikely to affect sales.",                                                        catMeme: "https://cataas.com/cat/says/Just%20a%20nuisance" }
      ]
    }
  ],

  /**
   * Quality-bar thresholds drawn on the pain list.
   * Each entry draws a labelled horizontal divider.
   * Values are percentages of User Pain (0–100).
   */
  qualityBars: [
    { threshold: 60, label: "Must fix before release",  color: "#e53e3e" },
    { threshold: 30, label: "Fix if time allows",       color: "#dd6b20" },
    { threshold: 10, label: "Nice to have",             color: "#d69e2e" }
  ],

  /**
   * Default quality-bar threshold used for the interactive threshold control.
   * Bugs above this line are highlighted.
   */
  defaultQualityBarThreshold: 30
};
