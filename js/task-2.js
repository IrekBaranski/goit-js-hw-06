console.log("\n<task-2>");

//class Storage - tworzy obiety item do zarządzania magazynem towarów. 
//jeden argument - początkowa tablica towarów, zapisywana do utworzonego obiektu w prywatnej właściwości #items.
//+ getItems() — zwraca tablicę bieżących towarów w prywatnej właściwości items.
//+ addItem(newItem) — przyjmuje nowy towar newItem i dodaje go do tablicy towarów w prywatnej właściwości items obiektu.
// addItem poprzez .push(newItem)
//+ removeItem(itemToRemove) — usuwa itemToRemove z tablicy towarów #items obiektu. 
//  splice(index, ileUsunąć,...) : .splice(indexOf(itemToRemove),1)

class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
    
  }

  removeItem(itemToRemove) {
    this.#items.splice(this.#items.indexOf(itemToRemove), 1);
  }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); //["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
storage.removeItem("foo");