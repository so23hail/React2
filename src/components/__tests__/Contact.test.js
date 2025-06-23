import {render, screen} from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us Page Test Cases", ()=>{

    // afterEach(()=>{
    //     console.log("After Each")
    //     })

    // afterAll(()=>{
    //     console.log("After All")
    // })

    // beforeAll(()=>{
    //     console.log("Before All")
    //     })
    // beforeEach(()=>{
    //     console.log("Before Each")
    //     })

    test("Should load contactUs component",  ()=> {
    render (<Contact /> )

    const heading = screen.getByRole("heading")

    //Assertion
    expect(heading).toBeInTheDocument()

})

test("Check my button is on the page",  ()=> {
    render (<Contact /> )

    const button = screen.getByRole("button")

    //Assertion
    expect(button).toBeInTheDocument()

})

test("Check my button is on the page",  ()=> {
    render (<Contact /> )

    const button = screen.getByText("Submit")

    //Assertion
    expect(button).toBeInTheDocument()

})

test("Should load my input in contactUs component",  ()=> {
    render (<Contact /> )

    const inputName = screen.getByPlaceholderText("name")

    //Assertion
    expect(inputName).toBeInTheDocument()

})

test("Should load 2 input bpoxes in contactUs component",  ()=> {
    render (<Contact /> )
    //Querying
    const inputBoxes = screen.getAllByRole("textbox")
    //console.log(inputBoxes)

    //Assertion
    expect(inputBoxes.length).toBe(2)

})

})

