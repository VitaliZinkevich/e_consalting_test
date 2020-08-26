// Было:  1 2 7 5 6 8 4
// Стало:  7 2 5 1 4 6 8

const ints = [1, 2, 7, 5, 6, 8, 4];

console.log('Результат', sortEvenOddWithSavePlace (ints));

function sortEvenOddWithSavePlace (intArray) {
    const even = intArray.filter (el => el%2 === 0);
    even.sort ((a, b )=> a-b);
    const odd = intArray.filter (el => el%2 !== 0)
    odd.sort ((a, b )=> b-a);
    const result = intArray.map (el => {
         return el%2 === 0 ? even.shift() : odd.shift();
    });
    return result;
}
