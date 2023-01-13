# Search on WaniKani

Search for selected text on WaniKani

## Quick start

1. Install the [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/search-on-wanikani/)
2. Select any text on a web page
3. Right-click to open the context menu
4. Choose either "Search Kanji on WaniKani" or "Search Vocabulary on WaniKani"

## Development

To run the extension locally, we recommend using the [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) NPM module, which you can install as follows.

```
# NPM
npm install --global web-ext

# Yarn
yarn global add web-ext
```

To open the extension in a fresh Firefox instance,

```
web-ext run
```

To package the extension for publishing on addons.mozilla.org,

```
web-ext build
```

See the [web-ext documentation](https://github.com/mozilla/web-ext#documentation) for more information.

## See also

- [Search on Kitsun.io](https://github.com/Ollie2304/Search-on-Kitsun.io)
- [Search on Bunpro](https://github.com/12joan/search-on-bunpro)
