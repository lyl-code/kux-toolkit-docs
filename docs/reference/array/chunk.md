# chunk

将一个数组分割成指定长度的多个子数组。

函数接受一个数组和一个数字作为参数，返回一个新的数组，其中包含原数组分割成指定长度的多个子数组。

如果输入数组无法均匀分割，则最后一个子数组将包含剩余的元素。

## 签名

```ts
function chunk<T>(arr: T[], size: number): T[][];
```

## 参数

- `arr`(`T[]`)：要分割的数组。
- `size`(`number`)：子数组的长度。

## 返回值

`T[][]`：一个新的数组，其中包含原数组分割成指定长度的多个子数组。

## 示例

```ts
import { chunk } from '@/uni_modules/kux-toolkit';

// 将一组数字分割成长度为2的子数组
chunk([1, 2, 3, 4, 5], 2);
// 返回: [[1, 2], [3, 4], [5]]

// 将一组字符串分割成长度为3的子数组
chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3);
// 返回: [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]
```

