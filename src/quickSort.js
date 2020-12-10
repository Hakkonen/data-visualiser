import quickSortPartition from "./quickSortPartition"

function quickSort(A, lo, hi) {
    if(lo < hi) {
        let p = quickSortPartition(A, lo, hi)
        quickSort(A, lo, p - 1)
        quickSort(A, p + 1, hi)
    }
}

export default quickSort