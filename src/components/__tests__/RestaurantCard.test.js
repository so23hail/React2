import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/ResCardMock.json"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"


it ("should render restaurant card with data", ()=>{
    render(<RestaurantCard resData={MOCK_DATA} />)

    const name= screen.getByText("Chinese Wok")

    expect(name).toBeInTheDocument()

})
