function mergeSortRecursion(unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    const midPoint = Math.floor(unsortedArray.length / 2);
    const leftArr = unsortedArray.slice(0, midPoint);
    const rightArr = unsortedArray.slice(midPoint);

    return mergeTwoArrays(mergeSortRecursion(leftArr), mergeSortRecursion(rightArr));
}
function mergeTwoArrays(leftArr, rightArr) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArray.push(leftArr[leftIndex]);
            leftIndex++; 
        } 
        else {
            resultArray.push(rightArr[rightIndex]);
            rightIndex++; 
        }
    }
    if (leftArr[leftIndex]) {
        resultArray.push(...leftArr.slice(leftIndex));
    }
    else {
        resultArray.push(...rightArr.slice(rightIndex));
    }
    return resultArray;
}
