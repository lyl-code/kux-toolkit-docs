# castArray <Badge type="tip" text="^1.0.4" />

:::info
由于 `uts` 类型系统限制，目前泛型参数必填，`value` 必填
:::

如果值不是数组，则将其转换为数组。

## 签名
```ts
function castArray<T>(value: any): T[];
```

### 参数

- `value`(`any`): 要转换为数组的值。

### 返回值

- (`T[]`): 包含输入值的数组（如果它不是数组），或者原始数组（如果它是数组）。

## 示例

```ts
const castArr1 = castArray<number>(1);
console.log(castArr1); // [1]

const castArr2 = castArray<any>([1, '2', 3])
console.log(castArr2); // [1, "2", 3]

const castArr3 = castArray<any>({ a: 1 });
console.log(castArr3); // [{ "a": 1 }]

const castArr4 = castArray<any>(null);
console.log(castArr4); // [null]
```
