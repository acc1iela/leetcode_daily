## Filter Elements from Array

与えられた整数配列 `arr` とフィルタリング関数 `fn` に対して、フィルタ済み配列 `filteredArr` を返しなさい。

`fn` 関数は1つまたは2つの引数を取る:

- `arr[i]` - 配列 `arr` の要素
- `i` - `arr[i]` のインデックス

`filteredArr` には、`fn(arr[i], i)` の評価結果が truthy になる要素のみを含めること。
truthy とは、`Boolean(value)` が `true` になるような値を指す。

**組み込みの `Array.prototype.filter` メソッドを使わずに解くこと。**

---

### Example 1

**Input**

```ts
arr = [0, 10, 20, 30]
fn = function greaterThan10(n) { return n > 10; }
```

**Output**

```ts
[20, 30]
```

**Explanation**

```ts
const newArray = filter(arr, fn); // [20, 30]
```

`fn` は 10 より大きくない値を除外する。

---

### Example 2

**Input**

```ts
arr = [1, 2, 3]
fn = function firstIndex(n, i) { return i === 0; }
```

**Output**

```ts
[1]
```

**Explanation**

`fn` はインデックスも受け取ることができる。
この場合、インデックス 0 以外の要素を削除する。

---

### Example 3

**Input**

```ts
arr = [-2, -1, 0, 1, 2]
fn = function plusOne(n) { return n + 1; }
```

**Output**

```ts
[-2, 0, 1, 2]
```

**Explanation**

`0` のような falsy な値はフィルタされるべきである。

---

### Constraints

- \\(0 \leq \text{arr.length} \leq 1000\\)
- \\(-10^9 \leq \text{arr[i]} \leq 10^9\\)

