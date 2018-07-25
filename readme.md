# babel-plugin-inline-hash-id

> Learn AST and create babel plugin.

Generate hash ID by given an input.


## Install

```console
$ npm install babel-plugin-inline-hash-id
```


## Setup

### .babelrc

```json
{
    "plugins": [
        "inline-hash-id"
    ]
}
```

#### Default Options

```json
{
    "plugins": [
        ["inline-hash-id", {
            "fnName": "__hashId",
            "algorithm": "sha256",
            "digest": "base64",
            "maxLength": 12,
            "uniqPerFile": true
		}]
    ]
}
```


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


## License

MIT © [Guntur Poetra](https://github.com/iguntur)
