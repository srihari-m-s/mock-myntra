import { Link } from 'react-router-dom'
import './Home.css'
import LargeCarousel from '../../components/alice-carousel/LargeCarousel'

/**
 * Homepage Component that
 * has link to shirts page 
 */
export default function Home() {

  return (
    <section className="hero-wrapper">
      <div className='container-lg hero-container'>

          <h1 className='myntra-color'>Welcome to mock Myntra</h1>
          {/* <p>Page under construction<span className='rotate'>⏳</span>, please visit shirts page...</p> */}
          <LargeCarousel />
          <Link to="/shirts">
              <button className='link-button'>Go to Shirts page</button>
          </Link>
        
      </div>
    </section>
  )
}
