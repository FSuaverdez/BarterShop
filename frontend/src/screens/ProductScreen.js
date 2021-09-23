import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../store/actions/product-actions'
import { ToastContainer, toast } from 'react-toastify'
import Loader from '../components/UI/Loader'
import Message from '../components/UI/Message'

import classes from './ProductScreen.module.css'
import 'react-toastify/dist/ReactToastify.css'
import { addToWatchlist } from '../store/actions/watchList-actions'

const ProductScreen = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const history = useHistory()
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  )
  const { watchListItems } = useSelector((state) => state.watchList)
  useEffect(() => {
    dispatch(getProductDetails(id))
  }, [dispatch, id])

  const addToWatchlistHandler = () => {
    const existItem = watchListItems.find((x) => x.product === id)

    if (existItem) {
      toast.error('Product already in watchlist!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
    } else {
      try {
        dispatch(addToWatchlist(id))
        toast.success('Added to Watchlist! Click to see Watchlist', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          onClick: () => {
            history.push('/watchlist')
          },
        })
      } catch (error) {}
    }
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Message variant='danger'> {error}</Message>
  }

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Link className='btn btn-light my-2' to='/'>
        Go Back
      </Link>
      {!loading && product && (
        <Row>
          <Col sm={12} md={7} lg={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col sm={12} md={5} lg={6}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item className={classes.description}>
                {product.description}
              </ListGroup.Item>
            </ListGroup>
            <Card className='my-3'>
              <ListGroup variant='flush' className={classes.center}>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <span>Condition: </span>
                      <span className={classes.text}>{product.condition}</span>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className={classes.center}>
                  <Row>
                    <Col>
                      <span>Status: </span>
                      <span
                        className={`${
                          product.isAvailable
                            ? classes.available
                            : classes['not-available']
                        } ${classes.text}`}
                      >
                        {product.isAvailable
                          ? 'Available for Barter'
                          : 'Not Available for Barter'}
                      </span>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={!product.isAvailable}
                  >
                    Make an Offer
                  </Button>
                  <Button
                    onClick={addToWatchlistHandler}
                    variant='outline-primary'
                    className='btn-block'
                    type='button'
                  >
                    Add To Watchlist
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductScreen
