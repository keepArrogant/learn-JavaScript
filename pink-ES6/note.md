## 1.构造函数和原型

### 1.2 构造函数

- 构造函数是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与new一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。

- 在JS中，使用构造函数要注意一下两点：
  + 1.构造函数用于创建某一类对象，其首字母要大写。
  + 2.构造函数要和 new 一起使用才有意义。

#### new在执行时会做四件事情：

- 在内存中创建一个新的空对象。
- 让this指向这个新的对象。
- 执行构造函数里面的代码，给这个新对象添加属性和方法。
- 返回这个新对象(所以构造函数里面不需要return。

### 1.3 构造函数的问题

- 构造函数方法很好用，但是存在浪费内存的问题。

### 1.4构造函数原型prototype

- 构造函数通过原型分配的函数是所有对象所共享的。
- JavaScript规定，每一个构造函数都有一个prototype属性，指向另一个对象。注意这个prototype就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。

- 我们可以把哪些不变的方法，直接定义在prototype对象上，这样所有对象的实例就可以共享这些方法。

#### 问答？

- 原型是什么？
  + 一个对象，我们也称为prototype为原型对象。

- 原型的作用是什么？
  + 共享方法。

### 1.5对象原型`__proto__`

- 对象都会有一个属性`__proto__`指向构造函数的prototype原型对象，之所以我们对象可以使用构造函数prototype原型对象的属性和方法，就是因为对象有`__proto__`原型的存在.
- `__proto__`对象原型和原型对象prototype是等价的
- `__proto__`对象原型的意义就在于为对象的查找机制提供一个方向，或者说是一条路线，但是它是一个非标准属性，因此实际开发中，不可以使用这个属性，它只是内部指向原型对象prototype

### 1.6 constructor 构造函数

- 对象原型（`__proto__`）和构造函数（prototype） 原型对象里面都有一个属性constructor 属性，constructor 我们称为构造函数，因为它指回构造函数本身。
- constructor 主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数。

### 1.7 构造函数、实例、原型对象三者之间的关系

![1593911170367](F:\pink-ES6\构造函数和实例和原型对象关系图.png)

![1593911787515](F:\pink-ES6\原型链.png)

### 1.9 JavaScript的成员查找机制(规则)

- 当访问一个对象的属性(包括方法)时，首先查找这个对象自身有没有该属性。
- 如果没有就查找它的原型(也就是`__proto__`指向的prototype原型对象)。
- 如果还没有就查找原型对象的原型(Object的原型对象)。
- 依次类推一直找到Object为止(null).

### 1.10 this 指向

- 在构造函数中，里面的this指向的是对象实例
- 原型对象函数里面的this 指向的是实例对象

### 1.11 扩展内置对象

- 可以通过原型对象，对原来的内置对象进行扩展自定义的方法。比如给数组增加自定义求偶数和的功能。
  + 注意：数组和字符串内置对象不能给原型对象覆盖操作 `Array.prototype = {}` ,只能是`Array.prototype.xxx = function(){} `的方式

## 2. 继承

- ES6之前并没有给我们提供extends 继承。我们可以通过构造函数+原型对象模拟实现继承，被称为组合继承。

### 2.1 call()

- 调用这个函数，并且修改函数运行时的this指向

  `fun.call(thisArg, arg1, arg2, ...)`

- `thisArg`: 当前调用函数this的指向对象
- `arg1， arg2`： 传递的其他参数

### 2.3 类的本质

- class 本质还是function
- 类的所有方法都定义在类的prototype属性上
- 类创建的实例，里面也有`__proto__` 指向类的prototype原型对象
- 所以`ES6`的类它的绝大部分功能，`ES5`都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
- 所以`ES6`的类其实就是语法糖。
- 语法糖：语法糖就是一种便捷写法。简单理解，有两种方法可以实现相同的功能，但是一种写法更加清晰、方便，那么这个方法就是语法糖。

## 3.`ES5`中新增方法

### 3.1 数组方法

- 迭代（遍历）方法：`forEach()`

  `array.forEach(function(currentValue, index, arr){})`

  `currentValue`:数组当前项的值

  index：数组当前项的索引

  arr：数组对象本身

-  筛选数组中的元素：filter()、

  `array.filter(function(currentValue, index, arr){})`

  filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，主要用于筛选数组。

  **注意它直接返回一个新数组。**

  `currentValue`：数组当前项的值

  index：数组当前项的索引

  arr：数组对象本身

  、every()；map()；

- 查找数组中的元素：some()

  `array.some(function(currentValue, index, arr){})`

  some() 方法用于检测数组中的元素是否满足指定条件。通俗点 查找数组中是否有满足条件的元素

  注意它的返回值是布尔值，如果查找到这个元素，就返回true，如果查找不到就返回false。

  **如果找到第一个满足条件的元素，则终止循环。不再继续查找。**

  `currentValue`: 数组当前项的值

  index：数组当前项的索引

  arr：数组对象本身
### 3.2 字符串方法

- trim() 方法会从一个字符串的两端删除空白字符。

  `str.trim()`

- trim() 方法并不影响原字符串本身，它返回的是一个新的字符串。

### 3.3 对象方法

- `Object.keys()` 用于获取对象自身所有的属性

  `Object.keys(obj)`

  - 效果类似for..in
  - 返回一个由属性名组成的数组

- `Object.defineProperty()`定义新属性或修改原有的属性

  `Object.defineProperty(obj, prop, descriptor)`

  `Object.defineProperty()` 第三个参数 descriptor 说明：以对象形式{} 书写

  + value：设置属性的值 默认为undefined
  + writable：值是否可以重写。true|false 默认为false
  + enumerable：目标属性是否可以被枚举。 true|false 默认为false
  + configurable：目标属性是否可以被删除或是可以再次修改特性 true|false 默认为false



你好，我想请您帮忙查个公司 是否报备了  叫宜昌腾煌商贸有限责任公司    

没报备啊  那么需要带哪些材料办理报备呢    

## 

## 4.函数的定义和调用

### 4.1 函数的定义方式

- 函数声明方式function 关键字(命名函数)

- 函数表达式

- new Function()

  `var fn = new Function('参数1','参数2',...,'函数体')`

- Function 里面参数都必须是字符串格式

- 第三种方式执行效率低，也不方便书写，因此较少使用

- 所有函数都是Function的实例(对象)

- 函数也属于对象

  ![1594028599873](F:\pink-ES6\函数的定义方式.png)

### 4.2 函数内 this 的指向

- 这些this的指向，是当我们调用函数的时候确定的。调用方式的不同决定了this的指向不同，一般指向我们的调用者。
  - **调用方式                this指向**
  - 普通函数调用         window
  - 构造函数调用         实例对象 原型对象里面的方法也指向实例对象
  - 对象方法调用         该方法所属对象
  - 事件绑定方法          绑定事件对象
  - 定时器函数              window
  - 立即执行函数           window

#### 1. call 方法

- 调用这个函数，并且修改函数运行时的this指向

  `fun.call(thisArg, arg1, arg2, ...)`

- `thisArg`: 当前调用函数this的指向对象

- `arg1， arg2`： 传递的其他参数

#### 2.apply 方法

- apply() 方法调用一个函数。简单理解为调用函数的方法，但是它可以改变函数的this指向。

  `fun.apply(thisArg, [argsArray])`

- thisArg：在fun函数运行时指定的this值
- argsArray：传递的值，必须包含在数组里面
- 返回值就是函数的返回值，因为它就是调用函数

#### 3.bind 方法

- bind() 方法不会调用函数。但是能改变函数内部this指向

  `fun.bind(thisArg, arg1, arg2, ...)`

- thisArg：在 fun 函数运行时指定的this值
- arg1，arg2：传递的其他参数
- 返回由指定的this值和初始化参数改造的原函数拷贝

#### call apply bind 总结

##### 相同点：

- 都可以改变函数内部的this指向

##### 区别点：

- call 和 apply 会调用函数，并且改变函数内部this指向
- call 和 apply 传递的参数不一样， call 传递参数 aru1,aru2..形式 apply 必须数组形式[arg]
- bind 不会调用函数，可以改变函数内部this指向

##### 主要应用场景：

- call 经常做继承
- apply 经常跟数组有关系。比如借助于数学对象实现数组最大值最小值
- bind 不调用函数，但是还想改变this指向。比如改变定时器内部的this指向。

## 5.严格模式

### 5.1 什么是严格模式

- JavaScript除了提供正常模式外，还提供了严格模式(strict mode). ES5的严格模式是采用具有限制性JavaScript变体的一种方式，即在严格的条件下运行JS代码。
- 严格模式在IE10 以上版本的浏览器中才会被支持，旧版本浏览器钟会被忽略。
- 严格模式对正常的JavaScript语义做了一些更改：
  + 消除了JavaScript语法的一些不合理、不严谨之处，减少了一些怪异行为。
  + 消除代码运行的一些不安全之外，保证代码运行的安全。
  + 提高编译器效率，增加运行速度
  + 禁用了在ECMAScript 的未来版本中可能会定义的一些语法，为未来新版本的JavaScript做好铺垫。比如一些保留字如：class，enum，export，extends，import，super 不能做变量名

### 5.2 严格模式中的变化

- 严格模式对JavaScript 的语法和行为，都做了一些改变。

**严格模式下this指向问题**

- 以前在全局作用域函数中的this指向window对象。
- **严格模式下全局作用域中函数中的this是undefined。**
- 以前构造函数时不加new也可以调用，当普通函数，this指向全局对象。
- 严格模式下，如果构造函数不加new 调用，this会报错。
- new 实例化的构造函数指向创建的对象实例。
- 定时器this 还是指向window。
- 事件、对象还是指向调用者。

**函数变化**

- 函数不能有重名的参数。
- 函数必须声明在顶层。新版本的JavaScript 会引入 “块级作用域”(ES6中已引入)。 为了与新版本接轨，不允许在非函数的代码块内声明函数。

## 6.高阶函数

 **高阶函数是对其他函数进行操作的函数，它接收函数作为参数或将函数作为返回值输出。**

```javascript
<script>
	function fn(callback){
    callback&&callback();
}  
fn(function(){alert('hi')});
</script>
```

```javascript
<script>
function fn(){
    return function() {};
}
fn();
</script>
```

 此时fn 就是一个高阶函数。

 函数也是一种数据类型，同样可以作为参数，传递给另外一个参数使用。最经典的就是作为回调函数

## 7. 闭包

### 7.1 变量作用域

 变量根据作用域的不同分为两种：全局变量和局部变量

- 函数内部可以使用全局变量。
- 函数外部不可以使用局部变量。
- 当函数执行完毕，本作用域内的局部变量会销毁。

### 7.2 什么是闭包

 **闭包(closure)** 指有权**访问**另一个函数作用域中**变量**的**函数**。  ---JavaScript高级程序设计

- 简单理解就是，一个作用域可以访问另外一个函数内部的局部变量

-  闭包是一个函数(一个作用域可以访问另外一个函数的局部变量)

**闭包的作用是什么？**

- 延伸变量的作用范围

## 8.递归

### 8.1 什么是递归？

- 如果**一个函数在内部可以调用其本身**，那么这个函数就是**递归函数**。
- 简单理解：函数内部自己调用自己。这个函数就是递归函数。
- 递归函数的作用和循环效果一样。
- 由于递归很容易发生"栈溢出"错误(stack overflow)，所以**必须要加退出条件 return.**

### 8.2 浅拷贝与深拷贝

- 浅拷贝只是拷贝一层，更深层次对象级别的只拷贝引用。
- 深拷贝拷贝多层，每一层的数据都会被拷贝。

- `Object.assign(target,...sources)  es6`中新增方法可以浅拷贝。

## 9.正则表达式

### 9.1 什么是正则表达式

- 正则表达式(Regular Expression) 是用于匹配字符串中字符组合的模式。在JavaScript中，正则表达式也是对象。
- 正则表通常被用来检索、替换哪些符合某个模式(规则)的文本，例如验证表单：用户名表单只能输入英文字母、数字或者下划线，昵称输入框中可以输入中文(匹配)。此外，正则表达式还常用于过滤掉页面内容中的一些敏感词(替换)，或从字符串中获取网名想要的特定部分(提取)等。
- 其他语言也会使用正则表达式，本阶段网名主要是利用JavaScript正则表达式完成表单验证。

### 9.2 正则表达式的特点

- 灵活性、逻辑性和功能性非常的强。
- 可以迅速地用极简单的方式达到字符串的复杂控制。
- 对于刚接触的人来说，比较晦涩难懂。比如： `^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$`
- 实际开发，一般都是直接复制写好的正则表达式。但是要求会使用正则表达式并且根据实际情况修改正则表达式。比如用户名： `/^[a-z0-9_-]{3,16}$/`

### 9.3 创建正则表达式

- 在JavaScript中，可以通过两种方式创建一个正则表达式

  + 通过调用`RegExp` 对象的构造函数创建
    - `var 变量名 = new RegExp(/表达式/);`

  + 通过字面量创建
    - `var 变量名 = /表达式/;`

### 9.4 测试正则表达式 test

test() 正则对象方法，用于检测字符串是否符合该规则，该对象会返回true或false，其参数是测试字符串。

`regexObj.test(str)`

- `regexObj `是写的正则表达式。
- str 我们要测试的文本。
- 就是检测str文本是否符合我们写的正则表达式规范。

### 9.5 正则表达式的组成

 一个正则表达式**可以由简单的字符构成**，比如/abc/ ，**也可以是简单和特殊字符的组合**，比如/ab*c/。 其中特殊字符也被称为**元字符**，在正则表达式中是具有**特殊**意义的专用**符号**，如^、$、+

特殊字符非常多，可以参考

- MDN: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
- jQuery手册：正则表达式部分
- 正则测试工具：http://tool.oschina.net/regex

### 9.6 边界符

 正则表达式中的边界符(位置符) 用来提示字符所处的位置，主要有两个字符。

- ^  ： 表示匹配行首的文本(以谁开始)
- $  ： 表示匹配行尾的文本(以谁结束)

如果 ^ 和 $ 在一起，表示必须是精确匹配。

###  9.7 字符类

 字符类表示有一系列字符可供选择，只要匹配其中一个就可以了。**所有可供选择的字符都放在方括号内**。

- [-] 方括号内部 范围符 

- 字符组合： `/^[a-z0-9]$/.test('a'); //true`
- [^] 方括号内部 取反符^  `/^[^abc]$/.test('a');  //false`

### 9.8 量词符

量词符用来设定某个模式**出现的次数**

| 量词  |         说明          |
| :---: | :-------------------: |
|   *   |   重复零次或更多次    |
|   +   |   重复一次或更多次    |
|   ?   |    重复零次或一次     |
|  {n}  |        重复n次        |
| {n,}  |    重复n次或更多次    |
| {n,m} | 重复n次到m次(包括n m) |

### 9.9 括号总结

- 大括号：量词符。 里面表示重复次数。
- 中括号：字符集合。 匹配方括号中的任意字符。
- 小括号：表示优先级。

 可以在线测试：http://c.runoob.com/

### 9.10 预定义类

 预定义类指的是**某些常见模式的简写方式。**

| 预定类 |                           说明                            |
| :----: | :-------------------------------------------------------: |
|   \d   |            匹配0-9之间的任一数字，相当于[0-9]             |
|   \D   |           匹配所有0-9以外的字符，相当于`[^0-9]`           |
|   \w   |    匹配任意的字母、数字和下划线，相当于`[A-Za-z0-9_]`     |
|   \W   | 除所有字母、数字和下划线以外的字符，相当于`[^A-Za-z0-9_]` |
|   \s   | 匹配空格(包括换行符、制表符、空格符等),相当于[\t\r\n\v\f] |
|   \S   |          匹配非空格的字符，相当于`[^\t\r\n\v\f]`          |

### 9.10 replace 替换

replace() 方法可以实现替换字符串操作，用来替换的参数可以是一个字符串或是一个正则表达式。

`stringObject.replace(regexp/substr,replacement)`

- 第一个参数：被替换的字符串 或者正则表达式
- 第二个参数：替换为的字符串
- 返回值是一个替换完毕的新字符串

### 9.11 正则表达式参数

`/表达式/[switch]`

switch(也称为修饰符) 按照什么样的模式来匹配。有三种值：

- g：全局匹配
- i：忽略大小写
- gi：全局匹配+忽略大小写

## 10 let

### 10.1 特点

- let 关键字就是用来声明变量的

- 使用let关键字声明的变量具有块级作用域

- 防止循环变量变成全局变量

- 不存在变量提升(在声明之前打印let声明的变量会报错：初始化之前无法访问)

  ```javascript
  console.log(a); //Cannot access 'a' before initialization
  let a = 20;
  ```

  

- 暂时性死区

  ```javascript
  var tmp = 123;
  if(true){
      tmp = 'abc';//Cannot access 'tmp' before initialization
      let tmp;
  }
  ```

  

## `const `

作用： 声明常量，常量就是值(内存地址) 不能变化的量

- 具有块级作用域

  ```javascript
  if(true) {
      const a = 10;
  }
  console.log(a); //a is not defined
  ```

  

- 声明常量时必须赋初始值

  ```javascript
  const PI; //Missing initializer in const declaration
  ```

  

- 常量赋值后，值不能修改

  ```javascript
  const PI = 3.14;
  PI = 100; //Assignment to constant variable.
  ```

  ```javascript
  const ary = [100,200];
  ary[0] = 'a';
  ary[1] = 'b';
  console.log(ary);  //['a','b']
  ary = ['a','b']; //Assignment to constant variable.
  ```

  

## 11 `let、const、var` 的区别

- 使用**var** 声明的变量，其作用域为**该语句所在的函数内，且存在变量提升现象**。

- 使用**let** 声明的变量，其作用域为**该语句所在的代码块内，不存在变量提升**。

- 使用**`const`** 声明的是常量，在后面出现的代码中**不能再修改该常量的值**。

  |     var      |      let       |     const      |
  | :----------: | :------------: | :------------: |
  | 函数级作用域 |   块级作用域   |   块级作用域   |
  |   变量提升   | 不存在变量提升 | 不存在变量提升 |
  |   值可更改   |    值可更改    |   值不可更改   |

## 12 解构赋值

 `ES6`中允许从数组中提取值，按照对应位置，对变量赋值。对象也可以实现解构。

- **数组解构**

  ```javascript
  let [a,b,c] = [1,2,3];
  console.log(a); //1
  console.log(b); //2
  console.log(c); //3
  ```

- 如果解构不成功，变量的值为undefined

  ```javascript
  let [foo] = [];
  let [bar,foo] = [1];
  console.log(foo); //undefined
  ```

- 对象解构

  ```javascript
  let Person = {name:'zhangsan',age;20};
  let {name,age} = person;
  console.log(name); //'zhangsan'
  console.log(age); //20
  ```

  ```javascript
  let Person = {name:'zhangsan',age;20};
  let {name: myName, age: myAge} = person; //myName myAge 属于别名
  console.log(myName); //'zhangsan'
  console.log(myAge); //20
  ```

## 13 箭头函数

 `ES6`中新增的定义函数的方式。

```javascript
() => {};
const fn = ()=> {};
```

- 函数体重只有一句代码，且代码的执行结果就是返回值，可以省略大括号。

```javascript
function sum(num1,num2) {
    retrun num1 + num2;
}

const sum = (num1,num2) => num1 + num2;
```

- 如果形参只有一个，可以省略小括号

```javascript
function fn (v) {
    return v;
}

const fn = v => v;
```

- 箭头函数不绑定this关键字，箭头函数中的this，指向的是函数定义位置的上下文this

  ```javascript
  const obj = {name: 'andy'};
  function fn(){
      console.log(this);
  	return () => {
          console.log(this);
      }
  }
  const resFn = fn.call(obj);
  resFn();   //最后执行结果 fn中的this指向调用者obj  箭头函数中的this指向fn函数的调用者obj
  ```

## 14 剩余参数

- 剩余参数语法允许我们将一个不定数量的参数表示为一个数组。

  ```javascript
  function sum (first, ...args) {
      console.log(first); //10
      console.log(args);  //[20,30]
  }
  sum(10,20,30);
  ```

- 剩余参数和解构配合使用

  ```javascript
  let students = ['wangwu','zhangsan','lisi'];
  let [s1, ...s2] = students;
  console.log(s1); //'wangwu'
  console.log(s2); //['zhangsan','lisi']
  ```

## 15 Array 的扩展方法

### 15.1 扩展运算符(展开语法)

- 扩展运算符可以将数组或者对象转为用逗号分隔的参数序列。

  ```javascript
  let ary = [1,2,3];
  ...ary  //1,2,3
  console.log(...ary); //1 2 3
  ```

- 扩展运算符可以应用于**合并数组**。

  ```javascript
  //方法一
  let ary1 = [1,2,3];
  let ary2 = [4,5,6];
  let ary3 = [...ary1, ...ary2];
  //方法二
  ary1.push(...ary2);
  ```

- 将类数组或可遍历对象转换为真正的数组

  ```javascript
  var oDivs = document.getElementsByTagName('div');
  var ary = [...oDivs];
  ```

### 15.2 构造函数方法： `Array.from()`

- 将类数组或可遍历对象转换为真正的数组

  方法还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

```javascript
let arrayLike = {
    '0': '1',
    '1': '2',
    '2': '3',
    length: 3
};
let arr2 = Array.from(arrayLike); 
console.log(ary2);// ["1","2","3"];

//有第二个参数的情况下
let arr2 = Array.from(arrayLike, item => item * 2); 
console.log(ary2);// [2,4,6];
```

### 15.3 实例方法： find()

- 用于找出第一个符合条件的数组成员，如果没有找到返回undefined

  ```javascript
  let ary = [{
  	id: 1,
  	name: '张三'
  }, {
      id: 2,
      name: '李四'
  }];
  let target = ary.find(item => item.id == 2);
  ```

### 15.4 实例方法：` findIndex()`

- 用于找出第一个符合条件的数组成员的位置，如果没有找到返回-1

  ```javascript
  let ary = [1,5,10,15];
  let index = ary.findIndex(item => item > 9);
  console.log(index);//2
  ```

### 15.5 实例方法：`includes()`

- 表示某个数组是否包含给定的值，返回布尔值。

  ```javascript
  [1,2,3].includes(2) //true
  [1,2,3].includes(4) //false
  ```

## 16 String 的扩展方法

### 16.1 模板字符串

- `ES6`新增的创建字符串的方式，使用反引号定义。

  ```javascript
  let name = `zhangsan`;
  let sayHello = `hello,my name is ${name}`; //hello,my name is zhangsan
  ```

- 模板字符串中可以换行

  ```javascript
  let result = {
      name: 'zhangsan',
      age: 20,
      sex: '男'
  }
  let html = `<div>
  	<span>${result.name}</span>
  	<span>${result.age}</span>
  	<span>${result.sex}</span>
  </div>`;
  ```

- 在模板字符串中可以**调用函数**

  ```javascript
  const sayHello = function() {
      return '哈哈哈哈 你是来拉屎的吗？';
  };
  let greet = `${sayHello()} 哈哈哈哈`;
  console.log(greet); //哈哈哈哈 你是来拉屎的吗？ 哈哈哈哈
  ```

### 16.2 实例方法： `startsWith() 和endsWith()`

- `startsWith()`：表示参数字符串是否在原字符串的头部，返回布尔值

- `endsWith()`：表示参数字符串是否在原字符串的尾部，返回布尔值

  ```javascript
  let str = 'Hello world!';
  str.startsWith('Hello'); //true
  str.endsWith('!'); //true
  ```

### 16.3 实例方法：`repeat（）`

- repeat方法表示将原字符串重复n次，返回一个新字符串。

  ```javascript
  'x'.repeat(3); //"xxx"
  'hello'.repeat(2);"hellohello"
  ```

## 17 Set数据结构

- `ES6`提供了新的数据结构Set。 它类似于数组，但是成员的值都是唯一的，没有重复的值。

- Set本身是一个构造函数，用来生成Set数据结构。

  ```javascript
  const s = new Set();
  ```

- Set函数可以接受一个数组作为参数，用来初始化。

  ```javascript
  const set = new Set([1,2,3,4,4]);
  ```

### 17.1 实例方法

- add(value)：添加某个值，返回Set结构本身。

- delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。

- has(value)：返回一个布尔值，表示该值是否为Set的成员。

- clear()：清除所有成员，没有返回值。

  ```javascript
  const s = new Set();
  s.add(1).add(2).add(3); //向set结构中添加值
  s.delete(2); //删除set结构中的2值
  s.has(1); //表示set结构中是否有1这个值 返回布尔值
  s.clear(); //清除set结构中的所有值
  ```

### 17.2 Set遍历

- Set结构的实例与数组一样，也拥有`forEach`方法，用于对每个成员执行某种操作，没有返回值。

  ```javascript
  s.forEach(value => console.log(value));
  ```

  

