import generateArray from "./generateArray"
import attachArray from "./attachArray"
import quickSort from "./quickSort"

function main() {
    console.log("Main Start")

    // Event listeners
    document.getElementById("quick-sort-sort-button").addEventListener("click", () => {
        console.log("Hello jello")
    })

    document.getElementById("quick-sort-reset-button").addEventListener("click", () => {
        quickSortBox()
    })

    function quickSortBox() {
        // Generate random array
        let quickSortBoxArray = generateArray()
        console.log("Unsorted Numbers: ", quickSortBoxArray)

        // Attach to box
        attachArray("quick-sort-id", quickSortBoxArray)

        // Sort
        quickSort(quickSortBoxArray, 0, (quickSortBoxArray.length)-1)
        console.log(quickSortBoxArray)
    }
    quickSortBox()

}

main()