import {useEffect, useRef} from 'react';

const useListenForOutsideClicks = (onOutsideClick) => {

    const elementRef = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if(elementRef.current && !elementRef.current.contains(e.target)){
                if(onOutsideClick){
                    onOutsideClick()
                }
            }
        }

        document.addEventListener('click', handleOutsideClick, true)

        return () =>{ document.removeEventListener('click', handleOutsideClick, true)}
    } ,[onOutsideClick])

    return {elementRef}
}

export default useListenForOutsideClicks;