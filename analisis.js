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

function numberIsEven(number) {
    return (number % 2 === 0);
}

function medianCountrySalary(list) {
    const middle = parseInt(list.length / 2);

    if (numberIsEven(list.length)) {
        const middle1 = Number(list[middle - 1]);
        const middle2 = Number(list[middle]);
        return (middle1 + middle2) / 2;
    } else return list[middle];
}

console.log(
    'La mediana es: ' +
    medianCountrySalary(colombianSalariesSorted)
);