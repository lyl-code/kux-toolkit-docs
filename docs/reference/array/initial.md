# initial <Badge type="tip" text="^1.0.1" />

返回一个数组，其中包含数组中除最后一个元素外的所有元素。

函数接受一个数组作为参数，返回一个新数组，其中包含数组中除最后一个元素外的所有元素。如果数组为空或只有一个元素，则返回一个空数组。

## 签名

```ts
function initial<T>(arr : T[]) : T[]
```

## 参数

- `arr`(`T[]`)：需要处理的数组。

## 返回值

`T[]`：一个新数组，其中包含数组中除最后一个元素外的所有元素。

### 示例

```ts
import { initial } from '@/uni_modules/kux-toolkit'

console.log(initial([1, 2, 3])); // [1, 2]
console.log(initial<any>([])); // []
console.log(initial([1])); // []
// #ifdef WEB
const largeArray2 = Array(1000)
    .fill(0)
    .map((_, i): number => i)
console.log(initial(largeArray2));
// [0, 1, 2 ..., 998]
// #endif
const nestedArr2 = [
    [3, 1],
    [3, 2],
    [3, 3],
]
console.log(initial(nestedArr2)); // [[3, 1], [3, 2]]
```
