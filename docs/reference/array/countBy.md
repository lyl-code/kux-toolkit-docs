# countBy

根据 `mapper` 函数统计数组中每个项目出现的次数。

函数接受一个数组和一个 `mapper` 函数作为参数，返回一个对象，其中包含数组中每个项目出现的次数。

## 签名

```ts
function countBy<T>(arr : T[], mapper : (item : T) => string) : UTSJSONObject
```

## 参数

- `arr`(`T[]`)：要统计的数组。
- `mapper`(`(item : T) => string`)：一个函数，用于将数组中的每个元素映射到一个字符串。

## 返回值

`UTSJSONObject`：返回一个对象，其中包含数组中每个项目出现的次数。

## 例子

```ts
import { countBy } from '@/uni_modules/kux-toolkit'

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange']
const fruitCounts = countBy(fruits, (item) : string => item)
console.log(fruitCounts) // { apple: 2, banana: 1, orange: 2 }
```
