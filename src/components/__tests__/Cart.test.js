import RestaurantMenu from "../RestaurantMenu"
import { act } from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA_NAME from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import Cart from "../Cart"
import "@testing-library/jest-dom"

global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA_NAME)
        }
    })
})

it("should load Restaurant Menu Component", async ()=>{
    await act (async ()=> render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
    </Provider>
    </BrowserRouter>
    ))
    const accordionHeader= screen.getByText("Pot Rice (3)")
    fireEvent.click(accordionHeader)
    expect(screen.getAllByTestId("foodItems").length).toBe(3)

    const addBtn= screen.getAllByRole("button", {name: "Add +"})
    fireEvent.click(addBtn[0])

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument()

    fireEvent.click(addBtn[1])

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument()
    expect(screen.getAllByTestId("foodItems").length).toBe(5)

    

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart" }))

    expect(screen.getAllByTestId("foodItems").length).toBe(3)


})