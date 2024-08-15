# takeRightWhile <Badge type="tip" text="^1.0.1" />

返回一个数组，其中包含从输入数组 `arr` 中获取的最后 `n` 个元素，直到遇到第一个不满足条件的元素为止。

函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含从输入数组 `arr` 中获取的最后 `n` 个元素，直到遇到第一个不满足条件的元素。

## 签名

```ts
function takeRightWhile<T>(arr : T[], predicate : (item : T) => boolean) : T[]
```

## 参数

- `arr`：需要获取元素的数组。
- `predicate`：一个函数，用于判断数组元素是否满足条件。

## 返回值

`T[]`：一个新的数组，其中包含从输入数组 `arr` 中获取的最后 `n` 个元素，直到遇到第一个不满足条件的元素。

### 示例

```ts
import { takeRightWhile } from '@/uni_modules/kux-toolkit'

console.log(takeRightWhile([5, 4, 3, 2, 1], (n) : boolean => n < 4)); // [3, 2, 1]
console.log(takeRightWhile([1, 2, 3], (n) : boolean => n > 3)); // []
```
