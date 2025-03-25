# endsWith <Badge type="tip" text="^1.0.4" />

检查字符串是否在其末尾包含另一个字符串。

检查一个字符串是否以另一个字符串结尾。可以选择一个可选的位置参数在这个位置之前进行搜索。

## 签名

```ts
function endsWith(str: string, target: string, position: number = 0): boolean;
```

### 参数

- `str`(`string`): 要检查的字符串。
- `target`(`string`): 要搜索的字符串。
- `position`(`number`, optional): 开始搜索的位置。默认为 `0`。

### 返回值

- (`boolean`): 如果 `str` 末尾包含 `target`，则返回 `true`，否则返回 `false`。

## 示例

```ts
import { endsWith } from '@/uni_modules/kux-toolkit';

const endsWithResult1 = endsWith('fooBar', 'foo');
console.log(endsWithResult1); // 返回 false
const endsWithResult2 = endsWith('fooBar', 'Bar');
console.log(endsWithResult2); // 返回 true
const endsWithResult3 = endsWith('fooBar', 'abcdef');
console.log(endsWithResult3); // 返回 false
const endsWithResult4 = endsWith('fooBar', 'foo', 3);
console.log(endsWithResult4); // 返回 true
```
