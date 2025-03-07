# after <Badge type="tip" text="^1.0.4" />

创建一个仅在第 `n` 次调用后执行的函数。 提供的函数将从第 `n` 次调用开始被调用。

这对于涉及事件或异步操作的场景特别有用，其中某个操作应仅在一定数量的调用之后发生。

:::info
由于 `uts` 类型系统限制，被执行函数目前暂不支持带参数。
:::

## 签名
```ts
function after<F extends () => void | any | null>(
    n: number, 
    func: F
): () => void | any | null
```

### 参数

+ `n`(`number`): 要求 `func` 执行的调用次数。
+ `func`(`F`): 要调用的函数。

### 返回值

(`() => void | any | null`): 一个新函数，它：

+ 跟踪调用次数。
+ 从第 `n` 次调用开始调用 `func`。
+ 如果调用次数少于 `n` 次，则返回 `null`。

## 示例

```ts
import { after } from '@/uni_modules/kux-toolkit'

const mockFn = () => {
    console.log('mockFn')
}
const afterFn = after(3, mockFn)
afterFn(); // 不会打印任何内容
afterFn(); // 不会打印任何内容
afterFn(); // 打印 mockFn
```
