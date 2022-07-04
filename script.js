// let sName = prompt ("name");
// let sGraid = prompt ("graid");
// if(sGraid >= 90){
//     document.getElementById('graid').innerText = sName + 'your graid is A'
// }else if (sGraid >= 85){
//     document.getElementById('graid').innerText = sName + 'your graid is B'
// }else if (sGraid >= 75){
//     document.getElementById('graid').innerText = sName + 'your graid is C'
// }else if (sGraid >= 60){
//     document.getElementById('graid').innerText = sName + 'your graid is D'
// }else{
//     document.getElementById('graid').innerText = sName + 'your graid is F'
// }
for(let i = 0; i<=10 ; i++){
    if(i%2 != 0){
        console.log(i + ' is odd')
    }
}
// while take the condition only in it the variale is out side 
// let new1 = (uName,a,b)=>{
//     return a+b 
//     console.log(uName)
// }
// console.log(new1(omar(6,6)))
// let fruits = ['mango' , 'apple' , 'orange']
// console.log(fruits.length)
// for (let i=0 ; i<fruits.length ;i++){
//     console.log(fruits[i])
// }
// fruits.forEach((fruit)=>{
//     console.log(fruit)
// })
// let students = [
//     {
//         name:'Omar',
//         age:15,
//         math:15,
//         arabic:17,
//         eng:20,
//         degrees:[15,17,20]
//     },
//     {
//         name:'Osama',
//         age:17,
//         math:12,
//         arabic:13,
//         eng:10,
//         degrees:[12,13,10]
//     },
//     {
//         name:'Yassin',
//         age:17,
//         math:16,
//         arabic:11,
//         eng:5,
//         degrees:[16,11,5]
//     }
// ]
// students.forEach((student)=>{
//   let sum = student.arabic + student.eng +student.math 
//   console.log (student.name + sum)

// }

// )
// js is synchronous
console.log('first');
setTimeout(()=> {
    console.log("this msg is shown after 2 sec")
},2000);
console.log('last')

let fetchUser = async function (){
    try {
        const res = await fetch ('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data)
    }
    catch(e){
        console.log(e)
    }
}
fetchUser()
console.log('test')