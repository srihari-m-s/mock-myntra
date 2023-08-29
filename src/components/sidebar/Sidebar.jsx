import BrandGroup from './sidebar-components/BrandGroup';
import DiscountGroup from './sidebar-components/DiscountGroup';
import PriceGroup from './sidebar-components/Pricegroup';
import CategoryGroup from './sidebar-components/CategoryGroup';
import { categoryLables, brandList, priceList, discountList } from '../../features/products/data';
import './Sidebar.css'


/**
 * Sidebar Component.
 * Holds all filter components.
 * 
 * No props
 * Children are passed data from global constants
 */
export default function Sidebar(){
    

    return (
        <div className="sidebar-wrapper">
            <div className="filter-container">
                <CategoryGroup categoryLables={categoryLables}/>
            </div>
            
            <div className="filter-container">
                <BrandGroup brandList={brandList}/>
            </div>

            <div className="filter-container">
                <PriceGroup priceList={priceList}/>
            </div>

            <div className="filter-container">
                <DiscountGroup discountList={discountList}/>
            </div>
        </div>
    )
}