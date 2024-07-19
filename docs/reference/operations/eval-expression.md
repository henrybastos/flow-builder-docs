# Evaluate Expression

The operation `eval_expression` runs code inside the browser instance, in the console. There are some utility functions built-in ready for use:

## Built-in functions

### `expose`

It returns an object with the internal key `_expose_key` as the `_$fb` variable.

```js
const expose = (value) => {
    return { _expose_key: '_$fb', ...value };
};

expose({ my_key: 'My value' });
```

Once exposed, `my_key` can be accessed from within the browser through `_$fb.my_key`. 

All values exposed are accessible by the `_$fb` variable.

### `env`
### `env_query`
### `x`
### `xxx`
### `set_element_value`
### `goto`
### `download_blob`
### `async_eval`

## Returning values

The value returned by the evaluated functions can be accessed in the `payload.env` and inside the browser (if exposed).

### Adding to the payload

All value returned by the functions is loaded into the payload as an object. If the returned value is not an object, it is transformed into one with a random key:

``` json
{ "AUTO_123456789": "My name is Jane Doe." }
```

Or you can add it via the [`env`](#env) or [`env_query`](#env-query) built-in function:

```js
env({ name: 'Henry' })
env({ name: 'Henry' })
```