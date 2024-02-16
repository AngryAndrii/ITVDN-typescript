import { getFirstNum, getSecondNum } from "./promptFunctions.js";
import { countResult } from "./resultCount.js";


const firstNum = getFirstNum();
const secondNum = getSecondNum();

countResult(firstNum, secondNum);
