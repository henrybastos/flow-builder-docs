---
outline: deep
---

# Env Placeholders

You can use placeholders to replace a piece of string for the value of a variable inside of `payload.env`, by encapsulating the name of the variable between two percentage symbols — `%var_name%`:

```json
{
   "env": {
      "website_url": "https://tabler.io/icons"
   },
   "flows": {
      "main_flow": [
         {
            "command": "goto",
            "enabled": true,
            "target": "%website_url%"
         }
      ]
   },
   "config": "{ ... }"
}
```

The `target` property of the `goto` operation will be set to the value of the `website_url` variable defined inside of `env`.

## Absolute Env *`VS`* Relative Env

### Relative

When running a flow from the `main_flow` or from another flow but calling it by using the `run_flow` operation, the variables replaced will be retrieved from the `payload.env` — the global/absolute scope. But when called from the `run_flow_for_each` operation, the `env` is scoped, meaning it will retrieve the variables from each item of the array.

```json
{
   "env": {
      "_$fb": "{ ... }",
      "icons": [
         {
            "link": "https://tabler.io/icons/icon/square-rounded-number-0"
         },
         {
            "link": "https://tabler.io/icons/icon/square-rounded-number-1"
         },
         {
            "link": "https://tabler.io/icons/icon/square-rounded-number-2"
         }
      ]
   },
   "flows": {
      "main_flow": [
         {
            "command": "run_flow_for_each",
            "enabled": true,
            "flow": "goto_icon",
            "env_var": "%icons%"
         }
      ],
      "goto_icon": [
         {
            "command": "goto",
            "enabled": true,
            "target": "%link%"
         }
      ]
   },
   "config": "{ ... }"
}
```

In the example above, the `target` from the `goto` operation will be replaced based on each item from the `icons` array, placed as the `env_var` from the `run_flow_for_each` operation. 

```md
> First iteration:
{
   "command": "goto",
   "enabled": true,
   "target": "https://tabler.io/icons/icon/square-rounded-number-0"
}

> Second iteration:
{
   "command": "goto",
   "enabled": true,
   "target": "https://tabler.io/icons/icon/square-rounded-number-1"
}

> Third iteration:
{
   "command": "goto",
   "enabled": true,
   "target": "https://tabler.io/icons/icon/square-rounded-number-2"
}
```

These `link`'s are taken from the **relative env**, because it is relative to the current item beeing used in the repeater.

::: info NOTE
More on the `run_flow_for_each` [here](../../reference/operations/run-flow-for-each.md).
:::

### Absolute within scope

In case you need to access the absolute env inside of a relative/scoped flow, you can use the `$$env` modifier to access the `payload.env`:

```json
{
   "env": {
      "_$fb": "{ ... }",
      "global_link": "https://tabler.io/icons",
      "icons": [
         {
            "link": "https://tabler.io/icons/icon/square-rounded-number-0"
         },
         {
            "link": "https://tabler.io/icons/icon/square-rounded-number-1"
         }
      ]
   },
   "flows": {
      "main_flow": [
         {
            "command": "run_flow_for_each",
            "enabled": true,
            "flow": "goto_icon",
            "env_var": "%icons%"
         }
      ],
      "goto_icon": [
         {
            "command": "goto",
            "enabled": true,
            "target": "%$$env.global_link%"
         }
      ]
   },
   "config": "{ ... }"
}
```

By writing `%$$env.the_global_variable%` you can access the variables defined in the global scope inside of a scoped flow.