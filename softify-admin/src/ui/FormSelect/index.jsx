import { FormSelectContainer, Top, SelectContainer, Select, Dropdown, ErrorMessage } from "./formselect.styles";
import { ChevronDown2} from "../../assets/svgs";
import { useState } from "react";
import { useListenForOutsideClicks } from "../../hooks";


const FormSelect = ({labelName, value, setValue, options, error, disabled, placeholder}) => {
    const [isDropdown, setIsDropdown] = useState('false');
    const {elementRef} = useListenForOutsideClicks(() => setIsDropdown('false'))

    return (  
        <FormSelectContainer>
            <Top><span>{labelName}</span></Top>

            <SelectContainer>
                <Select ref={elementRef} className={`${error ? 'error' : disabled ? 'disabled' : ''}`} tabIndex={0}>
                    <p className={`${error ? 'error' : disabled ? 'disabled' : ''}`} onFocus={() => setIsDropdown('true')} tabIndex={0}>{placeholder && !value ? placeholder : !placeholder && !value ? 'Select' :  value}</p>
                    <div onClick={() => isDropdown === 'false' ? setIsDropdown('true') : setIsDropdown('false')}>
                        <ChevronDown2 />
                    </div>
                </Select>
                <Dropdown isdropdown={isDropdown} className={`${disabled ? 'disabled' : ''}`}>
                    {
                        options.map(opt => {
                            return (
                                <div key={opt.id} onClick={() => {
                                    setValue(opt.option)
                                    setIsDropdown('false')}}>
                                    <span>{opt.option}
                                    </span>                                  
                                </div>                        
                            )
                        })
                    }
                </Dropdown>
                {
                        error ?
                        <ErrorMessage>
                            {error}
                        </ErrorMessage> : null
                    }
            </SelectContainer>
        </FormSelectContainer>
    );
}
 
export default FormSelect;