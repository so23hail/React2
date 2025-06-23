import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import {act} from "react-dom/test-utils"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it("should render Body component with Search for burger", async ()=>{
    await act(async ()=>render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
    ))

    const cardsBeforeSearch= screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(8)
    const searchButton= screen.getByRole("button", {name: "Search"})

    const searchInput= screen.getByTestId("searchInput")
    fireEvent.change(searchInput, {target : {value: "burger"}})
    fireEvent.click(searchButton)
    //assertion - screen shld load only those cards with burger for eg 2 cards or 3 cards. 
    // In my project I m getting two cards with burger search(Burger King and burger Farm)

    const cardsAfterSearch=screen.getAllByTestId("resCard")
    expect(cardsAfterSearch.length).toBe(2)
})

it("should render the body components with Top rated restaurant", async ()=>{
    await  act (async ()=>render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const ratingButton = screen.getByTestId("ratingBtn")
    //const topRatedRest= screen.getAllByTestId("resCard")
    fireEvent.click(ratingButton)

    const topRatedCards=screen.getAllByTestId("resCard")

    expect(topRatedCards.length).toBe(2)
})

