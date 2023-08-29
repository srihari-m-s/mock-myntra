import { setPriceArray, removePriceArray } from '../../../features/filters/filterSlice';
import { useDispatch } from 'react-redux';
import './InputGroup.css'


/**
 * Price Filter Component
 * 
 * props --
 * 1. priceList [Array of Strings] 
 */
export default function PriceGroup({ priceList }){
    
    const dispatch = useDispatch();

    let lowerPrice = [ 280, 2001, 8001, 15001];
    let upperPrice = [ 2000, 8000, 15000, 36000 ];

    // Set price state in filter Slice
    function handlePriceState(e, index){
        let checked = e.target.checked;
        let value = e.target.value;
        if(checked){
            dispatch(setPriceArray({lowerPrice: lowerPrice[index], upperPrice: upperPrice[index]}))
        } else {
            dispatch(removePriceArray({lowerPrice: lowerPrice[index], upperPrice: upperPrice[index]}))
        }
    }

    const priceInputs = priceList.map((priceString, index) => {

        return (
            <div className="input-container" key={priceString}>
                <input type="checkbox" name={priceString} id={priceString} key={priceString} value={index} className='input-shape' onChange={e => handlePriceState(e, index)}/>
                <label htmlFor={priceString} className='input-label'>{priceString}</label>
            </div>
        )
    })

    return(
        <div className="group-wrapper  m-inline">
            <h5>price</h5>
            {priceInputs}
        </div>
    )
}