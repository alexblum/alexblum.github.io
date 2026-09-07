/* ---------- Bücherregal-Registry ----------
 * Neue Bücher: Eintrag hier + Ordner books/<slug>/ mit index.html & story.js
 * "new": true  → zeigt einen "bald"-Schriftzug auf dem Cover.
 */
window.BOOKS = [
  {
    slug: "mika-mond",
    title: "Mika und der schüchterne Mond",
    subtitle: "Eine Gute-Nacht-Geschichte zum Lesenüben",
    emoji: "🦔",
    author: "von Papa",
    chapters: 1,
    pages: 9,
    palette: ["#16213f", "#0b1226"],
    accent: "#f6c667",
    art: "moon"
  },
  {
    slug: "neues-buch",
    title: "Neues Buch",
    subtitle: "In Arbeit …",
    emoji: "📚",
    author: "von Papa",
    chapters: 0,
    pages: 0,
    palette: ["#2a3c6c", "#16213f"],
    accent: "#e8735c",
    art: "book",
    isNew: true
  }
];
