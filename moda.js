const list1 = [5, 3, 3, 3, 3, 3, 3, 3, 5, 7, 1, 3, 9, 4, 2, 4, 2, 7, 9, 2, 2, 2];

const list1Count = {};

list1.map(
    function(element) {
        if (list1Count[element]) {
            list1Count[element] += 1;
        } else {
            list1Count[element] = 1;
        }
    }
);

const list1Array = Object.entries(list1Count).sort(
    function(itemA, itemB) {
        return itemA[1] - itemB[1];
    }
);


const moda = list1Array[list1Array.length - 1];