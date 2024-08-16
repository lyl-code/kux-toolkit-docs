# xorBy <Badge type="tip" text="^1.0.1" />

使用自定义映射函数来计算两个数组之间的对称差集。

函数接受两个数组和一个函数作为参数，返回一个新的数组，其中包含两个数组的对称差集，使用提供的映射函数来确定相等性。

## 签名

```ts
function xorBy<T, K>(arr1 : T[], arr2 : T[], mapper : (item : T) => K) : T[]
```

## 参数

- `arr1`(`T[]`):：第一个数组。
- `arr2`(`T[]`)：第二个数组。
- `mapper`(`(item : T) => K`)：一个函数，用于将数组元素转换为键值。

## 返回值

`T[]`：一个新的数组，其中包含两个数组的对称差集，使用提供的映射函数来确定相等性。

### 示例

```ts
import { xorBy } from '@/uni_modules/kux-toolkit'

console.log(xorBy([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], (x : UTSJSONObject) : number => x['id'] as number));
// [{ id: 1 }, { id: 3 }]
```
