type obtainKey = <x, l extends keyof x>(obj: x, key: l) => x[l];

const getkey: obtainKey = (obj, key) => obj[key];

const student = {
    name: 'Peter',
    nickname: ['Boca de lixo', 'Pete'],
    age: 15,
};

const defineStudent = getkey(student, 'name');
console.log(defineStudent, student.age);