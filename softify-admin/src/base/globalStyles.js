import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
    html {
        -webkit-tap-highlight-color: transparent;
        font-size: 62.5%;
    }
    body {
        font-family: ${({theme}) => theme.font.poppins};
        font-size: 1.6rem;
        color: ${({theme}) => theme.colors.neutral.black3};
        user-select: none;
    }
    ::-webkit-scrollbar {
        width: 2rem;
    }
    ::-webkit-scrollbar-track {
    background: white;
    }
    ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colors.light.purple};
    border-radius: 1rem;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: ${({theme}) => theme.colors.neutral.purple};
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    button {
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 1.6rem;
        font-family: ${({theme}) => theme.font.poppins};

        :disabled {
            cursor: not-allowed;
        }
    }
    a {
        color: ${({theme}) => theme.colors.neutral.black6};

        &:active {
            color: ${({theme}) => theme.colors.neutral.black5}
        }

        &:hover {
            color: ${({theme}) => theme.colors.neutral.black2}
        }

        &:disabled {
            color: ${({theme}) => theme.colors.light.purple}
        }
    }
`

export default Globals;
