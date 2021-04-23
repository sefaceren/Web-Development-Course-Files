/*

1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışalım.

** puanlama yapın.
**kullanıcı kaç kerede bileceğini belirtebilsin.

*/
var hak,can;
var tahmin,sayac=0;
let sayi = Math.floor((Math.random()*10)+1);
can = Number(prompt('Kaç Kerede Bileceksiniz ?'));
hak = can;
console.log(sayi);

while(hak>0){
    hak--;
    sayac++;
    tahmin= Number(prompt('bir sayi giriniz'));

    if(sayi == tahmin){
        console.log(`Tebrikler ${sayac} defada bildiniz.`);
        console.log(`puan : ${100 - (100/can)*(sayac-1)}`)
        break;
    }else if (sayi > tahmin){
        console.log('yukarı');
    }else{
        console.log('aşağı');
    }
    console.log(`Kalan hakkınız : ${hak}`)
    if(hak==0){
        console.log('hakkınız bitti');
    }
}