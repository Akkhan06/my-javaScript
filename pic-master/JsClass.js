class Father{
    constructor(){
        this.fathers = 'Habibur rahman';
    }
}

class Friend extends Father{
    constructor(id, name){
        super();
        this.id = id;
        this.name = name;
    }
}

const NameOf = new Friend(23, "afsar khan");
const SecondName = new Friend(24, 'akram khan');

console.log(NameOf, SecondName);
