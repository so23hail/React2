import {sumTest} from "../sumTest"

test("Sum should calculate sum of two numbers", ()=>{
    const result=sumTest(3,4);
    //Assertion or Expectation
    expect(result).toBe(7)
})
