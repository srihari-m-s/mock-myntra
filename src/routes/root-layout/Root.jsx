import { Outlet, ScrollRestoration } from 'react-router-dom'
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
                
                <main className="">
                    <Outlet />
                </main>
                {/* <ScrollRestoration /> */}
            </div>
        </Provider>
    )
}