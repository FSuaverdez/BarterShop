import { Card } from 'react-bootstrap'
import classes from './Product.module.css'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Card className={`p-3 rounded ${classes.card}`}>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <div className={classes.condition}>
            <p>{product.condition}</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
