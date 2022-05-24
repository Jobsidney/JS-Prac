
const toDos=[
    {
        id:1,
        text:'Take out'
    },
    {
        id:3,
        text:'meet dentist'
    }
]


// console.log(toDO[1].text);
// const toDOJson=JSON.stringify(toDo);
// console.log(toDOJson)

// for (let i = 0; i <toDo.length; i++) {
//     console.log(toDo[i].text);
// }
// for(let todo of toDos){
//     console.log(todo.text);
// }
// const x=10;
// const color= x>10?'red':'blue';
// console.log(color);
// switch (color) {
//     case 'red':
//         console.log('COLOR IS RED');
//         break;
//     case 'blue':
//         console.log('COLOR IS BLUE');
//         break
//     default:
//         console.log('COlor doesnt match any');
//         break;
// }
// const adds=(num1,num2)=> num1+num2;
// console.log(adds(2,6));

// toDos.forEach((todo)=> console.log(todo));




// class Person{
//     constructor(firstName,lastName,dob){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.dob=new Date(dob);
//     }
//     getBIrthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }




// const person1=new Person('job','Sidney','9-7-2000');
// console.log(person1.getBIrthYear());
// console.log(person1.getFullName());
// console.log(person1);
// console.log(document.getElementById('my-form'));
// console.log(document.querySelectorAll('.container'));

const btn=document.querySelector('.btn');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark')
}) 