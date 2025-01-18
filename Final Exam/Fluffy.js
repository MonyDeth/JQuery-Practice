// What is the output

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`Hi, Im ${this.name}`);
}

const cat = new Animal('Fluffy');
cat.speak();