import { Link, useHistory } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/UI/Message'
import { removeFromWatchlist } from '../store/actions/watchList-actions'

const WatchlistScreen = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { watchListItems } = useSelector((state) => state.watchList)

  const removeFromWatchListHandler = (id) => {
    dispatch(removeFromWatchlist(id))
  }

  const sendOfferHandler = (id) => {
    history.push(`/login?redirect=offer&id=${id}`)
  }
  return (
    <Row>
      <Col md={12}>
        <h1>Watch List</h1>
        {watchListItems.length === 0 && (
          <Message>
            Your Watch List is Empty <Link to='/'>Go Back</Link>
          </Message>
        )}
        {watchListItems.length > 0 && (
          <ListGroup variant='flush'>
            {watchListItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Link to={`/product/${item.product}`}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Link>
                  </Col>
                  <Col md={7} className='d-flex align-items-center'>
                    <Link to={`/product/${item.product}`}>
                      <h4>{item.name}</h4>
                      <h6>{item.condition}</h6>
                    </Link>
                  </Col>
                  <Col
                    md={2}
                    className='d-flex justify-content-center align-items-center'
                  >
                    <Button
                      type='button'
                      onClick={() => sendOfferHandler(item.product)}
                    >
                      Send Offer
                    </Button>
                  </Col>
                  <Col
                    md={1}
                    className='d-flex justify-content-center align-items-center'
                  >
                    <Button
                      type='button'
                      variant='outline-secondary'
                      onClick={() => removeFromWatchListHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  )
}

export default WatchlistScreen
