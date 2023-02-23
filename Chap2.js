//

/*

// Expressions and Statements

Expression = fragment of code that produces a values
Statement = expression;

// Bindings

Binding = variable = hold value
A program can access only the values that it still has a reference to

// Binding names
// The Environment
// Functions
// Return Values
// Control Flow ->
                              ->
// Conditional Execution -> X     ->  if, else if
                              ->
// Loops
while and do loops
    do always executes once
for

// Breaking Out of a Loop
break, continue

// Dispatching on a Value with switch
The program will start executing at the label that corresponds to
the value that switch was given
*/

//let caught = 5 * 5; // let allows binding
//console.log(caught * caught);

//let mood = "light";
//console.log(mood);
// -> light
//mood = "dark";
//console.log(mood);
// -> dark

//var name = "James";
//const greeting = "Hello ";

/*
for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
        if (i > j)
            process.stdout.write("#");
    }
    if (i > 0)
        console.log(" ");
}
*/

/*
for (let i = ""; i.length < 7; i += "#") {
    if (i.length > 0)
        console.log(i);
}
*/

/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
*/



for (let i = 0; i < 7; i++) {
    if (i > 0)
        console.log();

    for (let j = 0; j < 7; j++) {
        if ((i + j) % 2 == 0)
            process.stdout.write(" ");
        else
            process.stdout.write("#");
    }
}

