function reverseRStartedWords () {
    const initText = document.getElementById ('init').textContent;
    const stringArray = initText.split(' ');
    const changedArray = stringArray.map (el => {
        const firstLetter = el[0];
        if (firstLetter.toLocaleLowerCase() === 'r') {
            const isEndWithCharacter = /[!@#$%^&*(),.?":{}|<>]/.test (el[el.length-1])
            if (isEndWithCharacter) {
                const replacecharacter = el.split('');
                const last = replacecharacter[replacecharacter.length-1];
                replacecharacter.pop();
                return `<strong style="color:red">${replacecharacter.reverse().join('')+last}</strong>`;
            } else {
                return `<strong style="color:red">${el.split('').reverse().join('')}</strong>`;
            }
        } else {
            return el;
        }
    })
    const result = document.getElementById ('result');
    result.innerHTML = changedArray.join(' ');
}