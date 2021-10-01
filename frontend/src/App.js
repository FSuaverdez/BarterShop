import { Container } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import Footer from './components/UI/Footer'
import Header from './components/UI/Header'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import ProductScreen from './screens/ProductScreen'
import WatchlistScreen from './screens/WatchlistScreen'
import RegisterScreen from './screens/RegisterScreen'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/watchlist/:id?' component={WatchlistScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
