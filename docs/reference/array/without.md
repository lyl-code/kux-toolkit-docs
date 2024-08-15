# without <Badge type="tip" text="^1.0.1" />

创建一个数组，其中排除了所有指定的值。

函数接受一个数组和一个或多个值作为参数，返回一个新的数组，其中排除了所有指定的值。使用 `SameValueZero` 进行相等性比较。

## 签名

```ts
function without<T>(arr : T[], ...values : T[]) : T[]
```

## 参数

- `arr`(`T[]`)：要从中排除值的数组。
- `...values`(`T[]`)：要排除的值。

## 返回值

`T[]`：一个新的数组，其中排除了所有指定的值。

### 示例

```ts
import { without } from '@/uni_modules/kux-toolkit'

console.log(without([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]
console.log(without(['a', 'b', 'c', 'a'], 'a')); // ['b', 'c']
console.log(without([1, 2, 3], 4, 5)); // [1, 2, 3]
console.log(without([1, '2', 3, '4'], 2, '4')); // [1, 3]
```
