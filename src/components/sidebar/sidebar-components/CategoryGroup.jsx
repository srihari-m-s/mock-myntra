import { useDispatch } from 'react-redux';
import { setCategory, removeCategory } from '../../../features/filters/filterSlice';
import './InputGroup.css'

/**
 * Clothing Filter Component
 * Filters clothing by Men, Women, Girls, Boys Category
 * 
 * props --
 * 1. categoryLabels [Array of Strings] 
 */
export default function CategoryGroup({ categoryLables }){

    const dispatch = useDispatch();

    // Set category state in filter Slice
    function handleCategoryChecked(e){
        let checked = e.target.checked;
        let value = e.target.value;
        if(checked){
            dispatch(setCategory(value.toLowerCase()));
        } else {
            dispatch(removeCategory(value.toLowerCase()))
        }
    }

    const categoryInputs = categoryLables.map(label => {
        return (
            <div className="input-container" key={label}>
                <input type="checkbox" name={label} id={label} key={label} value={label} className='input-shape category-shape' onChange={e => handleCategoryChecked(e)}/>
                <label htmlFor={label} className='input-label fw-700'>{label}</label>
            </div>
        )
    })

    return(
        <div className="group-wrapper m-inline">
            {categoryInputs}
        </div>
    )
}