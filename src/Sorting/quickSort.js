import quickSortPartition from "./quickSortPartition"
import attachArray from "../DOM/attachArray"

function quickSort(A, lo, hi) {
    if(lo < hi) {
        setTimeout(() => {
            let p = quickSortPartition(A, lo, hi)
            quickSort(A, lo, p - 1)
            quickSort(A, p + 1, hi)
        }, 3500);
    } else {
        // Renders final state
        let finished = false
        for(let n = 0; n < A.length - 1; n++) {
            if(A[n] < A[n+1]) {
                finished = true
            } else {
                finished = false
                break
            }
        }
        if(finished) {
            // Update HTML array
            attachArray("quick-sort-id", A, "quick-ul")
        }
    }
}

export default quickSort