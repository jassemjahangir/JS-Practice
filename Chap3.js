/*
Chapter 3 Functions:

Structure larger programs, reduce repetition, associate names with subprograms, isolate subprograms

// Defining a Function
A function is created with an expression that starts with the keyword function.

const makeNoise = function() {
console.log("Pling!");
};
makeNoise();
// -> Pling!
Functions can return a value
If return value not specified then undefined passed
parameters given initial values from caller


//Bindings and Scopes

when multiple bindings have the same name—in that case, code can see only the innermost one

//Nested Scope

*/

/*
const power = function (base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++)
        result = result * base;
    return result;
}

console.log(power(2, 0));
*/

/*

let x = 10;
if (true) {
let y = 20;
var z = 30;
console.log(x + y + z);
// -> 60
}
// y is not visible here
console.log(x + z);
// -> 40

Local scope can see local scope
All scopes can see global scope
Lexical scoping

*/

/*
const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(2);
*/


// Function as values
/*

What we have seen so far? A function value can do all the things that
other values can do—you can use it in arbitrary expressions, not just call it.



function square(x) { // declaration notation
    return x * x;
}

They are conceptually moved to the top of their
scope and can be used by all the code in that scope
*/

// Arrow Functions

/*



*/

/*
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 3));

const square1 = (x) => { return x * x; };
const square2 = x => x * x;
*/

// The Call Stack

/*

A function has to jump back to the place that called it when it
returns, the computer must remember the context from which the call happened

The place where the computer stores this context is the call stack

Every time a function is called, the current context is stored on top of this stack.
When a function returns, it removes the top context from the stack and uses
that context to continue execution.

*/

/*

JavaScript is extremely broad-minded about the number of arguments
you pass to a function. If you pass too many, the extra ones are ignored.
If you pass too few, the missing parameters get assigned the value undefined.

If you write an = operator after a parameter, followed by an expression,
the value of that expression will replace the argument when it is not given.

*/

// Closure -> that local bindings are created anew for every call, and different calls can’t
//trample on one another’s local bindings.

/*
function multiplier(factor) {
    return number => number * factor;
    }
    let twice = multiplier(2); // multiplier is called and creates an environment in which its factor parameter is bound to 2.
    // function value it returns, which is stored in twice, remembers this environment
    console.log(twice(5)); // So when that is called, it multiplies its argument by 2.
    // -> 10
*/

// Recursion

/*
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(24));
    // -> (((1 * 3) + 5) * 3)
*/

/*
find(1, "1")
    find(6, "(1 + 5)")
        find(11, "((1 + 5) + 5)")
            find(16, "(((1 + 5) + 5) + 5)")
                too big
            find(33, "(((1 + 5) + 5) * 3)")
                too big
        find(18, "((1 + 5) * 3)")
            too big
    find(3, "(1 * 3)")
        find(8, "((1 * 3) + 5)")
            find(13, "(((1 * 3) + 5) + 5)")
                found!
*/

// Growing function
/*

Use functions to reduce repitition
Functions should have a single concept

*/

// Functions and Side Effects

/*

Functions can return a value
Functions can be called for side effects
Functions can do both

A pure function is a specific kind of value-producing function that not
only has no side effects but also doesn’t rely on side effects from other
code—for example, it doesn’t read global bindings whose value might
change.

*/