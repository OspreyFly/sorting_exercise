function merge(arr1, arr2) {
    const result = [];
    while (arr1.length || arr2.length) {
        if (!arr1.length) {
            result.push(...arr2);
            break;
        } else if (!arr2.length) {
            result.push(...arr1);
            break;
        } else if (arr1[0] <= arr2[0]) {
            result.push(arr1[0]);
            arr1 = arr1.slice(1); 
        } else {
            result.push(arr2[0]);
            arr2 = arr2.slice(1); 
        }
    }
    return result;
}




function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}


module.exports = { merge, mergeSort};