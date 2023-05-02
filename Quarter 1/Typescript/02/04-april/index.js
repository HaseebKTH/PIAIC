// // import { test } from "node:test";
// // type Indian = { name: string, joothIndex: number,     [x:string]:any};
// // type Pakistani = { name: string, joothIndex: number, gooliBazi: number };
// // let indian1: Indian = {
// //     name: "Rahul",
// //     joothIndex: 1
// // };
// // let pakistani1: Pakistani = {
// //     name: "Allah Ditta",
// //     joothIndex: 1,
// //     gooliBazi: 1
// // };
// //console.log (indian1["test2"])
// // const indianArr: Indian[] = [{ name: 'chacha', joothIndex: 3 }, { name: 'pinki', joothIndex: 7 }];
// //  console.log(indian1);
// //  indian1 = pakistani1;
// //  pakistani1.name = "Luci"
// //  console.log(indian1);
// //  pakistani1.joothIndex = 5;
// // console.log(indian1);
// // indianArr.forEach((val) => {
// //     console.log(val);
// // });
// // pakistani1 = indian1
// // console.log(pakistani1);
// class Student {
//     protected _name:string;
//     protected _year:number;
//     protected _gpa:number;
//     constructor(_name:string, _year:number, _gpa:number){
//         this._name = _name;
//         this._year = _year;
//         this._gpa = _gpa;
//     }
//     ShowStudent(){
//         console.log(`${this._name} of session ${this._year} has GPA ${this._gpa}`);
//     }
//     set name(_name:string){
//         this._name = _name + " Singh";
//     }
//     get name():string{
//         return this._name;
//     }
// }
// class UniversityStudent extends Student{
//     private _university:string;
//     constructor(_name:string, _year:number, _gpa:number,_university:string){
//         super(_name,_year,_gpa);
//         this._university = _university;
//     }
//     ShowStudent(){
//         super.ShowStudent();
//         console.log(`${this._name} of session ${this._year} has GPA ${this._gpa} in University ${this._university}`);
//     }
// }
// // const majja = new Student("Majja", 2005, 2.6);
// // majja.ShowStudent();
// // majja.name = "Sajja"
// // console.log(majja.name);
// // majja.ShowStudent();
// const lullu = new UniversityStudent("Lullu", 2010, 3.7, "UET");
// lullu.ShowStudent();
// outerLoop: for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//       if (i === 2 && j === 2) {
//         continue outerLoop;
//       }
//       console.log(`i=${i}, j=${j}`);
//     }
//   }
// let eleArr = [0, 1, 2, 3, 4, 5];
// // console.log(eleArr.splice(1, 3, 6, 7));
// // console.log(eleArr);
// eleArr = eleArr.slice(1,3);
// console.log(eleArr);
// let myname: string | null;
// myname = null;
// console.log(myname);
// let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;
// if (yourName) {
//     console.log(yourName.toUpperCase()); // Ok: string
// }
// yourName.toUpperCase();//Error: Object is possibly 'undefined'.
// const abc = yourName?.toUpperCase();//OK
// console.log(abc);
// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2]; //Not allowed with const enums
// console.log(colorName);
const failingResponse = ["Not Found", 404];
export {};
