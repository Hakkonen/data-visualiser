import quickSortPartition from "./quickSortPartition"
import attachArray from "../DOM/attachArray"

function quickSort(A, lo, hi) {
    if(lo < hi) {
        setTimeout(() => {
            let p = quickSortPartition(A, lo, hi)
            quickSort(A, lo, p - 1)
            quickSort(A, p + 1, hi)
            // attachArray("quick-sort-id", A, "quick-ul")
        }, 1000);
    }
}

export default quickSort