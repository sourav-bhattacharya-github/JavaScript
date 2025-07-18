# 📘 JavaScript Learning Repo

This repository contains my JavaScript learning notes, code, and practice files. The journey is inspired by the **Chai aur Code** series by _Hitesh Choudhary_.  
➡️ [Chai aur Code YouTube Channel](https://www.youtube.com/@chaiaurcode)

---

## 🗂️ Topics Covered

| 📌 Topic Name         | 📁 Repo File Link                                        | 📝 Note                                                                                                                                                                                                                                                                        | ❗ Important Note                                                                                                                                                                                            |
| --------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Variables Declaration | `var` vs `let` vs `const` [📄](./01_basics/01_variables.js)    | Prefer `let` and `const` for block scope and predictable behavior. Use `const` for values that shouldn't change.                                                                                                                                                               | **Avoid using `var`** due to hoisting and function scope issues. Prefer `const` for immutability and safer code.                                                                                             |
| Data Types            | JavaScript Data Types [📄](./01_basics/02_data_types.js) | JavaScript has 7 primitive types: `number` (up to 2⁵³), `bigint`, `string` (`""`), `boolean` (`true`/`false`), `null` (standalone value), `undefined`, and `symbol` (unique). Non-primitive types include objects `{}`, arrays `[]`, and functions, which are reference-based. | <span style="color:red">Primitive types are stored by value; reference types by reference. Note: `typeof null` returns `"object"` (legacy bug). Use **`"use strict";` for safer, modern JavaScript.**</span> |
| Type Conversion & Coercion | JS Type Conversion [📄](./01_basics/03_conversionOperation.js)             | Use `Number()`, `String()`, `Boolean()` for safe type conversion; implicit coercion can be error-prone. | <span style="color:red">Avoid relying on implicit coercion — `+` may concatenate instead of adding. Prefer explicit conversion for safety.</span> |
| Comparison Operators     | JS Comparison Operators [📄](./01_basics/04_comparision.js)            | Always prefer `===` over `==` to avoid unexpected type coercion during comparison.           | <span style="color:red">Use `===` and `!==` for accurate results; `==` can lead to confusing bugs due to type coercion.</span> |
| Numbers & Math       | JavaScript Numbers and Math [📄](./01_basics/06_nums_and_math.js)       | Use `Math` methods for rounding and random values; be cautious with float precision (`0.1 + 0.2 !== 0.3`).       | <span style="color:red">Use `parseInt`, `parseFloat`, and `Number()` carefully; floating-point math may cause precision bugs.</span> |
| Dates in JavaScript | JavaScript Dates [📄](./01_basics/07_datesinJs.js)                    | Use `Date()` and its methods to get/set date parts; always handle months as zero-indexed.       | <span style="color:red">JS months are 0-indexed (`0 = Jan`); use `toISOString()` for API & `getTime()` for timestamp comparisons.</span> |


---

> 🧠 **More topics and files will be added as I progress. Stay tuned!**

---

### 📣 Credits

Inspired by **[Chai aur Code – Hitesh Choudhary](https://www.youtube.com/@HiteshChoudhary)**  
Thanks for making learning JavaScript so much fun 🙌
