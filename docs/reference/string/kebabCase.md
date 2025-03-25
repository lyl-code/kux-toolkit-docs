# kebabCase <Badge type="tip" text="^1.0.4" />

将字符串转换为短横线连接的小写格式。

短横线连接（kebab case）是一种命名约定，其中每个单词都以小写字母写入，并用短横线 - 分隔。
例如，`kebab-case`。

## 签名

```ts
function kebabCase(str: string): string
```

### 参数

- `str`(`string`)：要转换为短横线连接格式的字符串。

### 返回值

(`string`)：转换后的字符串。

## 示例

```ts
import { kebabCase } from '@/uni_modules/kux-toolkit';

const kebabCaseResult1 = kebabCase('camelCase');
console.log(kebabCaseResult1); // 返回 "camel-case"
const kebabCaseResult2 = kebabCase('some whitespace');
console.log(kebabCaseResult2); // 返回 "some-whitespace"
const kebabCaseResult3 = kebabCase('hyphen-text');
console.log(kebabCaseResult3); // 返回 "hyphen-text"
const kebabCaseResult4 = kebabCase('HTTPRequest');
console.log(kebabCaseResult4); // 返回 "http-request"
```
