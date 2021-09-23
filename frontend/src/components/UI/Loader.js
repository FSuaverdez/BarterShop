import { Spinner } from 'react-bootstrap'
import classes from './Loader.module.css'
const Loader = () => {
  return (
    <Spinner animation='border' role='status' className={classes.loader}>
      <span className='sr-only'>Loading....</span>
    </Spinner>
  )
}

export default Loader
