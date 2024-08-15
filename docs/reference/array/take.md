# take <Badge type="tip" text="^1.0.1" />

返回一个数组，其中包含从输入数组 `arr` 中获取的前 `n` 个元素

函数接受一个数组和一个数字作为参数，返回一个新的数组，其中包含从输入数组 `arr` 中获取的前 `n` 个元素。

## 签名

```ts
function take<T>(arr : T[], n : number) : T[]
```

## 参数

- `arr`：输入数组。
- `n`：要获取的元素数量。

## 返回值

`T[]`：一个新的数组，其中包含从输入数组 `arr` 中获取的前 `n` 个元素。

### 示例

```ts
import { take } from '@/uni_modules/kux-toolkit'

console.log(take([1, 2, 3, 4, 5], 2)) // [1, 2]
console.log(take(['a', 'b', 'c'], 2)) // ['a', 'b']
console.log(take([{ id: 1 }, { id: 2 }, { id: 3 }], 2)) // [{ id: 1 }, { id: 2 }]
```
