import generateArray from "./generateArray"
import attachArray from "./DOM/attachArray"
import quickSort from "./Sorting/quickSort"

function main() {
    console.log("Main Start")

    // VARIABLE ARRAYS
    // Quick Sort
    let quickSortArray = []

    // EVENT LISTENERS
    // Quick Sort
    document.getElementById("quick-sort-sort-button").addEventListener("click", () => {
        quickSort(quickSortArray, 0, (quickSortArray.length)-1)
    })

    document.getElementById("quick-sort-reset-button").addEventListener("click", () => {
        quickSortArray = generateArray(10)
        console.log("Unsorted Numbers: ", quickSortArray)
        attachArray("quick-sort-id", quickSortArray)
    })

}

main()