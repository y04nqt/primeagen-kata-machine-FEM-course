export default function bubble_sort(arr: number[]): void {
    for(let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j+1]) {
                const tmp = arr[j]; // store first item for switch
                arr[j] = arr[j+1]; // set second item to first position
                arr[j+1] = tmp; // set first item to second position
            }
        }
    }
}