# before <Badge type="tip" text="^1.0.4" />

创建一个新函数，该函数限制给定函数 (`func`) 被调用的次数。

## 签名
```ts
function before<F extends () => void | any | null>(
    limit: number, 
    func: F
): () => void | any | null
```

### 参数

+ `limit`(`number`)：返回的函数在停止之前允许调用 `func` 的次数。
    + 如果 `n` 为 0，则不会调用 。
    + 如果 `n` 是正整数，则 `func` 最多被调用 `n-1` 次。
+ `func`(`F`)：需要应用调用限制的函数。

### 返回值

(`() => void | any | null`)：一个新函数，该函数：
+ 追踪调用次数。
+ 在调用次数达到 `n-1` 次之前调用 `func`。
+ 如果调用次数达到或超过 `n`，返回 `null`，并停止进一步调用。

## 示例

```ts
import { before } from '@/uni_modules/kux-toolkit'

const beforeFn = before(3, () => {
  console.log('called')
})
beforeFn() // 打印 called
beforeFn() // 打印 called
beforeFn() // 不会打印任何内容
```
