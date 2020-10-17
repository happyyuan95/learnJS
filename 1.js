const { connected } = require("process");

function funcfile(){
    document.getElementById("p3").innerHTML = "外部文件中使用js函数改变段落内容";
}

function jisuan(){
    var a = 3, b = 4;
    console.log("a+b=", a+b);
    console.log("a-b=", a-b);
    console.log("a*b=", a*b);
    console.log("a/b=", a/b);
    console.log("----------------------");
    console.log("a=", a+=b);
    console.log("a=", a-=b);
    console.log("a=", a*=b);
    console.log("a=", a/=b);
    console.log("a=", a%=b);
    var s = "hahahaha"
    console.log("--------------------");
    console.log(s+a);
}
//jisuan()

function luoji(){
    var a = 5, c = 6;
    var b = "5";
    console.log("a==b", a==b); //true
    console.log("a===b", a===b); //false值和类型都相等
    console.log("a!=c", a!=c); //true
    console.log("a!=b", a!=b); //false
    console.log("a!==b", a!==b); //true值和类型有一个不想等
    console.log("a>c", a>c);
    console.log("a<c", a<c);
    console.log("a>=c", a>=c);
    console.log("a<=c", a<=c);
    voteable=(a<18)?"未成年":"成年";
    console.log(voteable)
}
//luoji();

function xunhuan(){
    var a = [1,2,3,4,5,6], sum = 0;
    // for(var i=0; i<a.length; i++){
    //     sum += a[i];
    // }
    var i = 0;
    // while(i < a.length){
    //     sum += a[i];
    //     i++;
    // }
    do{
        sum += a[i];
        i++;
    }while(i<3);
    return sum;
}
//console.log(xunhuan());

var num = 100;
function getVar(){
    //num = 50;  //更改全局变量
    //var num = 50;  //定义局部变量，只在函数中有作用
    //console.log("-----in function：", num);
}
getVar();  //50
//console.log("------------out function:", num);  //100

var x = 0;
{
    //var x = 1;  //var声明的变量不具备块级作用于特性，{}外也能访问,会改变块外同名变量的值
    let x = 2;  //let声明的变量只能再let命令所在代码块{}中访问
    //console.log(x)
}
//console.log(x)


// let i = 0;
// for(let i=1; i<5; i++){
//     console.log("for i= " + i);
// }
// console.log("out for i=", i);

// new Promise(function (resolve, reject) {
//     console.log("Run");
// });

// new Promise(function (resolve, reject) {
//     var a = 0;
//     var b = 1;
//     if (b == 0) reject("Diveide zero");
//     else resolve(a / b);
// }).then(function (value) {
//     console.log("a / b = " + value);
// }).catch(function (err) {
//     console.log(err);
// }).finally(function () {
//     console.log("End");
// });

{
    let filePath = "G:\\wordfortest\\ddd.txt";
    let path = filePath.split("\\");
    let fileName = path[path.length-1];
    console.log("path:", path);
    console.log("fileName:", fileName);
}

console.log("add one line to test jenkins");