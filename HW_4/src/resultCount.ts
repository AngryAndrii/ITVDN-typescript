export function countResult(firstNum: number, secondNum: number): number {
    const result: number = firstNum + secondNum;
    const stringRes: string = result.toString();
    document.body.innerHTML = stringRes;
    return result;
}