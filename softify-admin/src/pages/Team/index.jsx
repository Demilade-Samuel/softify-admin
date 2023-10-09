import { Container, TeamSection, FirstContainer, SecondContainer, Position, Joined, TeamMembers, NoMember } from "./team.styles";
import {Pageheader} from "../../components";
import { CustomButton, Search, TeamCard } from "../../ui";
import { Dummy } from "../../assets/imgs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Approutes } from "../../constants";

const Team = () => {
    const [othermembers] = useState(true)
    const [teamMember, searchTeamMember] = useState('')

    return (  
        <TeamSection>
            <Pageheader title='team' />

            <Container>
                Team
                {/* <FirstContainer>
                    <Search placeholder='Search name, postion, etc...' value={teamMember} setValue={searchTeamMember} />


                   <Link to={Approutes.superadmin.team.addteammember}><CustomButton primary='true' left icon='+'>Add New Team Member</CustomButton></Link>
                </FirstContainer>

                <SecondContainer>
                    <Position htmlFor="position">
                        <span>Position</span>
                        <select name="usertype" id="usertype">
                            <option value="all" defaultValue>All</option>
                            <option value="all" >All</option>
                            <option value="all" >All</option>
                            <option value="all" >All</option>
                        </select>
                    </Position>

                    <Joined htmlFor="joined">
                        <span>Joined</span>
                        <input type="date" name="joined" id="joined" />
                    </Joined>
                </SecondContainer>

                <TeamMembers>
                    <TeamCard you='true' name='Abdull Kazeem' position='Manager' image={Dummy} />
                    <TeamCard name='Augustine Ukattah' position='Online Sales Associate' />
                    <TeamCard name='Ekwueme Amaka' position='Online Customer Service Representative' />
                    <TeamCard name='Chimbuchi Buchi' position='Delivery Driver' />
                    <TeamCard name='Simonu Eliyyahu' position='Simonu Eliyyahu' />
                    <TeamCard name='Bose Folami' position='Online Order Picker' />
                    <TeamCard name='Chike Chinonso' position='Warehouse Associate' />
                    <TeamCard name='Joy Emodi' position='Product Manager' />
                    <TeamCard name='Demilade Agboola' position='Product Manager' />
                    <TeamCard name='Moyin Olowu' position='Online Order Picker' />
                    <TeamCard name='Chisom Obilor' position='Delivery Driver' />
                    <TeamCard name='Murtala Mohammed' position='Online Sales Associate' />
                </TeamMembers> */}
            </Container>
            {
                !othermembers ?
                <NoMember>
                <h2>You have no other team member </h2>
                <p>You can add and manage your team here</p>
                <CustomButton>+ Add A New Team Member</CustomButton>
            </NoMember> : null
            }
        </TeamSection>
    );
}
 
export default Team;