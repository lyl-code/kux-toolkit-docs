# orderBy

根据多个属性和它们对应的排序顺序对对象数组进行排序。

函数接受一个对象数组，一个要排序的属性数组，以及一个排序顺序数组作为参数，返回一个排序后的对象数组，根据每个键及其排序顺序进行排序。(`asc` 表示升序，`desc` 表示降序) 如果一个键的值相等，则按照下一个键进行排序，以此类推。

## 签名

```ts
function orderBy<T>(arr : T[], props : string[], orders : ('asc' | 'desc')[]) : T[]
```

## 参数

- `arr`(`T[]`)：要排序的对象数组。
- `props`(`string[]`)：要排序的属性数组。
- `orders`(`('asc' | 'desc')[]`)：排序顺序数组。

## 返回值

`T[]`：排序后的对象数组。

### 示例

```ts
import { orderBy } from '@/uni_modules/kux-toolkit'

const arr17 = [
    { user: 'fred', age: 48 },
    { user: 'barney', age: 34 },
    { user: 'fred', age: 40 },
    { user: 'barney', age: 36 }
]
const sortedArr = orderBy(arr17, ['user', 'age'], ['asc', 'desc'])
console.log(sortedArr)
// [
//     { user: 'barney', age: 36 },
//     { user: 'barney', age: 34 },
//     { user: 'fred', age: 48 },
//     { user: 'fred', age: 40 }
// ]
```
