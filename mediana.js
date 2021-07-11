const list1 = [
    100,
    11000,
    600,
    8000,
    9000,
    40000000
];

list1.sort(function(a, b) {
    return a - b;
});

const middleList1 = parseInt(list1.length / 2);
let median;

function isEvenNumber(number) {
    if (number % 2 === 0) return true;
    else return false;
}

function getAverageWithReduce(list) {
    const sumList = list.reduce(
        function(accumulatedValue = 0, newValue) {
            return accumulatedValue + newValue;
        }
    );
    return sumList / list.length;
}

if (isEvenNumber(list1.length)) {
    const item1 = list1[middleList1 - 1];
    const item2 = list1[middleList1];
    median = getAverageWithReduce([item1, item2]);
} else {
    median = list1[middleList1];
}