# takeWhile <Badge type="tip" text="^1.0.1" />

返回一个数组，其中包含满足提供的谓词函数的前导元素。

函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含满足提供的谓词函数的前导元素。

## 签名

```ts
function takeWhile<T>(arr : T[], predicate : (item : T) => boolean) : T[]
```

## 参数

- `arr`：一个数组。
- `predicate`：一个函数，用于测试数组中的元素是否满足条件。

## 返回值

`T[]`：一个新的数组，其中包含满足提供的谓词函数的前导元素。

### 示例

```ts
import { takeWhile } from '@/uni_modules/kux-toolkit'

console.log(takeWhile([1, 2, 3, 4], (item) : boolean => item < 3)); // [1, 2]
console.log(takeWhile([1, 2, 3, 4], (item) : boolean => item > 3)); // []
```
