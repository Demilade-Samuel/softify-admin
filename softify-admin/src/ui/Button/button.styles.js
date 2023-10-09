import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 0 1.5rem;
    height: 35px;
    font-weight: 500;
    text-transform: capitalize;
    color: ${({theme, primary, secondary}) => primary ? theme.colors.light.gray3 : secondary ? theme.colors.neutral.purple : ''};
    background: ${({theme, primary, secondary}) => primary ? theme.colors.neutral.purple : secondary ? 'transparent' :''};
    border-radius: 4px;
    border-width: 2px;
    border-style: solid;
    border-color: ${({primary, secondary, theme}) => primary ? theme.colors.neutral.purple : secondary ? theme.colors.neutral.purple : ''};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    white-space: nowrap;

    &:hover {
        background: ${({theme, primary, secondary}) => primary ? theme.colors.hover.purple : secondary ? theme.colors.hover.lightpurple : ''};
        border-color: ${({primary, secondary, theme}) => primary ? theme.colors.hover.purple : secondary ?  theme.colors.hover.purple : ''};
    }

    &:active {
        background: ${({theme, primary, secondary}) => primary ? theme.colors.pressed.purple : secondary ? theme.colors.pressed.lightpurple : ''};
        border-color: ${({primary, secondary, theme}) => primary ? theme.colors.pressed.purple : secondary ?  theme.colors.pressed.lightpurple : ''};
        color: ${({theme, secondary, primary}) => primary ? theme.colors.light.gray3 : secondary ? theme.colors.pressed.gray : ''}
    }

    &:disabled {
        background: ${({theme, primary, secondary}) => primary ? theme.colors.light.purple : secondary ? 'transparent' : ''};
        border-color: ${({primary, secondary, theme}) => primary ? theme.colors.light.purple : secondary ? theme.colors.light.purple : ''};
        color: ${({theme, secondary, primary}) => primary ? theme.colors.light.gray3 : secondary ? theme.colors.light.purple : ''};
        cursor: default;
    }
`