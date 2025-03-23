# throttle <Badge type="tip" text="^1.0.4" />

创建一个节流函数，每隔 `throttleMs` 毫秒最多调用一次提供的函数。

在等待时间内，对节流函数的后续调用不会触发原始函数的执行。

## 签名

```ts
function throttle<F extends (...args: any[]) => void>(
  func: F,
  throttleMs: number,
  options?: ThrottleOptions
): ((...args: Parameters<F>) => void) & {
  cancel: () => void;
  flush: () => void;
};
```

### 参数

+ `func`(`F`): 要节流的函数。
+ `throttleMs`(`number`): 节流执行的毫秒数。
+ `options`(`ThrottleOptions`，可选): 一个选项对象。
    + `signal`(`KuxAbortSignal`, 可选)：可选的 `AbortSignal` 对象，用于取消节流。
    + `edges`(`Array<'leading' | 'trailing'>`，可选)：一个数组，指定函数应在何时被调用。默认为 `['leading', 'trailing']`。
        + `'leading'`: 如果包含，函数将在第一次调用时立即执行。
        + `'trailing'`: 如果包含，函数将在最后一次调用后等待 `throttleMs` 后再执行。
        + 如果同时包含 `'leading'` 和 `'trailing'`，函数将在延迟周期的开始和结束时都被调用。
            然而，必须在 `throttleMs` 毫秒内至少调用两次才能发生这种情况，因为一次防抖函数调用不能触发函数两次。

### 返回值

(`((...args: Parameters<F>) => void) & { cancel: () => void; flush: () => void; }`): 一个新的节流函数，具有管理执行的方法。
+ `cancel`(`() => void`): 取消任何待定的节流函数执行。
+ `flush`(`() => void`): 立即执行任何待定的节流函数。

## 示例

```ts
import { throttle, ThrottleOptions } from '@/uni_modules/kux-toolkit';

const demoThrottleFunc = (message?: string) => {
    console.log('节流函数执行了');
}

const throttledFunc = throttle(demoThrottleFunc, 1000);

// 节流函数的调用
throttledFunc('hello'); // 输出: 节流函数执行了
throttledFunc('world'); // 第二次调用在节流周期内，但由于尾部行为在1秒后触发

// 2秒后
setTimeout(() => {
    throttledFunc('foo'); // 输出: 节流函数执行了
}, 2000); // 因为节流周期已结束，所以调用会立即执行
```
