let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth ;
    this.job = job;
}

Person.prototype.getName = function(){
    return this.name;
}


let emel = new Person ('emel',1989,'teacher');

console.log(emel);
console.log(emel.getName());