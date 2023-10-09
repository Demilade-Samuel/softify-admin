import styled from 'styled-components';
import ChevronDown from '../../../assets/svgs/ChevronDown2.svg';

export const AddPromotionSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`

export const Container = styled.div`
    background: ${({theme}) => theme.colors.bg.gray1};
    color: ${({theme}) => theme.colors.neutral.black2};

    h2 {
        font-size: 2.4rem;
        font-weight: 600;
    }
`

export const AddPromotionForm = styled.form`

`
export const Type = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    color: ${({theme}) => theme.colors.neutral.black3};
`
export const All = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;


    div {
        width: 18px;
        height: 18px;
        border-radius: 100%;
        border: 1.5px solid ${({theme}) => theme.colors.bg.gray7};
        cursor: pointer;

        &.type-active {
            background: ${({theme}) => theme.colors.neutral.purple};
        }
    }
`

export const New = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    div {
        width: 18px;
        height: 18px;
        border-radius: 100%;
        border: 1.5px solid ${({theme}) => theme.colors.bg.gray7};
        cursor: pointer;

        &.type-active {
            background: ${({theme}) => theme.colors.neutral.purple};
        }
    }
`
export const Inputs = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 1100px;
    padding: 2rem 3rem;
`
export const PromoCodeName = styled.div`
    max-width: 855px;
    width: 100%;
`
export const PromoCodeDesc = styled.div`
    width: 855px;
`
export const GridThree = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 2rem;
`
export const PromoDiscountCode = styled.div`
    width: 100%;
`
export const PromoDiscountCodeTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .promo-type {
        display: flex;
        align-items: center;
        gap: 2rem;

        .percent {
            display: flex;
            align-items: center;
            gap: 1rem;

            div {
                width: 18px;
                height: 18px;
                border-radius: 100%;
                border: 1.5px solid ${({theme}) => theme.colors.bg.gray7};
                cursor: pointer;

                &.type-active {
                    background: ${({theme}) => theme.colors.neutral.purple};
                }
            }
        }

        .value {
            display: flex;
            align-items: center;
            gap: 1rem;

            div {
                width: 18px;
                height: 18px;
                border-radius: 100%;
                border: 1.5px solid ${({theme}) => theme.colors.bg.gray7};
                cursor: pointer;

                &.type-active {
                    background: ${({theme}) => theme.colors.neutral.purple};
                }
            }            
        }
    }
`

export const GridTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
`
export const ValidTill = styled.div`
    width: 222px;

    input {
        padding: 1rem;
        background: transparent;
        border: 1px solid ${({theme}) => theme.colors.light.gray2};
        border-radius: 5px;
        font-weight: 500;
        color: ${({theme}) => theme.colors.neutral.black2};
        font-family: ${({theme}) => theme.font.poppins};

        &:focus,
        &:focus-within {
            outline: none;
        }
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        font-size: 2rem;
        cursor: pointer;
        background-image: url(${ChevronDown});
    }
`

export const Buttons = styled.div`
    background-color: white;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 4rem;

`
export const Save = styled.button`
    height: 35px;
    border-radius: 5px;
    color:  ${({theme}) => theme.colors.light.gray3};
    background: ${({theme}) => theme.colors.neutral.purple};
    border: 1px solid ${({theme}) => theme.colors.neutral.purple};
    text-transform: capitalize;
    font-weight: 500;
    max-width: 110px;
    width: 100%;
`
export const Cancel = styled.button`
    height: 35px;
    border-radius: 5px;
    background:  ${({theme}) => theme.colors.bg.gray3};
    color: ${({theme}) => theme.colors.neutral.black2};
    border: 1px solid ${({theme}) => theme.colors.bg.gray3};
    text-transform: capitalize;
    font-weight: 500;
    max-width: 110px;
    width: 100%;
`