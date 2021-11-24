import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../components/layout/index';
import { Provider } from 'react-redux';
import makeStore from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Provider store={makeStore()}>
          <Component {...pageProps} />
        </Provider>
      </MainLayout>
    </>
  )
}

export default MyApp
