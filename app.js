// console.log(__dirname);
// let i =0;
// setInterval(()=>{
//    console.log(i++,'Hello World');
// },1000);


// const names = require('./4-names');
// const sayHi = require('./5-utils');
// const data = require('./6-alternative-flavor');
// require('./7-mind-grenade');
// console.log(data);
// console.log(names);

// sayHi('Susan');
// sayHi(john);
// sayHi(doe);

// sayHi('Susan');
//  sayHi(names.john);
//  sayHi(names.doe);

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);