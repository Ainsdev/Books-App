//steper changer
export function str(num: number, step: number) {
    if (step == num) {
        return 'step step-primary'
    } else {
        return 'step'
    }
}
//searching view
export const checkSearching = (searching: boolean) => {
    return searching ? "w-full  h-[400px] text-center flex justify-center items-center z-50 p-5" : "invisible h-2"
}
