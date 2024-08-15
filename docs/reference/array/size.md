# size <Badge type="tip" text="^1.0.1" />

返回数组、对象或字符串的长度。

函数接受一个数组、对象或字符串作为参数，返回其长度。

## 签名

```ts
function size(value : any) : number
```

## 参数

- `value` (`any`): 要获取长度的数组、对象或字符串。

## 返回值

`T[]`：数组、对象或字符串的长度。

### 示例

```ts
import { size } from '@/uni_modules/kux-toolkit'

const arr21 = [1, 2, 3, 4, 5]
const sizeArr = size(arr21)
console.log(sizeArr) // 5
const sizeObj = size({ a: 1, b: 2, c: 3 })
console.log(sizeObj) // 3
const sizeStr = size('hello')
console.log(sizeStr) // 5
const sizeEmptyArr = size([] as any[])
console.log(sizeEmptyArr) // 0
const sizeEmptyObj = size({})
console.log(sizeEmptyObj) // 0
const sizeNull = size(0)
console.log(sizeNull) // 0
const sizeEmptyStr = size('')
console.log(sizeEmptyStr) // 0
```
