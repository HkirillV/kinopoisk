import { FC, JSX } from 'react';
import { Provider } from 'react-redux';
import store from "../store";

interface IProviders {
  readonly children: JSX.Element;
}

const Providers: FC<IProviders> = ({children}) => {
  return (
      <Provider store={store}>
        {children}
      </Provider>
  )
}

export default Providers;