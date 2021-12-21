// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number=Number(prompt("enter a number"));

if (number % 2 === 0)
{
  alert("the number is a even number")
}
else
{
  alert("the number is  a odd number")
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1=Number(prompt("enter the first number"));
let num2=Number(prompt("enter the second number"));

if (num1>num2)
{
  alert("num1 is greater")
}
else if(num1==num2)
{
  alert("numbers are equal")
}
else
{
  alert("num2 is greater")
}

// 3. Convert the above code using`?` terniary operator

let num3=Number(prompt("enter the first number"));
let num4=Number(prompt("enter the second number"));

(num3>num4)? alert("num3 is greater"):alert("num4 is greater");

/*
. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName=(prompt(`what's your house name`));

if (houseName==="stark")
{
  alert("winter is coming")
}
else if (houseName==="lannister")
{
  alert("a lannister always pays his debt")
}
else
{
  alert("all men must die")
}




// 5. Convert the above code using`?` terniary operator
let houseeName=(prompt(`what's your house name`));

(houseeName==="stark")?(houseeName==="lannister")?alert("winter is coming"):alert("a lannister always pays his debt"):alert("all men must die");


// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let monthNumber=Number(prompt("enter the month"));

switch(monthNumber)
{
  case 1:if ((monthNumber % 2)===0)
  {
    alert("31 days")
    break; 
  }
  
  case 2:if ((monthNumber % 2)!==0)
  {
  alert("30 days")
  break;
  }
}


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let customerSalary= Number(prompt("write down your salary"));

if(customerSalary <=20000)
{
  alert(`your in-hand salary will be ${(customerSalary)-(customerSalary/10)}`)
}
else if(customerSalary <=40000)
{
  alert(`your in-hand salary will be ${(customerSalary)-(customerSalary/5)}`)
}
else
{
  alert(`your in-hand salary will be ${(customerSalary)-((customerSalary)*(30/100))}`)
}





//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let studentMarks=Number(prompt("Please enter your marks here..."));

if (studentMarks> 100)
{
  alert("marks cant be greater than 100")
}
else if(studentMarks>80 && studentMarks<100)
{
  alert("grade-A")
}
else if(studentMarks>50 && studentMarks<80)
{
  alert("grade-B")
}
else if(studentMarks>30 && studentMarks<50)
{
  alert("grade-C")
}
else{
  alert("grade-D")
}



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weatherOutside= prompt("what is the weather like outside")

if (weatherOutside==="sunny")
{
  alert("kindlt wear a t-shirt")
}
else if (weatherOutside==="rainy")
{
  alert("Don't forget to take your raincoat")
}
else if (weatherOutside==="hot")
{
  alert("get a hanky")
}
else if (weatherOutside==="freezing")
{
  alert("get your sweeter on")
}
else
{
  alert("not a valid input")
}
