// Helpers
function numberIsEven(number) {
    return (number % 2 === 0);
}

// Calcualadora de medianas
function medianCountrySalary(list) {
    const middle = parseInt(list.length / 2);

    if (numberIsEven(list.length)) {
        const middle1 = Number(list[middle - 1]);
        const middle2 = Number(list[middle]);
        return (middle1 + middle2) / 2;
    } else return list[middle];
}

// Obteniendo y ordenando los datos
const colombianSalaries = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const colombianSalariesSorted = colombianSalaries.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const colombianGeneralMedian = medianCountrySalary(colombianSalariesSorted);

const spliceStar = (colombianSalariesSorted.length * 90) / 100;
const spliceSize = colombianSalariesSorted.length - spliceStar;
const top10ColombianSalaries = colombianSalariesSorted.splice(spliceStar, spliceSize);


const colombianTop10Median = medianCountrySalary(top10ColombianSalaries);


console.log('Mediana general en colombia: ' + colombianGeneralMedian);
console.log('Mediana del top 10% en colombia: ' + colombianTop10Median);