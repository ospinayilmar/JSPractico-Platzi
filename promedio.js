const list1 = [
    100,
    200,
    300,
    500
];

function getAverageWithFor(list) {
    let sumList = 0;
    for (let i = 0; i < list.length; i++) {
        sumList = sumList + list[i];
    }
    return sumList / list.length;
}

function getAverageWithReduce(list) {
    const sumList = list.reduce(
        function(accumulatedValue = 0, newValue) {
            return accumulatedValue + newValue;
        }
    );
    return sumList / list.length;
}