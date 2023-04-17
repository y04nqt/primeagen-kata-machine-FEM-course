export default function bs_list(haystack: number[], needle: number): boolean {
    // assume heystack is ordered, get lo and hi to find midpoint + 1
    let loPoint = 0;
    let hiPoint = haystack.length;
    do {
        const midpoint = Math.floor((hiPoint + loPoint)/2);
        const v = haystack[midpoint];
        if (v === needle) {
            return true
        } else if (v > needle) {
            hiPoint = midpoint;
        } else {
            loPoint = midpoint + 1;
        }

    } while (loPoint < hiPoint)

    return false;
}