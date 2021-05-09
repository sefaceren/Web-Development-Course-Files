var a = 5;
var b = "a";
var c = true;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, 'a', true];
var h = ['a', 2, true]; //tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["krediPayment"] = 0] = "krediPayment";
    Payment[Payment["havalePayment"] = 1] = "havalePayment";
    Payment[Payment["kapidaodeme"] = 2] = "kapidaodeme";
    Payment[Payment["eftPayment"] = 3] = "eftPayment";
})(Payment || (Payment = {}));
;
var kredi = Payment.krediPayment;
var havale = Payment.havalePayment;
var eft = Payment.eftPayment;
var kapidaodeme = Payment.kapidaodeme;
