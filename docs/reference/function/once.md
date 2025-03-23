# once <Badge type="tip" text="^1.0.4" />

创建一个函数，限制只能调用提供的函数 `func` 一次。

对该函数的重复调用会返回第一次调用时的结果。

## 签名

```ts
function once<F extends () => any>(func: F): F;
function once<F extends (...args: any[]) => void>(func: F): F;
```

### 参数

- `func` (`F extends (() => any) | ((...args: any[]) => void)`): 需要限制只能调用一次的函数。

### 返回值

- `F`: 一个函数，调用该函数会返回第一次调用时的结果。

## 示例

```ts
import { once } from '@/uni_modules/kux-toolkit';

const func = once((): boolean => {
  console.log('Initialized!');
  return true;
});

console.log(func()); // 输出 "Initialized!" 并返回 true
console.log(func()); // 返回 true，但不会再次输出 "Initialized!"
```
