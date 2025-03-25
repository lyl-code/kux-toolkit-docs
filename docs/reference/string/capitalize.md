# capitalize <Badge type="tip" text="^1.0.4" />

将字符串的第一个字符转换为大写，其余字符转换为小写。

## 签名

```ts
function capitalize<T extends string>(str: T): Capitalize<T>;
```

### 参数

- `str`(`T`): 要转换为大写的字符串。

### 返回值

- (`Capitalize<string>`): 转换后的大写字符串。

## 示例

```ts
import { capitalize } from '@/uni_modules/kux-toolkit';

const capitalizeResult1 = capitalize('fred');
console.log(capitalizeResult1); // 返回 "Fred"
const capiTaliZeResult2 = capitalize('FRED');
console.log(capiTaliZeResult2); // 返回 "Fred"
```
