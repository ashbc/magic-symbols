# Magic Symbols

Magic Symbols is a Chrome browser extension that replaces codes such as `{T}` with corresponding Magic: The Gathering symbols, such as ![{T} symbol](extension/manamoji-slack-master/emojis/mana-t.png).

The symbols are taken from [scryfall.com's Manamoji icons](https://scryfall.com/bots), distributed under Public Domain. The file `processImages.js` is a Node script that reads each symbol, does some processing, and creates a big mapping of symbol codes to image filenames, and stores it in `declarative-content/symbols-list.js` for use in the extension.

## Building

Run `processImages.js` in Node once.

## Limitations

There's no way to disable replacement per-symbol or per-site.

The script is run only on page load, so any content added to the document after that (EG in a chat) will not be processed.

Only symbols provided by [Scryfall](https://scryfall.com/bots) are used. Absences include the Planeswalker symbol {PW} (for the Planechase variant); Roman numerals {r1}, {r2}, and so on (for Saga cards); and loyalty symbols (for planeswalker cards).

The silver-bordered Magic symbols are not fully supported. To get long symbols to display correctly, multiple codes are required: for example, for the hundred-mana symbol ![{100} symbol](extension/manamoji-slack-master/emojis/mana-100-1.png)![{100} symbol](extension/manamoji-slack-master/emojis/mana-100-2.png), the sequence of codes is {100-1}{100-2}.
