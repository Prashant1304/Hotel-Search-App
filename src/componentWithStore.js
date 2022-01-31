import { Provider } from 'react-redux';
import ConfigStore from "./store/storeConfig"

const ComponentWithStore = (props) => {
    const store = ConfigStore()
    const state = store.getState();
    store.dispatch = jest.fn();
    store.replaceReducer(() => state);
    console.log(props.children)
    return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
};

export default ComponentWithStore;