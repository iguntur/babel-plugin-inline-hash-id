# babel-plugin-inline-hash-id

> Learn AST and create babel plugin.

Generate hash ID by given an input.


## Example 1

### Source

```js
React.createElement('div', {
	id: __hashId('root')
});

React.createElement('div', {
	id: __hashId('foobarbaz', {uniqPerFile: false, maxLength: 20})
});
```

### Output

```js
React.createElement('div', {
	id: 'BkbudHtGGjOI'
});
React.createElement('div', {
	id: 'liLWjkurwUbNyLpxqdzd'
});
```

## Example 2

### Source

```js
React.createElement('div', {
	id: __hashId('root')
});

React.createElement('div', {
	id: __hashId('foobarbaz', {uniqPerFile: false, maxLength: 20})
});
```

### Output

```js
React.createElement('div', {
	id: 'eWVgAjHFWjcZ'
});
React.createElement('div', {
	id: 'liLWjkurwUbNyLpxqdzd'
});
```


## .babelrc

```json
{
    "plugins": [
        "./babel-plugin-inline-hash-id"
    ]
}
```

### Default Options

```json
{
    "plugins": [
        ["./babel-plugin-inline-hash-id", {
            "fnName": "__hashId",
            "algorithm": "sha256",
            "digest": "base64",
            "maxLength": 12,
            "uniqPerFile": true
		}]
    ]
}
```


## License

MIT © [Guntur Poetra](https://github.com/iguntur)
