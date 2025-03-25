# constantCase <Badge type="tip" text="^1.0.4" />

将一个字符串转换为常量形式。

常量形式是指所有单词的首字母大写，并用下划线连接。如：`'FOO_BAR_BAZ'`。

## 签名

```ts
function constantCase(str: string): string;
```

### 参数

- `str`(`string`)：要转换为常量形式的字符串。

### 返回值

- (`string`)：转换后的常量形式的字符串。

## 示例

```ts
import { constantCase } from '@/uni_modules/kux-toolkit';

const constantCaseResult1 = constantCase('camelCase');
console.log(constantCaseResult1); // 返回 "CAMEL_CASE"
const constantCaseResult2 = constantCase('some whitespace');
console.log(constantCaseResult2); // 返回 "SOME_WHITESPACE"
const constantCaseResult3 = constantCase('hyphen-text');
console.log(constantCaseResult3); // 返回 "HYPHEN_TEXT"
const constantCaseResult4 = constantCase('HTTPRequest');
console.log(constantCaseResult4); // 返回 "HTTP_REQUEST"
const constantCaseResult5 = constantCase('Keep unicode 😅');
console.log(constantCaseResult5); // 返回 "KEEP_UNICODE_😅"
```
