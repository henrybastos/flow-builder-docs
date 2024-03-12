---
title: Starting point - Flow Builder Docs
---
# Start
Before we start, lets take a look at some basic concepts and ideas about Flow Builder.

## What is Flow Builder?
Flow Builder is an automation tool that can be used for automated tests, process automation and scraping data. 

It uses Puppeteer in the backend for controlling the browser and SvelteKit as the frontend framework.

It's name Flow Builder because it builds **Flows**. But what are flows?

## Flows and Operations

A **Flow** consists in a group of **Operations**, which are actions performed by Puppeteer within the browser.

An **Operation** can be a click, the typing of a sentence, the navigation to a page, the reloading of a page etc.


A single operation would look like this:

::: details Single operation example
```json
{
  "command": "goto",
  "enabled": true,
  "target": "https://example.com/login"
}
```
:::

And a flow would look like this:

::: details Flow example

```json
{
  "login_flow": [
    {
      "command": "goto",
      "enabled": true,
      "target": "https://example.com/login"
    },
    {
      "command": "keyboard_type",
      "enabled": true,
      "target": "//input[@type='email']",
      "value": "john.doe@email.com"
    },
    {
      "command": "keyboard_type",
      "enabled": true,
      "target": "//input[@type='password']",
      "value": "D5MKr9esj^nbh^"
    },
    {
      "command": "click",
      "enabled": true,
      "target": "//button[@type='submit']"
    }
  ]
}
```
:::


To see all listed operations, see the [Operations](/operations.html) page.

## The Payload

Once one or more flows are setup, we have the **Payload**. The payload consists of three parts:
- **Env:** Variables used within flows operations.
- **Config:** Configurations about the behaviour of flows execution.
- **Flows:** The flows itself, containing all operations.

The payload is structured as a JSON, as the one below:

::: details Payload example
```json
{
   "config": {
      "headless": false
   },
   "env": {
      "destination_url": "https://www.google.com/"
   },
   "flows": {
      "main_flow": [
         {
            "command": "goto",
            "enabled": true,
            "target": "%destination_url%"
         }
      ]
   }
}
```
:::