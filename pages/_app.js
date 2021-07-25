import '../styles/globals.css';
import Header from 'components/layout/Header';

import { AppWrapper } from '../components/states/GlobalStates';

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <AppWrapper>
      <Header />  
      <main className="font-sans text-gray-700">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </AppWrapper>
  )
}

export default MyApp