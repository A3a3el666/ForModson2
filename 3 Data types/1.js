function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for (let key in obj1) {
        if (!obj2.hasOwnProperty(key)) {
            return false;
        }

        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, c: 4 };

console.log(compareObjects(obj1, obj2)); 
console.log(compareObjects(obj1, obj3)); 
