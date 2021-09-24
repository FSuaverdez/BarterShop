import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsList } from '../store/actions/product-actions'
import Message from '../components/UI/Message'
import Loader from '../components/UI/Loader'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const { loading, error, products } = useSelector((state) => state.productList)

  useEffect(() => {
    dispatch(getProductsList())
  }, [dispatch])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Message variant='danger'>{error}</Message>
  }

  return (
    <>
      <h1>Latest Barter Offers</h1>
      {!loading && products && (
        <Row>
          {products.map((product) => (
            <Col
              key={product._id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className='my-3'
            >
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
