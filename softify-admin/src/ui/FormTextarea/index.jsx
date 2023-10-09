import { QuestionMark } from "../../assets/svgs";
import { InputContainer } from "./formtextarea.styles";

const FormTextarea = ({labelName, name, placeholder, value, setValue, htmlFor, id, questionMark, autoComplete, required, disabled, error}) => {
    return (  
        <InputContainer htmlFor={htmlFor}>
            <div><span className={`${disabled ? 'disabled' : ''}`}>{labelName}</span>  {questionMark ? <QuestionMark /> : ''}</div>
            <textarea className={`${error ? 'error' : ''}`} name={name} id={id} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} autoComplete={autoComplete} required={required} disabled={disabled} />
        </InputContainer>
    );
}
 
export default FormTextarea;