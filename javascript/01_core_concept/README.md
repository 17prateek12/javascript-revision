## ⚖️ JavaScript Variable Comparison

| Feature              | `var`                              | `let`                              | `const`                            |
|-----------------------|------------------------------------|------------------------------------|------------------------------------|
| **Scope**             | Function-scoped                    | Block-scoped                       | Block-scoped                       |
| **Hoisting**          | Yes (initialized with `undefined`) | Yes (TDZ applies)                  | Yes (TDZ applies)                  |
| **Redeclaration**     | ✅ Allowed                         | ❌ Not allowed                     | ❌ Not allowed                     |
| **Reassignment**      | ✅ Allowed                         | ✅ Allowed                         | ❌ Not allowed                     |
| **Must be initialized?** | ❌ No                            | ❌ No                              | ✅ Yes                             |
| **Preferred use**     | ❌ Avoid                           | ✅ Use for changeable variables     | ✅ Use for constants                |


| Expression             | Meaning                                 |
| ---------------------- | --------------------------------------- |
| `abxcd`                | Function reference                      |
| `abxcd()`              | Calls outer function                    |
| `abxcd()()`            | Calls returned inner function           |
| `bnd`                  | Variable holding a function             |
| `bnd()`                | Executes the function                   |
| `bnd()()`              | Executes the returned function          |
| `console.log(bnd())`   | Logs the returned function              |
| `console.log(bnd()())` | Logs the return value of inner function |
