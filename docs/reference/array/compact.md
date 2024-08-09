# compact

从数组中删除假值(`false`、`null`、`0`、`''`、`undefined`、`NaN`)的元素，返回一个新的数组。

函数接受一个数组作为参数，返回一个新的数组，其中不包含假值。

## 签名

```ts
function compact<T>(arr : T[]) : T[]
```

## 参数

+ `arr`(`T[])`)：要过滤的数组。

## 返回值

`T[]`：一个新的数组，其中不包含假值。

### 示例

```ts
import { compact } from '@/uni_modules/kux-toolkit'

const arr = [1, null, 2, 3, '', 4, 0]
// #ifdef WEB
arr.push(undefined)
// #endif
const filteredArr = compact(arr)
console.log(filteredArr) // [1, 2, 3, 4]
```
