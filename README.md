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
    return $('div').$text('aa-' + index);
  },
});
list.style.height = '200px';

document.body.append(list);
```
