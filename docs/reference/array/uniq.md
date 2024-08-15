# uniq <Badge type="tip" text="^1.0.1" />

返回一个数组，其中包含输入数组 `arr` 中所有元素的唯一值。

函数接受一个数组作为参数，返回一个新的数组，其中包含输入数组 `arr` 中所有元素的唯一值。

## 签名

```ts
function uniq<T>(arr : T[]) : T[]
```

## 参数

- `arr`：一个数组，其中包含要去重的元素。

## 返回值

`T[]`：一个新数组，仅包含根据自定义相等性函数确定的唯一值。

### 示例

```ts
import { uniq } from '@/uni_modules/kux-toolkit'

const arr22 = [1, 2, 2, 3, 4, 4, 5]
const uniqArr = uniq(arr22)
console.log(uniqArr); // [1, 2, 3, 4, 5]
```
