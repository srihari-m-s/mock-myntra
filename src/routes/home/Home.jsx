import { Link } from 'react-router-dom'
import './Home.css'

/**
 * Homepage Component that
 * has link to shirts page 
 */
export default function Home() {

  return (
    <div className='container-lg'>
      <div className="link-wrapper">
        <h1 className='myntra-color'>Welcome to mock Myntra</h1>
        <p>Page under construction<span className='rotate'>⏳</span>, please visit shirts page...</p>
        <Link to="/shirts">
            <button className='link-button'>Go to Shirts page</button>
        </Link>
      </div>
    </div>
  )
}
