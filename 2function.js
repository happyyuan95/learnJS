//函数声明
function func1(a, b){
    return a + b;
}
console.log("func1(a+b) = ", func1(3,4))

//匿名函数 --> 表达式定义不能提升
var x = function(a,b) {return a * b};
var z = x(3,5)
console.log("z=", z)

//函数构造
var myfunc2 = new Function("a", "b", "return a - b");
var x = myfunc2(3,9);
console.log("myfunc2-new:", x);

var myfunc3 = function(a, b){return a / b};
var x = myfunc3(4,5);
console.log("myfunc3-function:", x);

//函数提升，函数可以在声明之前调用
func4();
function func4(){
    console.log("this is a function:hello world!");
}

//自调用函数
(function() {
    console.log("call by myself!");
})();

//箭头函数
//(参数1, 参数2, …, 参数N) => { 函数声明 }
const a = (a,b) => {return a % b};
console.log(a(4,6));

var add = (function () {
    var count = 0;
    return count += 1;  //count的作用域只在函数内
});
//输出都是1
console.log("----1:", add()); 
console.log("----2:",add());
console.log("----3:",add());

var add = (function () {
    var count = 0;
    function plus() {count += 1; } //内嵌函数可以访问父函数的变量
    plus();
    return count;
});
//输出都是1
console.log("****1:", add());
console.log("****2:",add());
console.log("****3:",add());

var add = (function () {
    var count = 0;
    return function () {return count += 1;}
})();
console.log("####1:", add());
console.log("####2:",add());
console.log("####3:",add());

//arguments参数,获取所有的参数值
function sum(){
    var i = 0, sum = 0;
    for (i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log("sum = ", sum(1,2,3,4));

//默认参数
function noargs(a, b){
    if (a === undefined){  //undefined给定默认值
        a = 0;
    }
    b = b || 0;  //undefined时给定默认值
    console.log(typeof(a) + " ," + typeof(b));
}
//noargs(2); //未提供参数时是undefined类型
noargs();