"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let err = false;
function demo() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("C");
                if (!err) {
                    resolve("Resolved!!!");
                }
                else {
                    reject(new Error("Error"));
                }
            }, 5000);
        });
    });
}
console.log("A");
demo().then((val) => console.log(`M: ${val}`)).catch((reason) => console.log(`M: ${reason}`));
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
