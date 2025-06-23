import {fireEvent, render, screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
test("Sould load Header with Login", ()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}> 
       
            <Header />
            
        </Provider>
        </BrowserRouter>
    )

    //const loginButton = screen.getByRole("button") 

    const loginButton = screen.getByRole("button", {name: "Login"})

    //const loginButton = screen.getByText("Login") // u can write this way

    expect(loginButton).toBeInTheDocument()

})

test("Sould render Cart with 0 items", ()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}> 
       
            <Header />
            
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart - (0 items)") // make sure u write text correctly

    expect(cartItems).toBeInTheDocument()

})

//Using regex

test("Sould render Cart with 1 items", ()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}> 
       
            <Header />
            
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/) // make sure u write text correctly

    expect(cartItems).toBeInTheDocument()

})

// login to LogOut change test
test("Sould change login to logout button", ()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}> 
       
            <Header />
            
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"}) 
    fireEvent.click(loginButton)
    const logOutButton= screen.getByRole("button", {name: "LogOut"}) 


    expect(logOutButton).toBeInTheDocument()

})


