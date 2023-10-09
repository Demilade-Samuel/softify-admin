import { QuestionMark } from "../../assets/svgs";
import { InputContainer } from "./forminput.styles";

const FormInput = ({labelName, name, placeholder, value, setValue, htmlFor, id, type, questionMark, autoComplete, required, disabled, error, left, right, icon}) => {
    return (  
        <InputContainer htmlFor={htmlFor}>
            <div><span className={`${disabled ? 'disabled' : ''}`}>{labelName}</span>  {questionMark ? <QuestionMark /> : ''}</div>
            <input className={`${error ? 'error' : ''}`} type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} autoComplete={autoComplete} required={required} disabled={disabled} />
            {icon ? <div className={`${left ? 'left' : right ? 'right' : ''}`}>{icon}</div> : ''}
        </InputContainer>
    );
}
 
export default FormInput;