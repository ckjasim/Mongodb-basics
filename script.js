// let x=123
// y=x.toString()
// console.log(y[1]);

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//     let y=x.toString()
//     for(i=0;i<=y.length/2;i++){
//         for(j=y.length-1;j>=y.length/2;j--){
//             if(y[i]==y[j]){
//                 return true
//             }else if(y[i]=="0"){
//                 return true
//             }else{
//                 return false
//             }
//         }
//     }
// };

//---------------DISTINCT----------

// studb9>  db.stud09.distinct("degree")
// [ 'BA', 'BCA', 'BCOM', 'BSC', 'BTECH' ]

//--------------$MATCH--------

// db.pers.aggregate([{$match:{isActive:false}}])

//persons> db.pers.aggregate([{$match:{tags:{$size:3}}}])

//------------$GROUP--------

// persons> db.pers.aggregate([{$group:{_id:"age"}}]) //comes all ages ,only value no keys

// persons> db.pers.aggregate([{$group:{_id:{age:"$age",gender:"$gender"}}}]) // comes in a key value pair 

//---------Nested Group---------

// persons> db.pers.aggregate([{$group:{_id:"$company.location.country"}}])

//----------stages---------

// persons> db.pers.aggregate([{$match:{gender:"female"}},{$group:{_id:{age:"$age",eyeColor:"$eyeColor",gender:"$gender"}}}])

// ------------------Count------

// persons> db.pers.aggregate([{$group:{_id:"$company.location.country"}},{$count:"ennam"}])

//----------------Sort-----

// persons> db.pers.aggregate([{$sort:{age:1,name:1}}])

// persons> db.pers.aggregate([{$group:{_id:{eyeColor:"$eyeColor",favouriteFruit:"$favoriteFruit"}}},{$sort:{"_id.eyeColor":1,"favoriteFruit":-1}}

//--------------Project------------

// persons> db.pers.aggregate([{$project:{name:1,age:1}}])   //only name and age

//persons> db.pers.aggregate([{$project:{name:1,age:0}}])  //error cant exclude like this

//persons> db.pers.aggregate([{$project:{name:0,age:0}}]) //name and age exclude others others show

// persons> db.pers.aggregate([{$project:{name:1,vayas:"$age",_id:0}}]) //  show only name and rename age to vayas

// persons> db.pers.aggregate([{$unwind:"$tags"},{$project:{name:1,vayas:"$age",_id:0,tags:1}}])

// persons> db.pers.aggregate([{$unwind:"$tags"},{$group:{_id:"$tags"}}])

//---------------ACCUMULATORS-------------

//-----------------SUM------------------

// persons> db.pers.aggregate([{$group:{_id:"$age",count:{$sum:1}}}])

//-----------------sum unwind group----------------

// persons> db.pers.aggregate([{$unwind:"$tags"},{$group:{_id:"$tags",count:{$sum:1}}}])

//--------------------AVERAGE-----------------

//db.pers.aggregate([{$group:{_id:"$eyeColor",avgAge:{$avg:"$age"}}}])

//---------------------UNARY OPERATORS--------------

//---------------------$TYPE-------------------

//db.pers.aggregate([{$project:{name:1,typeAge:{$type:"$age"},typeeye:{$type:"$eyeColor"}}}])

//----------------$OUT STAGE--------------

//db.pers.aggregate([{$project:{name:1,typeAge:{$type:"$age"},typeeye:{$type:"$eyeColor"}}},{$out:"typecollection"}])  //add a new collection named typecollection

//------------MAX MIN-----------------
// bookdb> db.book.aggregate([ { $group: {_id:null, priceMax: { $max:"$price" },priceMin:{$min:"$price"} } }] )
// [ { _id: null, priceMax: 150, priceMin: 80 } ]
