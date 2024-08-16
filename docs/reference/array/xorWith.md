# xorWith <Badge type="tip" text="^1.0.1" />

使用自定义相等性函数来计算两个数组之间的对称差集。

函数接受两个数组和一个函数作为参数，返回一个新的数组，其中包含两个数组的对称差集，使用提供的相等性函数来确定相等性。

## 签名

```ts
function xorWith<T>(arr1 : T[], arr2 : T[], areItemsEqual : (a : T, b : T) => boolean) : T[]
```

## 参数

- `arr1`(`T[]`)：第一个数组。
- `arr2`(`T[]`)：第二个数组。
- `areItemsEqual`(`(a : T, b : T) => boolean`)：一个函数，用于确定两个元素是否相等。

## 返回值

`T[]`：一个新的数组，其中包含两个数组的对称差集，使用提供的相等性函数来确定相等性。

### 示例

```ts
import { xorWith } from '@/uni_modules/kux-toolkit'

console.log(xorWith([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], (a, b) : boolean => a['id'] == b['id']));
// [{ id: 1 }, { id: 3 }]
```
