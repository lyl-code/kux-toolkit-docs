# union <Badge type="tip" text="^1.0.1" />

返回两个数组的并集。

函数接受两个数组作为参数，返回一个新的数组，其中包含两个数组的并集。

## 签名

```ts
function union<T>(arr1 : T[], arr2 : T[]) : T[]
```

## 参数

- `arr1`：第一个数组。
- `arr2`：第二个数组。

## 返回值

`T[]`：一个新的数组，其中包含两个数组的并集。

### 示例

```ts
import { union } from '@/uni_modules/kux-toolkit'

const unionArr = union([1, 2, 3], [3, 4, 5])
console.log(unionArr) // [1, 2, 3, 4, 5]
```
