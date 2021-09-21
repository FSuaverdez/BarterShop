import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import classes from './ProductScreen.module.css'
import axios from 'axios'
import { useParams } from 'react-router'

import { useEffect, useState } from 'react'

const ProductScreen = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${id}`)

      setProduct(data)
    }

    fetchProducts()
  }, [id])

  return (
    <>
      <Link className='btn btn-light my-2' to='/'>
        Go Back
      </Link>
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
    </>
  )
}

export default ProductScreen
