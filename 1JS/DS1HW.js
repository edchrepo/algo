class RandomizedSet {
    constructor() {
        this.map = new Map();
        this.list = [];
    }

    insert(val) {
        if (this.map.has(val)) {
            return false;
        }
        this.list.push(val);
        this.map.set(val, this.list.length - 1);
        return true;
    }

    remove(val) {
        if (!this.map.has(val)) {
            return false;
        }
        let index = this.map.get(val);
        let lastElement = this.list[this.list.length - 1];
        this.list[index] = lastElement;
        this.map.set(lastElement, index);
        this.list.pop();
        this.map.delete(val);
        return true;
    }

    getRandom() {
        let randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }
}

// Create an instance of RandomizedSet
let randomSet = new RandomizedSet();

// Insert elements
console.log('Insert 1:', randomSet.insert(1));  // Should return true (element added)
console.log('Insert 2:', randomSet.insert(2));  // Should return true (element added)
console.log('Insert 3:', randomSet.insert(3));  // Should return true (element added)
console.log('Insert 3 again:', randomSet.insert(3)); // Should return false (element already present)

// Remove elements
console.log('Remove 2:', randomSet.remove(2));  // Should return true (element removed)
console.log('Remove 2 again:', randomSet.remove(2)); // Should return false (element not found)

// Get a random element
console.log('Get Random:', randomSet.getRandom()); // Should return either 1 or 3

// Check the internal state
console.log('Current set:', randomSet.list);
console.log('Map state:', randomSet.map);
