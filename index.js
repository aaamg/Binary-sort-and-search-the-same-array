// Unsorted: 
var array = [99,3,6,87,9,45,35,879]
//console.log(array)

var binarySort = (array) => {
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      while(array[j] < array[j - 1]){
        var temp = array[j - 1]
        array[j - 1] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}

binarySort(array)

// Sorted:
// var array = [
//    3,  6,  9,  35,
//   45, 87, 99, 879
// ]
//console.log(array)

var binarySearch = (data, value) => {
  var right = array.length - 1;
  var left = 0
  while(left <= right){
    var middle = ((left + right) / 2) | 0

    if(value < data[middle]){
      right = middle - 1
    } else if (value > data[middle]){
      left = middle + 1
    } else {
      return middle
    }
  }
}

binarySearch(array, 9)