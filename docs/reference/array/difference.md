# difference

计算两个数组的差集。

函数接受两个数组作为参数，返回一个新的数组，其中包含第一个数组中不包含第二个数组中元素。

## 签名

```ts
function difference<T>(firstArr : T[], secondArr : T[]) : T[]
```

## 参数

+ `firstArr`(`T[]`)：要求差集的数组。这是主要的数组，从中将比较和过滤元素。
+ `secondArr`(`T[]`)：包含要从第一个数组中排除的元素的数组。将检查这个数组中的每个元素是否在第一个数组中，如果找到匹配，则将其从结果中排除。

## 返回值

`T[]`：一个新的数组，其中包含第一个数组中不包含第二个数组中元素。

### 示例

```ts
import { difference } from '@/uni_modules/kux-toolkit'

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4];
const result = difference(array1, array2);
// 结果将是 [1, 3, 5]，因为 2 和 4 都在两个数组中，所以它们被排除在结果之外。
```
