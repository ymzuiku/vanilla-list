# vanilla-list

> Size < 1kb

## Install

```sh
$ npm install --save vanilla-list
```

## Use

```js
import List from 'vanilla-list';

const list = List({
  itemCount: 20000,
  render: index => {
    const text = document.createElement('div');
    text.textContent = 'item-' + index;
    return text;
  },
});

list.style.height = '200px';

document.body.append(list);
```
