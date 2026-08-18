//Level1 Basics
//task1 Student details
var name="Rupasri"
let age=26
let department="EEE"
let cgpa=7.7

console.log("Name of the student:"+name);
console.log("Age of the student:"+age);
console.log("Student Department:"+department);
console.log("Student CGPa:-"+cgpa);

console.log(`Name:-${name}`);
console.log(`age:-${age}`);
console.log(`Department:-${department}`);
console.log(`CGPA:-${cgpa}`);

//Task2 Simple calculator
var a=20, b=10;
console.log("Addittion:-",a+b);
console.log("Subtraction:-",a-b);
console.log("Multiplication:-",a*b);
console.log("Division:-",a/b);
console.log("Modulus:-",a%b);
console.log("Power:-",a**b);


//Task3 Age calculator
let age1=prompt("Enter age:-")
if(age1>=18){
    console.log("Eligible to vote");
    
}else{
    console.log("Below 18 people are not eligible to vote");
    
}



//Level2 Conditions
//Task4 Student Grade
let marks=prompt("Enter marks:-");
if(marks>=90 && marks<=100){
    console.log("Grade A");
    

}else if(marks>=80 && marks<=89){
    console.log("Grade B");
    
}else if(marks>=70 && marks<=79){
    console.log("Grade c");
    
}else if(marks>=60 && marks<=69){
    console.log("Grade D");
    
}else if(marks<60){
    console.log("Fail");
    
}else{
    console.log("Invalid marks");
    
}


//task5 login system
let correctUsername="admin";
let correctPassword="1234";
let userName=prompt("Enter username");
let password=prompt("Enter password");
if(correctUsername === userName && correctPassword === password){
    
        console.log("Login Successful");
        
}else if(correctUsername !== userName && correctPassword !== password){
        console.log("Invalid Credentials");
        
}else if(correctUsername !== userName){
    console.log("Invalid usename");
    
}else{
    console.log("Invalid password");
    
}


//task6 ATM withdrawal
let balance=10000;
let withdrawal=Number(prompt("Enter withdraw amount:-"));
if(withdrawal<=0){
    console.log("ampunt must be grater than 0");
    
}else if(withdrawal >balance){
    console.log("Insufficient balance");
    
}else if(withdrawal%100 !==0){
    console.log("Amount must be multiple of 100");
    
}else{
    balance=balance-withdrawal;
    console.log("Withdrawl successful");
    console.log("withdrawal amount:-"+withdrawal);
    
    console.log("remaining balance:-"+balance);
    
    
}


//Level3 -loops
//task7 multiplication table
let num=prompt("Enter a number");
for(let i=1; i<=10; i++){
    console.log(num+ "x" +i+ "=" +(num*i));
    
}

//task8 Reverse number
let n=12345;
let rev=0;
while(n>0){
    let d=n%10;
    rev=rev*10 + d;
    n=Math.floor(n/10);
      
}
 console.log("Reverse number:-"+rev);


 //task9 OTP system
 let corrrectOTP=1234;
 let attempt=0;
 let verified=false;
 while(attempt<3){
    let otp=Number(prompt("enter otp:-"));
    if(otp ===corrrectOTP){
        console.log("OTP verified");
        verified=true;
       break;
        
    }else{
        attempt++;
        console.log("Wrong Otp,try again");
        
    }
 }
 if(!verified){
    console.log("Account Blocked");
    
 }
 //Level4 Functions
 //task 10- salary calculator
 function calculateSalary(basicSalary, bonus){
    return basicSalary+ bonus;
 }
 let totalSalary=calculateSalary(30000,5000);
 console.log(totalSalary);
 

 //task11 calculator function
 function add(a,b){
    return a+b;
 }
 let a1=add(10,20);
 console.log(a1);

 function sub(a,b){
    return a-b;
 }
 let b1=sub(20,30);
 console.log(b1);
 
 function mul(a,b){
    return a*b ;

 }
 let mul1=mul(10,20);
 console.log(mul1);
 
 function div(a,b){
    return a/b;
 }
 let d1=div(10,20);
 console.log(d1);
 

 //task12 Eligibiloity function
 function checkEligibility(age2,height,weight){
    if(age2>=21){
        if(height>=170){
            if(weight>=70){
                console.log("Eligible");
                
            }else{
                console.log("Weight must be greater than or equal to 70");
                
            }          
        }else{
            console.log("Height must be gretaer than or equal to 170");
            
        }
    }else{
        console.log("age must be greater or equal to 21");
        
    }
 }
 checkEligibility(26,170,70)


 //Level5 Array practice
 //task 13 Shopping cart
 let cart=["Laptop", "Mouse", "Keyboard"];

 //1. Add monitor
 cart.push("Monitor");
 console.log(cart);

 cart.splice(1,1);
 console.log(cart);

 cart.unshift("Headset")
 console.log(cart);
 
 
 cart.pop();
 console.log(cart);

 console.log(cart);


 //task 14 find maximum
 let numbers=[10,45,23,89,12,67];

let numbers2= numbers.sort((a,b)=>{
   return b-a
});
 console.log(numbers[0]);
 

 //task 15 Remove duplicates
 let numbers1=[1,2,3,2,4,1,5];
 let res=numbers1.filter((v,i)=>{
    return numbers1.indexOf(v) === i;
 });
 console.log(res);

 
 //level6 Higher order function
 //task16 employee salary filter
 let employees=[{name:"arun",salary:30000},
    {name:"bala",salary:50000},
    {name:"kumar",salary:25000},
    {name:"ravi",salary:70000}];

   let empSalary= employees.filter((c,i,t)=>{
        return c.salary>=40000;
    });
    console.log(empSalary);
    

//task17 increase salary
let updatedEmployee=employees.map((c,i,t)=>{
    if(c.salary<40000){
        c.salary +=5000;
    }else{
        c.salary+=10000;
    }
    return c; 
});
console.log(updatedEmployee);


//task19 check employee or / and
let someEmployees=employees.some((c,i,t)=>{
    return c.salary>100000;
});
console.log(someEmployees); //false

let evryEmployee=employees.every((c,i,t)=>{
    return c.salary>=20000
})
console.log(evryEmployee);//true



//task20 Employee management mini program
let employees2 = [
 {
    id: 101,
    name: "Arun",
    department: "IT",
    salary: 35000
 },
{
    id: 102,
    name: "Bala",
    department: "HR",
    salary: 45000
 },
 {
    id: 103,
    name: "Kumar",
    department: "IT",
    salary: 60000
 }
];

//1.using foreach() print all employees
employees2.forEach((c,i,t)=>{
    console.log(c);
})

//2.Get IT employees using filetr()
let itEmployees=employees2.filter((c,i,t)=>{
    return c.department == "IT"
})
console.log(itEmployees);

//3.increase salary by 10% using map()
let increaseSalary= employees2.map((c,i,t)=>{
    return c.salary += c.salary*0.1
})
console.log(increaseSalary);


//4.find employee salary has 45000
let findEmployee=employees2.find((c,i,t)=>{
    return c.salary >=45000;
})
console.log(findEmployee);


//5.total salary using reduce()
let totSalary=employees2.reduce((acc,c,i,t)=>{
    return acc += c.salary
},0)
console.log(totSalary);

//6/check 50000 above using some()
let someEmployee=employees2.some((c,i,t)=>{
    return c.salary>=50000
})
console.log(someEmployee);


//7.check 20000 above using every()
let everyEmployee=employees2.every((c,i,t)=>{
    return c.salary>=20000
})
console.log(everyEmployee);

//8.sort employees from heighest to lowest
let sortEmployee=employees2.sort((a,b)=>{
    return b.salary-a.salary
})
console.log(sortEmployee);


//9.name and salary
employees2.forEach((c,i,t)=>{
    let {name,department}=c
    console.log(name,department);
     
})

//10 spread operator to create noe employee list
let newEmployee=[...employees2]
console.log(newEmployee);
