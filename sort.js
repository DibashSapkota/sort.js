function DESC(i, ii) { // DESC
  return (i[key] > ii[key]) ? -1 : ((i[key] < ii[key]) ? 1 : 0);
}

function ASC(i, ii) { // ASC
  return (i[key] > ii[key]) ? 1 : ((i[key] < ii[key]) ? -1 : 0);
}



function StartSort(data, myArray, order) {
  // data - row for sorting, array - array fo sorting, order - order of sorting
  key = data;
  arr = myArray;
  if (order.toUpperCase() == "DESC") {
    sortedArray = arr.sort(DESC);
  } else {
    sortedArray = arr.sort(ASC);
  }
  return sortedArray;
}

//Example of using 
//Note:Asc is optional

//Example-1 Array of objcts
/*
var youreArray= [
 {id:'3',name:'Adam',city:'Concord',State:'CA'},
 {id:'1',name:'John',city:'Concord',State:'CA'},
 {id:'2',name:'Smith',city:'San Fransisco',State:'CA'}, 
 {id:'1',name:'John',city:'Denver',State:'CO'}
]
sortedData=StartSort (youreArray, "name"); // return sorted array asc
sortedData=StartSort (youreArray, "name", 'DESC'); // return sorted array

*/

//Eample 2 simple array of array
/*
var youreArray = [ // axample Array
['name 1', 14, 10, 4],
['name 2', 50, 20, 3],
['name 7', 10, 30, 2],
['name 9', 61, 40, 1],
];

sortedData=StartSort (youreArray, 0, 'DESC'); // return sorted array desc
sortedData=StartSort (youreArray, 0); // return sorted array asc
*/
