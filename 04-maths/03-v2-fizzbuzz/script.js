for (let i = 1; i <= 100; i++) {

    let a = 3;
    let b = 5;

    let x = "";

    if (i % a == 0) { x += "Fizz"; }
    if (i % b == 0) { x += "Buzz"; }
    if (x == "") { x = i; }

    console.log(x);
}