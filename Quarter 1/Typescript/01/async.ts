let err = false;


async function demo() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("C");
    if(!err)
    {
        resolve("Resolved!!!");
    }
    else
    {
        reject(new Error("Error"));
    }

    },5000)}
    )}

    console.log("A");
    demo().then((val)=> console.log(`M: ${val}`)).catch((reason) => console.log(`M: ${reason}`));
    console.log("B");


// console.log("A");
// setTimeout(()=>console.log("B"),5000);
// console.log("C");



/* function add(x: number, y: number) {
    return x + y;
    }
    
    function divide(x: number, y: number) {
    return x / y;
    }

    function expression(x: number, y: number) {
        return (x+1) / (y+1);
    }
    
    function compute(callBack: (x: number, y: number) => number, x: number, y: number) {
    return callBack(x, y);
    }
    
    console.log(compute(add, 10, 5)); // 15
    console.log(compute(divide, 10, 5)); // 2
    console.log(compute(expression, 19, 4)); // 2 */




/* setTimeout(() =>{
    console.log("One Second");
    setTimeout(() =>{
        console.log("Two Seconds");
        setTimeout(() =>{
            console.log("Three Seconds");
            setTimeout(() =>{
                console.log("Four Seconds");
                setTimeout(() =>{
                    console.log("Five Seconds");
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000) */