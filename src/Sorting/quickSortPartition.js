import attachArray from "../DOM/attachArray"

function quickSortPartition(A, lo, hi) {
    let lowerThan = []
    let higherThan = []

    // Pivot pointer := last index of array
    let pivot = A[hi]
    // 'i' low pointer := first index of array
    let i = lo
    // For length of partition, compare pointer to pivot
    for(let j = lo; j < hi; j++) {
        if(A[j] < pivot) {
            lowerThan.push(j)

            // Swap A[i] with A[j]
            let a = A[i]
            let b = A[j]
            A[i] = b
            A[j] = a

            i += 1
        }
    }
    higherThan.push(hi)

    // Swap A[i] with A[hi]
    let c = A[i]
    let d = A[hi]
    A[hi] = c
    A[i] = d

    // Render new array
    attachArray("quick-sort-id", A, "quick-ul")

    // Define DOM element for visualiser
    let sortingList = document.getElementsByTagName("ul")[0]
    
    // Change lower than colour
    for(const number of lowerThan) {
        sortingList.getElementsByTagName("li")[number].style.color = "rgb(10, 132, 255)"
    }
    // Change higher than colour
    for(const number of higherThan) {
        sortingList.getElementsByTagName("li")[number].style.color = "rgb(255, 69, 58)"
    }
    // Change pivot colour
    sortingList.getElementsByTagName("li")[i].style.color = "rgb(255, 159, 10)"

    // Return last index
    return i
}
// quickSort(A, 0, length(A) - 1)

export default quickSortPartition