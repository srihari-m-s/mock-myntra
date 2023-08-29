import { setDiscountArray, removeDiscountArray } from '../../../features/filters/filterSlice'
import { useDispatch } from 'react-redux'
import './InputGroup.css'

/**
 * Discounts Filter Component
 * 
 * props --
 * 1. discountList [Array of Strings] 
 */
export default function DiscountGroup({ discountList }){

    const dispatch = useDispatch();

    // Set discount state in filter Slice
    function handleDiscountState(e){
        let checked = e.target.checked;
        let value = e.target.value;
        if(checked){
            dispatch(setDiscountArray(value))
        } else {
            dispatch(removeDiscountArray(value))
        }
    }
    

    const discountInputs = discountList.map((discountString, index) => {

        const discount = [10, 20, 30, 40, 50, 60, 70, 80];

        return (
            <div className="input-container" key={discountString}>
                <input type="checkbox" name={discountString} id={discountString} key={discountString} value={discount[index]} className='input-shape' onChange={e => handleDiscountState(e)}/>
                <label htmlFor={discountString} className='input-label'>{discountString}</label>
            </div>
        )
    })

    return(
        <div className="group-wrapper  m-inline">
            <h5>discount range</h5>
            {discountInputs}
        </div>
    )
}