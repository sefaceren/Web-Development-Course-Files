/*var p = new Promise(function (resolve, reject) {
    if (false) {
        resolve('success');
    } else {
        reject('failed');
    }
});

p.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})
*/

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve(5);
//     },1000);
// }).then(function(number){
//     console.log(number);
//     return number*number;
// }).then(function(number){
//     console.log(number);
//     return number*number;
// }).then(function(number){
//     console.log(number);
// })

const isMomHappy = false;

const willGetNewPhone = new Promise((resolve,reject)=>{
    if(isMomHappy){
        const phone = {
            name:"IPhone 8",
            price:"4000",
            color: "silver"
        }
        resolve(phone);
    }else{
        const error = new Error('mom is not happy');
        reject(error);
    }
})

const showToFriends = phone => {
    const message = "Hi friends, this is my new Phone " + phone.name ;
    return Promise.resolve(message);
}

const askMom = ()=>{
    willGetNewPhone
            .then(showToFriends)
            .then(message => console.log(message))
            .catch(error=>{
                console.log(error);
            })
}

askMom();