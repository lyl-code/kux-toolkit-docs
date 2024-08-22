# meanBy <Badge type="tip" text="^1.0.2" />

计算数字数组的平均值，通过对每个元素应用 `getValue` 函数来选择值。

该函数接受一个数字数组和一个 `getValue` 函数，并返回数组中所有元素的平均值。如果数组为空，则返回 `NaN` 。

## 签名

```ts
function meanBy<T>(items: T[], getValue: (item: T) => number): number
```

## 参数

- `items` (`T[]`)：数字数组。
- `getValue` (`(item: T) => number`)：一个函数，用于从数组元素中获取数值。

## 返回值

- (`number`)：数组中所有元素的平均值。

### 示例

```ts
import { meanBy } from '@/uni_modules/kux-toolkit'

const objArray = [{ a: 1 }, { a: 2 }, { a: 3 }] as UTSJSONObject[]
const objMeanByResult = meanBy(objArray, (x): number => x.get('a') as number)
console.log(objMeanByResult); // 2
console.log(meanBy([] as UTSJSONObject[], (x): number => x.get('a') as number)); // NaN
```
