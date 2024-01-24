const user ={
    userName:'hye',
    price:20,
    welcome:function(){
        console.log(`${this.userName},welcome to my program`)
        console.log(this);
    }

}
console.log(user.welcome())
user.userName="hello"
console.log(user.welcome())
console.log(this)
function hello(){
    console.log(this);
    let n=22
    // console.log(this.a); not possible in a function
}

hello()
// console.log(this);