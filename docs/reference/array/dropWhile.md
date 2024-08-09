# dropWhile

从数组的开头移除元素，直到遇到第一个满足条件的元素为止。

函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含原数组从开头移除元素，直到遇到第一个满足条件的元素后的元素。

## 签名

```ts
function dropWhile<T>(arr : T[], predicate : (item : T) => boolean) : T[]
```

## 参数

- `arr`(`T[]`)：需要处理的数组。
- `predicate`(`(item : T) => boolean`)：一个函数，用于判断数组元素是否满足条件。函数接受一个元素作为参数，返回一个布尔值，`true` 表示元素满足条件，`false` 表示元素不满足条件。

## 返回值

`T[]`：一个新的数组，其中包含原数组从开头移除元素，直到遇到第一个满足条件的元素后的元素。

### 示例

```ts
import { dropWhile } from '@/uni_modules/kux-toolkit'

const arr4 = [1, 2, 3, 4, 5]
const droppedWhileArr = dropWhile(arr4, (item) : boolean => item < 3)
console.log(droppedWhileArr) // [3, 4, 5]
```
