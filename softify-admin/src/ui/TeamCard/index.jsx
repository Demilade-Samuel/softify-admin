import { Bottom, ImageContainer, TeamCardContainer, Top, You } from "./teamcard.styles";

const TeamCard = ({you, name, position, image}) => {
    return (  
        <TeamCardContainer>
            <Top>
                {you ? <You>you</You> : null}

                <ImageContainer>
                    <img src={image} alt="team member" />

                </ImageContainer>
            </Top>
            
            <Bottom>
                <h2>{name}</h2>

                <p>{position}</p>
            </Bottom>
        </TeamCardContainer>
    );
}
 
export default TeamCard;