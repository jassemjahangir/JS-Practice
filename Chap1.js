// comment

/*

Summary

00001101 <-- binary number
8+4+1=13

values can be number, text, functions, ...

314 % 100 = 14

+,-,*,/ (binary operators)

Special Numbers -> Infinitiy, -Infinity, NaN (not a number)

String
Enter -> \n escaping the charachter
"This is the first line\nAnd this is the second"

unary operators
console.log(typeof 4.5)
-> ! number
console.log(typeof "x")
-> ! string

Boolean

Logical operator -> &&, ||, !

||, &&, >, * (least to most in terms of precedence -->)


ternary operator
console.log(true ? 1 : 2);
// --> 1
console.log(false ? 1 : 2);
// --> 2

// condition ? exprIfTrue : exprIfFalse

Empty values -> null, undefined

// Automatic type conversion

When an operator is applied to the “wrong” type of value, JavaScript will
quietly convert that value to the type it needs, using a set of rules that often
aren’t what you want or expect

// Short-Circuiting of Logical Operators

|| will convert left side to boolean and can return original left (if true) or original right
console.log(null || "user")
// -> user
console.log("Agnes" || "user")
// -> Agnes

0, NaN, and the empty string ("") count as false

&& will convert left side to boolean and can return original left (if false) or original right

the part to their right is evaluated only when necessary

*/