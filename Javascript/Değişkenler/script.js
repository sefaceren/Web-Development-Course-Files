// var age;
// console.log(age);

// age=20;
// console.log(age);

// var fullname='Sefa';
// console.log(fullname);

// fullname='safi';
// console.log(fullname);

// // Değişken Tanımlama Kuralları

// // Sayısal ifade ile başlayamaz.
// // var 1sefa; gibi
// //var yas1;
// var _yas2;
// var $yas3;

// //komut isimleri ile tanımlama yapılammaz

// //var for;

// //birden fazla kelime içeriyorsa

// var ad='sefa';
// var soyad='ceren';
// var ad_soyad='sefa ceren';
// var adSoyad='sefa ceren';

// // case sensitive (büyük küçük harf duyarlı)

// var firstName='sefa';
// var FirstName='sefaa';

// console.log(firstName);
// console.log(FirstName);

// // var , let , const ( var ile let arasındaki fark scope ile ilgilidir.)

// let city='Kocaeli';
// console.log(city);

// const email='abc@gmail.com'; // const ile sabit tanımlıyoruz. daha sonra bu değerin içeriği değiştirilemez.
// console.log(email);

// email='bcd@gmail.com';
// console.log(email);

// DEĞİŞKEN TİPLERİ

//Primitive Types

    //String

//     let firstName='Sefa';
//     console.log(typeof firstName);

//     //Number
    
//     let age=20;
//     let money=100.5;

//     console.log(typeof money);

//     //Boolean

//     let isActive= true;
//     console.log(typeof isActive);

//     //null
//     let job=null; //null boşluğu temsil eder herhangi bir değer ifade etmez.
//     console.log(typeof job);
//     //undefined
//     let car;
//     console.log(typeof car);

// //Reference Types - Objects

// //Array
// let names=['Ali','Ahmet','Can'];
// //Object
// let adress= {
//     city:'Kocaeli',
//     country:'Türkiye'
// }
// //Function

// var calculateAge = function(){
//     return 0;
// };

// console.log(typeof calculateAge);

//TÜR DÖNÜŞÜMÜ

// let num1= Number('5');
// let num2= Number('10');


let val;

//number to String
val = String(10);
//Bool to String

val = String(true);

//date to string
val = String(new Date());

//array to string
val = String([1,2,3,4]);

//toString()

val= (10).toString();
val = (false).toString();

//String to Number

val = Number('10');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('a');
val = Number([1,2,3,4]);

//parseInt
val = parseInt('10');
val = parseInt('10.5');
val = parseFloat('10.5');
//parseFloat


console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));








