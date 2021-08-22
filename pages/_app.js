import '../styles/globals.css';
import Header from 'components/layout/Header';

import { AppWrapper } from '../components/states/GlobalStates';
import { TransitionGroup, CSSTransition } from "react-transition-group";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <AppWrapper>
      <Header />
      <main className="font-sans text-dark">
        <Layout>
          <TransitionGroup>
            <CSSTransition key={Layout} classNames="page" timeout={300}>
              <Component {...pageProps} />

            </CSSTransition>
          </TransitionGroup>
        </Layout>
      </main>
    </AppWrapper>
  )
}

export default MyApp