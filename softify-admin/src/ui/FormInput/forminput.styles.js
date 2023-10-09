import {styled} from 'styled-components'

export const InputContainer = styled.label`
    width: 100%;
    position: relative;

    input {
        font-size: 1.6rem;
        color: ${({theme}) => theme.colors.neutral.black5};
        height: 44px;
        width: 100%;
        border-radius: 3px;
        padding-left: 1rem;
        background: transparent;
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        margin-top: 1rem;

        &:focus,
        &:active {
            outline: none;
            border-color: ${({theme}) => theme.colors.neutral.blue};
        }

        &::placeholder {
            color: ${({theme}) => theme.colors.dark.gray};
        }

        &:hover {
            border-color: ${({theme}) => theme.colors.hover.blue};
        }
        &:disabled {
            border-color: ${({theme}) => theme.colors.light.purple};
            color: ${({theme}) => theme.colors.light.purple};
        }
        .error {
            border-color: ${({theme}) => theme.colors.light.brown};
        }
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        svg {
            cursor: pointer;
        }
    }

    span {

        &.disabled {
            color: ${({theme}) => theme.colors.light.purple};        
        }
    }
    .left {
        position: absolute;
        left: 1.5rem;
        top: 80%;
        transform: translateY(-80%);
    }
    .right {
        position: absolute;
        right: 1.5rem;
        top: 80%;
        transform: translateY(-80%);
    }
`