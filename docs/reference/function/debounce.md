# debounce <Badge type="tip" text="^1.0.4" />

创建一个防抖函数，它会延迟调用提供的函数，直到距离上次调用已过去 `debounceMs` 毫秒为止。

防抖函数还具有一个 `cancel` 方法，用于取消任何待定的执行。

## 签名

```ts
function debounce<F extends (...args: any[]) => void>(
  func: F,
  debounceMs: number,
  options?: DebounceOptions
): ((...args: Parameters<F>) => void) & {
  cancel: () => void;
  flush: () => void;
  schedule: () => void;
};
```

### 参数

+ `func`(`F`)：要进行防抖处理的函数。
+ `debounceMs`(`number`)：延迟执行的毫秒数。
+ `options`(`DebounceOptions`, 可选)：一个选项对象。
    + `signal`(`AbortSignal`, 可选)：可选的 `AbortSignal` 对象，用于取消防抖函数的执行。
    + `edges`(`Array<'leading' | 'trailing'>`, 可选)：一个数组，指定函数应在何时被调用。默认为 `['trailing']`。
        + `'leading'`：如果包含，函数将在第一次调用时立即执行。
        + `'trailing'`：如果包含，函数将在距离上次调用 debounceMs 毫秒后执行。
        + 如果同时包含 `'leading'` 和 `'trailing'`，函数将在延迟周期的开始和结束时都被调用。
          然而，必须在 `debounceMs` 毫秒内至少调用两次才能发生这种情况，因为一次防抖函数调用不能触发函数两次。

### 返回值

(`((...args: Parameters<F>) => void) & { cancel: () => void; flush: () => void; schedule: () => void; }`)：一个新的防抖函数，具有管理执行的方法。
+ `cancel`(`() => void`)：取消任何待定的防抖函数执行。
+ `flush`(`() => void`)：立即调用防抖函数，执行任何待处理的调用。
+ `schedule`(`() => void`)：在指定的防抖延迟后安排防抖函数的执行。

## 示例

### 基本用法
```ts
import { debounce } from '@/uni_modules/kux-toolkit'

const demoFunc = (message?: string) => {
    console.log(message);
}

const debouncedFunction = debounce(demoFunc, 1000);

debouncedFunction('Function executed'); // 1秒后打印 Function executed

debouncedFunction.cancel(); // 如果立即调用 cancel，上面的防抖函数会被立即取消
```

### 使用AbortSignal
```ts
import { debounce, DebounceOptions } from '@/uni_modules/kux-toolkit';
import { KuxAbortController } from '@/uni_modules/kux-abort-signal';

const demoFunc = (message?: string) => {
    console.log(message);
}
const controller = new KuxAbortController();
const signal = controller.signal;
const debouncedWithSignal = debounce(demoFunc, 5000, {
    signal
});
// 如果在此期间没有再次调用，则在1秒后输出 'Function executed'
debouncedWithSignal('Function executed'); // 打印 Function executed
// 取消了防抖函数的调用
// controller.abort();
```
