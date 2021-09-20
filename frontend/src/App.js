import { Container } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import Footer from './components/UI/Footer'
import Header from './components/UI/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
