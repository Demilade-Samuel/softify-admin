import { Cancel, Search } from "../../assets/svgs";
import { SearchContainer } from "./search.styles";


const SearchUi = ({value, setValue, placeholder, disabled}) => {
    return (  
        <SearchContainer className={`${disabled ? 'disabled' : value ? 'valid' : ''}`}>
            <Search />
            <input type="text" placeholder={placeholder} aria-label="search" value={value} onChange={(e) => setValue(e.target.value)} disabled={disabled}/>
            {value ? <div className="left" onClick={() => setValue('')}><Cancel /></div> : ''}
        </SearchContainer>

    );
}
 
export default SearchUi;