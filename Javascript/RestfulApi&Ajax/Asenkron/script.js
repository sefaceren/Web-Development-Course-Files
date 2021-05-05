const first = ()=>{
    console.log('first');
    second();

}

const second = ()=>{
    // sıraya alınır 2 sn sonra işletilir.
    setTimeout(()=>{
        console.log('secondt');
    },2000);
    console.log('second');
    third();
}

const third = ()=>{
    console.log('third');
}

first();