# zipObject <Badge type="tip" text="^1.0.1" />

将两个数组合并为一个对象，一个数组包含属性名称，另一个数组包含对应的值。

该函数接受两个数组作为输入：一个包含属性名称，另一个包含相应的值。它返回一个新对象，其中第一个数组中的属性名称作为键，第二个数组中对应的元素作为值。如果 `keys` 数组的长度大于 `values` 数组的长度，则返回的对象将包含 `null` 值。

## 签名

```ts
function zipObject<T>(keys : string[], values : T[]) : UTSJSONObject
```

## 参数

- `keys`(`string[]`): 一个数组，包含属性名称。

## 返回值

`T[][]`：一个数组，包含属性名称和对应的值。

### 示例

```ts
import { zipObject } from '@/uni_modules/kux-toolkit'

const keys = ['a', 'b', 'c'];
const values = [1, 2, 3];
console.log(zipObject(keys, values)); // { a: 1, b: 2, c: 3 }
const keys2 = ['a', 'b', 'c'];
const values2 = [1, 2];
console.log(zipObject(keys2, values2)); // { a: 1, b: 2, c: null }
```
