# shuffle <Badge type="tip" text="^1.0.1" />

随机化数组中元素的顺序，使用 `Fisher-Yates` 算法

函数接受一个数组作为参数，返回一个新的数组，其中包含原数组随机化顺序后的元素。

## 签名

```ts
function shuffle<T>(arr : T[]) : T[]
```

## 参数

- `arr`(`T[]`)：要随机化的数组。

## 返回值

`T[]`：一个新的数组，其中包含原数组随机化顺序后的元素。

### 示例

```ts
import { shuffle } from '@/uni_modules/kux-toolkit'

const array = [1, 2, 3, 4, 5];
const shuffledArray = shuffle(array);
// shuffledArray 将会是一个新数组，其中包含 array 的元素以随机顺序排列，例如 [3, 1, 4, 5, 2]
```
