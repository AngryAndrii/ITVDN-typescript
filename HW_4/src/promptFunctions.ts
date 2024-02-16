const getFirstNum = (): number => {
    const inputFirstNum: number = +prompt('введіть перше число')
    return inputFirstNum;
}

const getSecondNum = (): number => {
    const inputSecondNum: number = +prompt('введіть друге число')
    return inputSecondNum;
}

export { getFirstNum, getSecondNum };