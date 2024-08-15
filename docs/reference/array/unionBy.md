# unionBy <Badge type="tip" text="^1.0.1" />

使用提供的映射函数来确定相等性，从所有给定的数组中创建一个按顺序的唯一值数组。

函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含两个数组的交集，使用提供的映射函数来确定相等性。

## 签名

```ts
function unionBy<T, U>(arr1 : T[], arr2 : T[], mapper : (item : T) => U) : T[]
```

## 参数

- `arr1`：第一个数组。
- `arr2`：第二个数组。
- `mapper`：一个函数，用于将数组元素转换为另一种类型。

## 返回值

`T[]`：一个新的数组，其中包含两个数组的交集，使用提供的映射函数来确定相等性。

### 示例

```ts
import { unionBy } from '@/uni_modules/kux-toolkit'

const unionByArr = unionBy([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], (item) : number => item['id'] as number)
console.log(unionByArr) // [{ id: 1 }, { id: 2 }, { id: 3 }]
```
