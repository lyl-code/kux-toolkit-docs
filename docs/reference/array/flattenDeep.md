# flattenDeep

一次性展开数组中的元素。

函数接受一个数组作为参数，返回一个新的数组，其中包含原数组中所有元素展开后的结果。

## 签名

```ts
function flattenDeep<T>(arr : T[]) : T[]
```

## 参数

- `arr`(`T[]`)：需要展开的数组。

## 返回值

`T[]`：展开后的数组。

### 示例

```ts
import { flattenDeep } from '@/uni_modules/kux-toolkit'

const originArr = [1, [2, 3], [4, [5, 6]]];
const result = flattenDeep(originArr);
console.log(result); // [1, 2, 3, 4, 5, 6]
```
