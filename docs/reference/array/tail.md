# tail <Badge type="tip" text="^1.0.1" />

返回一个新数组，其中除了第一个元素外，包含所有元素。

函数接受一个数组作为参数，返回一个新数组，其中除了第一个元素外，包含所有元素。如果数组为空或只有一个元素，则返回一个空数组。

## 签名

```ts
function tail<T>(arr : T[]) : T[]
```

## 参数

- `arr`：需要获取元素的数组。

## 返回值

`T[]`：一个新数组，其中除了第一个元素外，包含所有元素。

### 示例

```ts
import { tail } from '@/uni_modules/kux-toolkit'

console.log(tail([1, 2, 3])); // [2, 3]
console.log(tail([1])); // []
console.log(tail<any>([])); // []
```
