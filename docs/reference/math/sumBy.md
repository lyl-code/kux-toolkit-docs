# sumBy <Badge type="tip" text="^1.0.2" />

计算数字数组的总和，通过对每个元素应用 `getValue` 函数来选择值。

该函数接受一个数字数组和一个 `getValue` 函数，并返回数组中所有元素的总和。如果数组为空，则返回 `0`。

## 签名

```ts
function sumBy<T>(items: T[], getValue: (item: T) => number): number
```

## 参数

- `items` (`T[]`)：数字数组。
- `getValue` (`(item: T) => number`)：一个函数，用于从数组元素中获取数字值。

## 返回值

- (`number`)：数组中所有元素的总和。

### 示例

```ts
import { sumBy } from '@/uni_modules/kux-toolkit'

const objArray2 = [{ a: 1 }, { a: 2 }, { a: 3 }] as UTSJSONObject[]
const objSumByResult = sumBy(objArray2, (x): number => x.get('a') as number)
console.log(objSumByResult) // 结果为6
console.log(sumBy([] as UTSJSONObject[], (x): number => x.get('a') as number)) // 结果为0
```
