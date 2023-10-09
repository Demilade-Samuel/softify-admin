import { FormDropdownContainer, Top, DropdownContainer, Select, Dropdown, ErrorMessage } from "./formdropdown.styles";
import { ChevronDown2, QuestionMark } from "../../assets/svgs";
import { useState } from "react";
import { useListenForOutsideClicks } from "../../hooks";


const FormDropdown = ({labelName, value, setValue, options, error, disabled, questionMark}) => {
    const [isDropdown, setIsDropdown] = useState('false');
    const {elementRef} = useListenForOutsideClicks(() => setIsDropdown('false'))


    return (  
        <FormDropdownContainer>
        <Top><span>{labelName}</span> {questionMark ? <QuestionMark /> : ''}</Top>

        <DropdownContainer>
            <Select ref={elementRef} className={`${error ? 'error' : disabled ? 'disabled' : ''}`} value={value}>
                <p className={`${error ? 'error' : disabled ? 'disabled' : ''}`} onFocus={() => setIsDropdown('true')} tabIndex={0}>{value}</p>
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
        </DropdownContainer>
    </FormDropdownContainer>
    );
}
 
export default FormDropdown;