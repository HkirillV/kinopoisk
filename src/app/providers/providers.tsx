import { FC, JSX } from "react";
import { Provider } from "react-redux";
import store, { persistor } from "@/app/store/store";
import { PersistGate } from "redux-persist/integration/react";

interface IProviders {
  readonly children: JSX.Element;
}

const Providers: FC<IProviders> = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default Providers;