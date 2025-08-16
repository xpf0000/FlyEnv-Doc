# Code Playground & Code Library

## Product Introduction
FlyEnv v4.10.6 introduces two powerful features:
- Code Playground: Execute code snippets in multiple languages instantly
- Code Library: Store and manage code snippets for future reuse

## Code Playground

### Value Proposition
Traditional workflow requires:
1. Creating temporary files in IDE
2. Executing commands in terminal
3. Additional compilation for some languages

FlyEnv simplifies this process to one-click execution.

### User Guide
Access: Tools → Code Playground

Interface:
- Left panel: Code editor with syntax highlighting
- Right panel: Execution output
- Toolbar: Language selection, version switching, execute button

![code-play1](https://oss.macphpstudy.com/image/code-play1.png)

### Supported Languages
Currently supports 10 programming languages:

#### 1. Java
```java
// class name must be Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World Java");
    }
}
```

#### 2. PHP
```php
<?php
echo "Hello World PHP";
?>
```

#### 3. Golang
```go
// package name must be main.go
package main

import "fmt"

func main() {
    fmt.Println("Hello World Golang")
}
```

#### 4. Rust
```rust
fn main() {
    println!("Hello World Rust");
}
```

#### 5. Erlang
```erlang
-module(main).
-export([main/0]).

main() ->
    io:format("Hello World Erlang~n").
```

#### 6. Python
```python
from __future__ import print_function
print("Hello World Python")
```

#### 7. Ruby
```ruby
puts "Hello World Ruby"
```

#### 8. Perl
```perl
use strict;
use warnings;
print "Hello World Perl\n";
```

#### 9. TypeScript
```typescript
const message: string = "Hello World TypeScript";
console.log(message);
```

#### 10. JavaScript
```javascript
console.log("Hello World JavaScript");
```

### Advanced Features
- Multi-version support
- One-click store functionality to code library

![code-play2](https://oss.macphpstudy.com/image/code-play2.png)

## Code Library

### Core Value
Solves code reuse challenges:
- Eliminates project searching
- Builds reusable code knowledge base
- Improves retrieval efficiency

### Key Features
1. **Code Storage**
    - Categorize by language/group
    - Add detailed documentation
    - Save execution snapshots

2. **Quick Retrieval**
    - Keyword search
    - Language/tag filters
    - Favorite snippets

### User Manual
Access: Tools → Code Library

Main interfaces:
1. Library management
   ![code-play5](https://oss.macphpstudy.com/image/code-play5.png)

2. Add snippet
- Syntax highlighting
- Detailed documentation
- Execution snapshot
  ![code-play4](https://oss.macphpstudy.com/image/code-play4.png)
- 
3. Snippet detail
- Full code display
- Version comparison
- One-click copy
  ![code-play3](https://oss.macphpstudy.com/image/code-play3.png)

## Summary
FlyEnv provides a complete code management solution:
- Playground: Instant code validation
- Library: Knowledge preservation
- Combined: Forms "validate-store-reuse" workflow

Benefits:

✓ 50%+ efficiency improvement

✓ Personal/team knowledge base

✓ Focus on core development