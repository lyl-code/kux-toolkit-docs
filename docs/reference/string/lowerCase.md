# lowerCase <Badge type="tip" text="^1.0.4" />

将字符串转换为小写格式。

小写格式是一种命名约定，其中每个单词都以小写字母写入，并用空格` `分隔。例如，`lower case`。

## 签名

```ts
function lowerCase(str: string): string
```

### 参数

- `str`(`string`)：要转换为小写格式的字符串。

### 返回值

(`string`): 转换后的小写格式的字符串。

## 示例

```ts
import { lowerCase } from '@/uni_modules/kux-toolkit';

const lowerCaseResult1 = lowerCase('camelCase');
console.log(lowerCaseResult1); // 返回 "camel case"
const lowerCaseResult2 = lowerCase('some whitespace');
console.log(lowerCaseResult2); // 返回 "some whitespace"
const lowerCaseResult3 = lowerCase('hyphen-text');
console.log(lowerCaseResult3); // 返回 "hyphen text"
const lowerCaseResult4 = lowerCase('HTTPRequest');
console.log(lowerCaseResult4); // 返回 "http request"
```
