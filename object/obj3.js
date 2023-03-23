// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }
// for (i in salaries) {   
//     console.log(i);
// }


// =================================================================

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let allSalaries = 0;

for (let i in salaries) {
    allSalaries += salaries[i];
}

console.log(allSalaries);


