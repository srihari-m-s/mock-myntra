import { Link } from 'react-router-dom'
import './Home.css'
import LargeCarousel from '../../components/alice-carousel/LargeCarousel'
import SmallCarousel from '../../components/alice-carousel/SmallCarousel'

/**
 * Homepage Component that
 * has link to shirts page 
 */
export default function Home() {

  return (
    <section className="hero-wrapper">
      <div className='container-lg hero-container mt mb'>

        <LargeCarousel />
        
        <hr />

        <h1 className='myntra-color'>Featured Product</h1>
        <SmallCarousel />

        <Link to="/shirts">
            <button className='link-button'>View All Shirts</button>
        </Link>
      
      </div>
    </section>
  )
}
