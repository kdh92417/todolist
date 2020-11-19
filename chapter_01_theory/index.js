// Javascript Theory 

const abc = 'Hi Adam';
const tr = true;
const fa = false;

const fl = 42.12;


console.log(fl);

/*
엇떻게 우리가 가진 데이터 타입을 정렬할까?

- array
- objects

*/

something = 'something';
const dayOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', something, 21, true ]; // camelCase

console.log(dayOfWeek)


// 1.10 Organizing Data with Objects

const adamInfo = {
    name : 'Adam',
    age  : 29,
    gender : 'male',
    isHandsome : true,

    // object안에 list를 섞을 수 있다.
    favMovies : ['Along the gods', 'LOTR', 'Oldboy']

};

console.log(adamInfo)

// 객체안에 키값을 이용하여 밸류값을 변경
adamInfo.gender = 'Female';
console.log(adamInfo.gender)

/*
데이터를 정렬하는 방법에는 2가지가 있다.
1. array
2. object 
*/


