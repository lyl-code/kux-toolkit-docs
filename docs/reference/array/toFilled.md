# toFilled

填充数组中从开始位置到结束位置（不包括结束位置）的元素为指定值。

函数接受一个数组、一个起始索引、一个结束索引和一个值作为参数，返回一个新的数组，其中包含原数组中从起始索引到结束索引（不包括结束索引）的元素填充为指定值后的元素。如果未指定起始索引或结束索引，则默认填充整个数组。还可以使用负数索引从数组末尾开始计数。

## 签名

```ts
function toFilled<T, P>(arr : T[], value : P, start : number = 0, end : number = arr.length) : any[]
```

## 参数

- `arr`：需要填充的数组。
- `value`：填充的值。
- `start`：起始索引，默认为 0。
- `end`：结束索引，默认为数组长度。

## 返回值

`any[]`：返回一个新的数组，其中包含原数组中从起始索引到结束索引（不包括结束索引）的元素填充为指定值后的元素。

### 示例

```ts
import { toFilled } from '@/uni_modules/kux-toolkit'

const arr7 = [1, 2, 3]
const filledArr = toFilled(arr7, 'a')
console.log(filledArr) // ['a', 'a', 'a']

const arr8 = [4, 6, 8, 10]
const filteredArr8 = toFilled(arr8, '*', 1, 3)
console.log(filteredArr8) // [4, '*', '*', 10]

const arr9 = [1, 2, 3, 4, 5]
const filteredArr9 = toFilled(arr9, '*', -4, -1)
console.log(filteredArr9) // [1, '*', '*', '*', 5]
```
