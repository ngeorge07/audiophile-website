import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { saveState } from '../redux/browser-storage';
import { store } from '../redux/store';
import './globals.css';
import { NextPageWithLayout } from './page';
interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

// here we subscribe to the store changes
store.subscribe(() => {
  saveState(store.getState());
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}

export default MyApp;
