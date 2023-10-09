import styled from "styled-components";

export const SingleRiderSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    padding: 2rem 3rem;
    background: ${({theme}) => theme.colors.bg.gray1};
    color: ${({theme}) => theme.colors.neutral.black2};
    height: 100%;
`
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Name = styled.p`
    font-size: 2.4rem;
    font-weight: 600;
`
export const Suspend = styled.button`
    height: 40px;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 5px;
    background: ${({theme}) => theme.colors.bg.pink};
    color: ${({theme}) => theme.colors.neutral.pink2};
`
export const Profile = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 1rem;
    align-items: center;
`
export const ProfileLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ImageContainer = styled.div`
    width: 100%;
`
export const Rating = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const ProfileRight = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 4rem;
    row-gap: 3rem;
`
export const RiderName = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const RiderEmail = styled.div`
    max-width: 282px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }

`
export const RiderCredentials = styled.div`
    max-width: 147px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
        background: ${({theme}) => theme.colors.bg.green2};
        color: white;
        text-align: center;
    }
`
export const RiderLocation = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const RiderJoined = styled.div`
    max-width: 147px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const RiderSuccessfulOrders = styled.div`
    max-width: 147px;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const RiderInfos = styled.div`
    background: ${({theme}) => theme.colors.bg.gray3};
    padding: 0.5rem 0.8rem;
    display: inline-flex;
    margin-top: 4rem;

`
export const RiderInfo = styled.span`
    padding: 0.5rem 1.5rem;
    color: ${({theme}) => theme.colors.light.gray1};
    background: transparent;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;

    &.active {
        color: ${({theme}) => theme.colors.neutral.purple}; 
        background: ${({theme}) => theme.colors.bg.purple}; 
    } 
`
export const RiderInfoDetails = styled.div`
    margin-top: 2rem;
    display: none;
    flex-wrap: wrap;
    column-gap: 4rem;
    row-gap: 3rem;

    &.info-active {
        display: flex;
    }

    .full {
        width: 100%;

        .guarantor {
            padding: 1rem 2.4rem;
            background: ${({theme}) => theme.colors.bg.gray3};
            display: inline-block;
            font-weight: 500;
            font-size: 1.5rem;
            color: ${({theme}) => theme.colors.neutral.black1};
        }
        .account {
            padding: 1rem 2.4rem;
            background: ${({theme}) => theme.colors.bg.gray3};
            display: inline-block;
            font-weight: 500;
            font-size: 1.5rem;
            color: ${({theme}) => theme.colors.neutral.black1};          
        }
    }

    .no-saved-bank-details {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 7rem;

        h2 {
            font-size: 2.4rem;
            font-weight: 600;
        }
    }
`
export const RiderAddress = styled.div`
    max-width: 1035px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const RiderState = styled.div`
    max-width: 221px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const RiderCity = styled.div`
    max-width: 221px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const RiderPostal = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const RiderPOA = styled.div`
    max-width: 166px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 0 1rem;
        border-radius: 3px;
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            border-right: 1px solid ${({theme}) => theme.colors.bg.gray6};
            padding: 1rem 1rem 1rem 0;
        }

        svg {
            cursor: pointer;
        }
    }
`
export const RiderMobile = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const LicenseNumber = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const ExpiryDate = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const LicenseType = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const VehicleType = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const VehicleBrand = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const PlateNumber = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const CarColour = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const VehicleImage = styled.div`
    max-width: 295px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .right {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
    }
`
export const Insurance = styled.div`
    max-width: 166px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`

export const VehicleCredentials = styled.div`
    max-width: 147px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
        background: ${({theme}) => theme.colors.bg.gray6};
        color: ${({theme}) => theme.colors.bg.green2};
        text-align: center;
    }
`
export const AccountNumber = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const Bank = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const SortCode = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const NameOnAccount = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const NOKName = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const NOKPhone = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const RelationshipWithNOK = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const GuarantorName = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const GuarantorNumber = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const GuarantorPreviousWork = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const GuarantorPosition = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const GuarantorHowLong = styled.div`
    max-width: 354px;
    width: 100%;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`