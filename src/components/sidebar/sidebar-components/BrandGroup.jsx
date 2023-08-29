import { useDispatch } from 'react-redux'
import { setBrandsId, removeBrandsId } from '../../../features/filters/filterSlice'
import './InputGroup.css'

/**
 * Brands Filter Component
 * 
 * props --
 * 1. brandList [Array of Strings] 
 */
export default function BrandGroup({ brandList }){

    const dispatch = useDispatch();

    // Set Brands State in filter Slice
    function handleBrandState(e){
        let checked = e.target.checked;
        let id = e.target.id;
        if(checked){
            dispatch(setBrandsId(id))
        } else {
            dispatch(removeBrandsId(id))
        }
    }

    const brandInputs = brandList.map(brand => {
        return (
            <div className="input-container" key={brand}>
                <input type="checkbox" name={brand} id={brand} key={brand} value={brand} className='input-shape' onChange={e => handleBrandState(e)}/>
                <label htmlFor={brand} className='input-label'>{brand}</label>
            </div>
        )
    })

    return(
        <div className="group-wrapper m-inline">
            <h5>brands</h5>
            {brandInputs}
        </div>
    )
}