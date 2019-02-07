# React Guidde Widget

[![npm package][npm-badge]][npm]

We help you to provide all the support your customers need, no more than a click away from them.

## 🎨 Demo

![demo](https://user-images.githubusercontent.com/1069623/52442773-2fe9d900-2b0b-11e9-9093-fde3c384199d.png)

**[See it in action](https://guidde.io)** on our website.

## 🚀 Getting started

First things first. Let's add the widget to your project:

```
yarn add react-guidde-widget
```

Then use it in your app:

```
import React from 'react'
import Guidde from 'react-guidde-widget'

class App extends React.Component {
  render() {
    return (
      <Guidde account="YOUR_ACCOUNT_ID" />
    );
  }
}
```

## ⚙️ Props

* `account` - **required**: the account_id of your company;
* `hidden`: specifies whether or not the launcher should be hidden in the initial load. The default value is *false*.

## ⚡️ Widget Actions

Using this component, you'll also be able to explore actions like:

```
Guidde.do('toggle')
Guidde.do('navigate', '/send-message')
Guidde.do('recommend-articles', [
  'getting-started', 
  'embedding-our-widget'
])
```

You can [see the whole list of available actions here](https://help.guidde.io/en/articles/understanging-widget-actions).

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
