import '../styles/globals.scss'
import type { AppContext, AppProps } from 'next/app'
import MainLayout from '../components/layout/index';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';
import { lstPostAction } from '../redux/actions/postAction';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('pageProps', pageProps);

  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }: AppContext) => {
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const json = await res.json()
  // return { pageProps: json }
  await ctx.store.dispatch(lstPostAction())
  return {
    pageProps: {
      ...(Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {}),
      pathname: ctx.pathname,
      datasss: ctx.store.getState(),
    },
  };
})

export default wrapper.withRedux(MyApp);
