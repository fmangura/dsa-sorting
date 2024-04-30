function bubbleSort(arr) {
    for (i=0; i < arr.length-1; i++){
        for (j=0; j < arr.length-1; j++){
            let temp = arr[j];
            if (arr[j] > arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;