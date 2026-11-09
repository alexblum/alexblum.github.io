const BOOK_IMG = (name) => `<img src="img/${name}.png" alt="" decoding="async">`;
const _storyPages = window.STORY.chapters.flatMap(ch => ch.pages);
window.STORY.coverImg = BOOK_IMG('cover');
window.STORY.chapterImg = BOOK_IMG('chapter');
_storyPages.forEach((page, i) => { page.img = BOOK_IMG(`p${i}`); });
