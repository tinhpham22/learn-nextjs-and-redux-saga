import type { NextPage } from 'next'

import LandingPage from './landingPage/index';
import { wrapper } from '../redux/store';
import { lstPostAction } from '../redux/actions/postAction';

const Home: NextPage = () => <LandingPage />

Home.getInitialProps = wrapper.getInitialPageProps(store => async (props) => {
  store.dispatch(lstPostAction())
  await store.sagaTask.toPromise()
}) 

export default Home
