const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){ 
    const cats = cats.push(name);
}

function destructivelyPrependCat(name){
    const cats = cats.unshift(name);
}

function destructivelyRemoveFirstCat(){
    const cats = cats.shift();
}

function destructivelyRemoveLastCat(){
    const cats = cats.pop();
}

function appendCat(name){
    const newarray = [... cats, name];
}

function prependCat(name){
    const newarray = [... name, cats];
}

function removeLastCat(){
    
    const newarray = [... cats.pop()];
}

function removeFirstCat(){
    
    const newarray = [... cats.shift()];
}