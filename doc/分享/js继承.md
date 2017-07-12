## js继承

- 原型链继承
- 借用构造函数继承
- 组合继承
- 原型式继承   es5  Object.create();
- 寄生式继承
- 寄生组合式继承


 

### 构造函数，实例

##### 构造函数，是用来创建对象的函数，本质上也是函数。与其他函数的区别在于调用方式不同

1. 如果通过new操作符来调用的，就是构造函数
 
2. 如果没有通过new操作符来调用的，就是普通函数

 
```js

function Person(name, age) {
   this.name = name;
   this.age = age;
 }
 //当做构造函数调用
 var p1 = new Person('name1',10);
 
 //当做普通函数调用， 
 Person('name2',12);
 
 console.log(p1) // ?
 console.log(name)// ?
 console.log(age)//?
 
```


### 原型对象

#####  当我们每次创建一个函数的时候，函数对象都会有一个prototype属性，这个属性是一个指针,指向它的原型对象。原型对象的本质也是一个对象

 
```js

function Person(name, age) {
   this.name = name;
   this.age = age;
 }
 
   console.log(Person.prototype)// ?
 
```


### 构造函数，原型对象和实例的关系


1. 构造函数.prototype = 原型对象
2. 原型对象.constructor = 构造函数(模版)(函数对象)
3. 原型对象.isPrototypeOf(实例对象)  判断实例对象的原型 是不是当前对象 
 (实例对象.__proto__ = 原型对象)  (实例对象的[Protoptype])
   __proto__ 作用是：允许实例通过该属性访问原型对象中的属性和方法


```js

function Person(name, age) {
        this.name = name;
        this.age = age;
      }
      
      //在原型对象中添加属性或者方法
     Person.prototype.sex = '男'; 
     var p1 = new Person('a',1);
     var p2 = new Person('b',2);
     
     //只给p2设置性别
     
     p2.sex = '女';
     console.log(p1.sex)//?
     console.log(p2.sex)//?

```

 tip: 实例本身不存在对应的属性或方法时，才会去找原型对象上的对应属性或方法

###  继承 - 构造函数 
call apply
  
###  继承 - 原型链  
 
 
###  继承 -   组合继承
看例子