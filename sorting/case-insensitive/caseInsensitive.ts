/** Sort array of strings in-place, case-insensitively. Returns array. */

function caseInsensitiveSort(arr: string[]): string[] {
  return arr.sort((a, b) => a.toUpperCase() === b.toUpperCase()
    ? 0 : (a.toUpperCase() < b.toUpperCase() ? -1 : 1));
}

export { caseInsensitiveSort };