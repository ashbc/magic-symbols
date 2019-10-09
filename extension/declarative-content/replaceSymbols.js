/* global findAndReplaceDOMText, symbols */

const getSymbol = function createManamojiImageElement(orig, id) {
	const src = chrome.runtime.getURL(`manamoji-slack-master/emojis/${id}`);
	const n = document.createElement('img');
	n.setAttribute('src', src);
	n.setAttribute('alt', `{${orig}}`);
	n.classList.add('magic-symbols-manamoji');
	return n;
};

Object.entries(symbols).forEach(([k, v]) => {
	// string-escaped backslash for regexp-escaped {
	// equivalent example: /\{T\}/ to match '{T}'
	const rx = new RegExp(`\\{${k}\\}`, 'g');
	findAndReplaceDOMText(document.body, {
		find: rx,
		replace: () => getSymbol(k, v),
		preset: 'prose',
	});
});
