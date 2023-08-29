import { Outlet, Link } from 'react-router-dom'
import Navigation from '../../components/navigation/Navigation'
import './Root.css'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'


/**
 * Root Layout Component
 * 
 */
export default function Root(){

    return(
        <Provider store={store}>
            <div className="root-wrapper">
                <Navigation />
                
                <div className="container-lg">
                    <main className='mt'>
                        <Outlet />
                    </main>
                </div>
            </div>
        </Provider>
    )
}