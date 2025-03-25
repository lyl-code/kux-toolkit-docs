# camelCase <Badge type="tip" text="^1.0.4" />

字符串转换为驼峰命名法。

驼峰命名法是一种命名约定，其中第一个单词小写，后续每个单词首字母大写。例如，`camelCase`。

## 签名

```ts
function camelCase(str: string): string
```

### 参数

- `str`(`string`): 要转换为驼峰命名法的字符串。

### 返回值

- `string`: 转换后的驼峰命名法字符串。

## 示例

```ts
import { camelCase } from '@/uni_modules/kux-toolkit';

const camelCaseResult1 = camelCase('camelCase');
console.log(camelCaseResult1); // 返回 "camelCase"
const camelCaseResult2 = camelCase('some whitespace');
console.log(camelCaseResult2); // 返回 "someWhitespace"
const camelCaseResult3 = camelCase('hyphen-text');
console.log(camelCaseResult3); // 返回 "hyphenText"
const camelCaseResult4 = camelCase('HTTPRequest');
console.log(camelCaseResult4); // 返回 "httpRequest"
const cameCaseResult5 = camelCase('Keep unicode 😅');
console.log(cameCaseResult5); // 返回 "keepUnicode😅"
```
