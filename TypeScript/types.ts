let a: number = 5;
let b: string = "a";
let c: boolean = true;
let d: any;
let e: number[] = [1,2,3];
let f: Array<number> = [1,2,3];
let g: any[]= [1,'a',true];
let h: [string,number,boolean] = ['a',2,true]; //tuple

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {krediPayment=0,havalePayment=1,kapidaodeme=2,eftPayment=3};

let kredi = Payment.krediPayment;
let havale = Payment.havalePayment;
let eft = Payment.eftPayment;
let kapidaodeme = Payment.kapidaodeme;