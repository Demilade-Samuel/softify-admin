import { FormDropdownContainer, Top, FormSelect, Dropdown, DropdownContainer, ErrorMessage  } from "./dropdown.styles";
import { QuestionMark, ChevronDown2 } from "../../assets/svgs";
import { useState } from "react";
import {useListenForOutsideClicks} from '../../hooks'

const SearchAndSelectDropdown = ({formTitle, selectPlaceholder, labelFor, inputName, inputId, showQuestionMark, options, setState, state, error, disabled}) => {
    const [isDropdown, setIsDropdown] = useState('false');
    const [selectOptions] = useState(options);

    const {elementRef} = useListenForOutsideClicks(() => {
        setIsDropdown('false')
    })


    const filterBySearch = () => {
        let newOptions=[...selectOptions]

        newOptions = newOptions.filter(item => {
            return item.name.toLowerCase().indexOf(state.trim().toLowerCase()) !== -1
        })


        return newOptions
    }

    return (  
        <FormDropdownContainer>
            <Top><span>{formTitle}</span>    {showQuestionMark === 'true' ? <QuestionMark /> : ''} </Top>

            <DropdownContainer>
                <FormSelect ref={elementRef} className={`${error ? 'error' : disabled ? 'disabled' : ''}`}>
                    <label htmlFor={labelFor}>
                        <input className={`${error ? 'error' : disabled ? 'disabled' : ''}`} type="text" name={inputName} id={inputId} aria-label="search and select dropdown" placeholder={selectPlaceholder} required autoComplete="off" onFocus={()=> setIsDropdown('true')} onChange={(e) => setState(e.target.value)} value={state} disabled={disabled}/>
                    </label>
                    <div onClick={() => isDropdown === 'false' ? setIsDropdown('true') : setIsDropdown('false') }>
                        <ChevronDown2 />
                    </div>
                </FormSelect>
                <Dropdown isdropdown={isDropdown} className={`${disabled ? 'disabled' : ''}`}>
                    {filterBySearch().map(i => {
                        return (
                            <div key={i.code} onClick={() => {
                                setIsDropdown('false')
                                setState(i.name)}}>
                                <span>{i.name}</span>
                            </div>
                        )
                    })}
                </Dropdown>
                {
                    error ?
                    <ErrorMessage>
                        {error}
                    </ErrorMessage> : null
                }
            </DropdownContainer>
        </FormDropdownContainer>
    );
}
 
export default SearchAndSelectDropdown;