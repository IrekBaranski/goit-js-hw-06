console.log("\n<task-3>");
//Konstruktor ciągów 
//klasa StringBuilder; 
//construktor z parametr #initialValue, construktor(initialValue) zapis do #value,
// getValue() — zwraca aktualną wartość #value.
// padEnd(str) — otrzymuje parametr str (ciąg znaków) i dodaje go na końcu wartości #value, który wywołuje tę metodę.
// padStart(str) — otrzymuje parametr str (ciąg znaków) i dodaje go na początku wartości #value obiektu, który wywołuje tę metodę.
// padBoth(str) — otrzymuje parametr str (ciąg znaków) i dodaje go na początku i na końcu wartości prywatnej właściwości value obiektu, który wywołuje tę metodę.
//


class StringBuilder{
  #value

    constructor (initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  
  padEnd(str) {
    this.#value = this.#value + str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
