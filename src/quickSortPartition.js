function quickSortPartition(A, lo, hi) {
    // Pivot pointer := last index of array
    let pivot = A[hi]
    // 'i' low pointer := first index of array
    let i = lo
    // For length of partition, compare pointer to pivot
    for(let j = lo; j < hi; j++) {
        if(A[j] < pivot) {
            // Swap A[i] with A[j]
            let a = A[i]
            let b = A[j]
            A[i] = b
            A[j] = a
            
            i += 1
        }
    }
    // Swap A[i] with A[hi]
    let c = A[i]
    let d = A[hi]
    A[hi] = c
    A[i] = d

    // Return last index
    return i
}
// quickSort(A, 0, length(A) - 1)

export default quickSortPartition