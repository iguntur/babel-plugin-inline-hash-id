# babel-plugin-inline-hash-id

> Learn AST and create babel plugin.

Generate hash ID by given an input.


## Install

```console
$ npm install --save-dev babel-plugin-inline-hash-id
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


## Example

### Source

```js
React.createElement('div', {
    id: __hashId('root')
});
```

### Output

```js
React.createElement('div', {
    id: 'BkbudHtGGjOI'
});
```

See the `example` for more details.


## License

MIT © [Guntur Poetra](https://github.com/iguntur)
