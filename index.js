// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat (name) {
   cats.push("Ralph") 
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")   
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function appendCat(cat) {
    const newCats = [...cats, cat]; 
    return newCats;
  }

  function prependCat(name){
  const newarray = ["Arnold", ...cats]
  return newarray
  }

  function removeLastCat() {
    let newcat = [...cats]
    newcat.pop()
    return newcat
    }

    function removeFirstCat() {
        let newcat = [...cats]
        newcat.shift()
        return newcat
        }