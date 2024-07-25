import {Link} from 'react-router-dom'

function SuccessCheckOut() {
  return (
    <div>
      <h3>payment done</h3>
      <p>thank you for completing payment</p>
      <p>have a great day</p>
      <div>
        <Link to='/home'>
        go back home
        </Link>
      </div>
    </div>
  )
}

export default SuccessCheckOut