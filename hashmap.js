class HashMap {

  constructor() {
    this.map = {};
}
    
    hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }

    set(key, value) {
      this.map[key] = value;
    }

    get(key) {
      return this.map[key];
    }

    has(key) {
      return key in this.map;
    }

    remove(key) {
      if (this.has(key)) {
        delete this.map[key];
        return true;
      }
      return false;
    }

    length() {
      return Object.keys(this.map).length;
    }

    clear() {
      this.map = {};
    }

    keys() {
      return Object.keys(this.map);
    }

    values() {
      return Object.values(this.map);
    }

    entries() {
      return Object.entries(this.map);
    }

}

const myMap = new HashMap();
myMap.set('a', 1);
myMap.set('b', 2);

console.log(myMap.entries()); // Output: [['a', 1], ['b', 2]]