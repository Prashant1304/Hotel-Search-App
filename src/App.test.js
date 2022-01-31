import * as React from "react"
import {render, fireEvent, waitFor, screen,waitForElement} from '@testing-library/react'
import ComponentWithStore from "./componentWithStore"
import App from "./App"
import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { taskAction } from "./action/taskAction"

const middleware = [thunk]
const mockStore = configureStore(middleware)
console.log(configureStore())


test("Testing the first render and title or initial rendering", async () => {

const { getByTestId } = render(
  <ComponentWithStore>
  <App />
  </ComponentWithStore>
);

  expect(getByTestId("hotelApp")).toHaveTextContent("Hotel App")

})

test("Testing Ascending ", () =>  {
  
const { getByTestId } = render(
  <ComponentWithStore>
  <App />
  </ComponentWithStore>
);

fireEvent.click(getByTestId("AscendingButton"))
expect(getByTestId("AscendingButton")).toHaveTextContent("Ascending")
})

test("Testing Descending ", () =>  {
  
  const { getByTestId } = render(
    <ComponentWithStore>
    <App />
    </ComponentWithStore>
  );

  fireEvent.click(getByTestId("DescendingButton"))
  expect(getByTestId("DescendingButton")).toHaveTextContent("Descending")
  
})

  test('should execute loding data', () => {
    const store = mockStore({})
    //   console.log(store.dispatch(taskAction()),"store")
    store.dispatch(taskAction())
    const actions = store.getActions()
    console.log()
    expect(actions[0].type).toEqual("REDUX_THUNK_LOAD_USERS_LOADING")
})

test ("should get success data", () => {
    const store = mockStore({})
    const action ={ type: 'REDUX_THUNK_LOAD_USERS_SUCCESS' }
    store.dispatch(taskAction())
    expect(action.type).toEqual("REDUX_THUNK_LOAD_USERS_SUCCESS")
})
