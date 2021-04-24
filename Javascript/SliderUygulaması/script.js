var models = [
    {
        name: 'BMW 418d',
        image: 'img/bmw.jpg',
        link: 'http://www.arabalar.com.tr/bmw/'
    },
    {
        name: 'Mazda CX-3',
        image: 'img/mazda.jpg',
        link: 'http://www.arabalar.com.tr/mazda/'
    },
    {
        name: 'Volvo S60',
        image: 'img/volvo.jpg',
        link: 'http://www.arabalar.com.tr/volvo/'
    },
    {
        name: 'Skoda Superb',
        image: 'img/skoda.jpg',
        link: 'http://www.arabalar.com.tr/skoda/'
    },
    {
        name: 'Honda Civic',
        image: 'img/honda.jpg',
        link: 'http://www.arabalar.com.tr/honda/'
    }
];
var index = 2;
var slaytCount = models.length;
var interval;

var settings ={
    duration :'2000',
    random: false
};

init(settings);

// Left Control
document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
});
// Right Control
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})

function init(settings){
    //setTimeout () 2sn sonra işletilir)
    var prev;
     // clearInterval ile durdurulmadığı zaman sürekli tekrar eder.
    interval = setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random()*slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);
    },settings.duration)
}

function showSlide(i) {
    index = i;
    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i > slaytCount-1) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}

