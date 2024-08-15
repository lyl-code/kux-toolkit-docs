# xor <Badge type="tip" text="^1.0.1" />

计算两个数组之间的对称差集。

函数接受两个数组作为参数，返回一个新的数组，其中包含两个数组的对称差集。

## 签名

```ts
function xor<T>(arr1 : T[], arr2 : T[]) : T[]
```

## 参数

- `arr1`(`T[]`)：第一个数组。
- `arr2`(`T[]`)：第二个数组。

## 返回值

`T[]`：一个新的数组，其中包含两个数组的对称差集。

### 示例

```ts
import { xor } from '@/uni_modules/kux-toolkit'

console.log(xor([1, 2, 3, 4], [3, 4, 5, 6])) // [1, 2, 5, 6]
console.log(xor(['a', 'b'], ['b', 'c'])); // ['a', 'c']
```
