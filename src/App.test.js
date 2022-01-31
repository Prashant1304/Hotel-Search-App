import * as React from "react"
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import ComponentWithStore from "./componentWithStore"
import App from "./App"
import '@testing-library/jest-dom'

test("Mix Stuff", async () => {
    
    const { getByTestId } = render(
    <ComponentWithStore>
    <App />
    </ComponentWithStore>
    
    ); 
    // console.log(getByTestId)
    expect(getByTestId("hotelApp")).toHaveTextContent("Hotel App")
    expect(getByTestId("clickme")).toHaveTextContent("click me")

    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId("counter")).toHaveTextContent('1')

    fireEvent.click(getByTestId("button-down"))
    expect(getByTestId("counter")).toHaveTextContent("0")
});