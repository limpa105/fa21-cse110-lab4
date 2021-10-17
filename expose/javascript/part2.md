### 1) Line 12 will output 3, because i is declared using var, thus its scope is the entire function. The for loop ends when i reaches 3 as that is the length of the inputed price array, thus i will be 3 when it is retrieved by line 12.
### 2) Line 13 will output 150, because discountedPrices is declared using var thus its scope is the entire function, and it can be reasigned. discountedPrices is last reassigned at the last iteration of the foor loop when we have 300 * 0.5 = 150. Thus we output 150. 
### 3) Line 14 will output 150, as finalPrice is declared using var its scope is the entire function, and then it is last reasigned in the last iteration of the for loop. Where line 8 multiples 150 by 100 rounds to the nearest int and divides by 100 thus finalPrice is reasigned to 150. 
### 4) The function will return a list of [50, 100,150] as those are the final prices recorded in each iteration of the foor loop that are added to the  discounted list which is a function variable as it is declared using var.  
### 5) Line 12 will result in an error, can't find the variable, because i was declared inside the for loop using let and thus its scope is only the for loop and line 12 attempts to get its value outside the for loop.
### 6) Line 13 will result in an error  can't find the variable, because discountedPrices was declared inside the for loop using let and thus its scope is only the for loop and line 13 attempts to get its value outside the for loop
### 7) Line 14 will retun 150, as even though finalPrice is declared using let; it is declared in the function block and thus is a functional variable. As line 14 is inisde the function it is able to access finalPrice
### 8) The function will return a list of [50 , 100, 150] as although discounted is declared using let, it is declared in the function block and is in the same scope as the return statement. 
### 9) Line 11 return an error because it is trying to access i which was declared inside the for loop using let and thus its scope is only inside the for loop and line 11 is outside the for loop.
### 10) Line 12 will return 3, because length is declared as a constant in the function block and thus is in the same scope as line 12. 
### 11) The function will return a list of [50, 100, 150] as although discounted is created using const, pushing an item to discounted doesnt actually reasign discounted, but merely modifies its value. Further the return line is in the same scope as the discounted variable. 
### 12) A. student.name
###  B. student["Grad Year"]
### C. student.greeting()
### D. student['Favorite Teacher'].name
### E. student.courseLoad[0]
### 13) A. '32' because when adding strings and integers, integers map to their string representatios
### B. 1 because during subtraction stings map to their integers representation
### C. 3 because null mapped to its integer repsentation of a 0
### D. '3null because null mapped to its string representation of "null"
### E. 4 because true mapped to its integer representation of 1
### F. 0 because both null and false mapped to their integer resepentation which is zero for both. (as they cannot map to eachother types)
### G. '3undefiend' because undefined mapped to its string representation
### H. Nan because '3' and undefined both mapped to their integer representations and 3- Nan = Nan 
### 14) A. True ('2' mapped to an integer and 2>1)
### B. False ( Strings are comparred letter by letter and '2' > '1')
### C. True ( In an non strict equal sign '2' converts to an integer)
### D. False ( as === is a strict equal sign and thus returns false if the two variables are of different types )
### E. False ( true maps to its integer representation which is 1 != 2)
### F. True ( boolean(2) returns true as the function returns true for all even numbers and since the two variables are now of the same type and value the strict equal sign returns true )
### 15) '==' is a non strict equal signs that returns true if objects and does not care about their type, '===' is a strict equal sign that returns true if objects are the same value and type 
### 16) see file 
### 17) The code would return [2,4,6] because doSomething is passed as a callback to modifyArray and then is applied to each of the numbers in the input array prior to the number being pushed into the new array.
### 18) see file 
### 19) The function will print out 
#### 1
#### 4
#### 3
#### 2
### because setTimeout() is an asynchronous function that makes the functions take a certain time to execute thus 1 and 4 will be printed right away, then 3 since its time out is only 0 and then 2.
