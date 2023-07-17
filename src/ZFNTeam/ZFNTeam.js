import React from "react";
import {
  ZFNTeamContainer,
  TitleContainer,
  Title,
  SubTitleContainer,
  SubTitle,
  TeamContainers,
  TeamMembersContainers,
  TeamMemberNameAndPositionContainer,
  TeamMemberPosition,
  TeamMemberName,
  ProfilePictureContainer,
  ProfilePicture,
  IconContainer,
  Icon,
  EmailLink,
} from "./ZFNTeam_style";

import teamInfo from "../asset/info.json";

function ZFNTeam() {
  const team = teamInfo["Team"]["records"];
  return (
    <ZFNTeamContainer>
      <TitleContainer>
        <Title>TEAM ZFN</Title>
      </TitleContainer>

      <SubTitleContainer>
        <SubTitle>ZFN CONSULTANTS TEAM ROSTER</SubTitle>
      </SubTitleContainer>

      <TeamContainers>
        {team.map((v, i) => {
          const email = v["lastName"] + v["fristName"] + "@zfn-consulting.com";
          return (
            <TeamMembersContainers key={i}>
              <ProfilePictureContainer>
                <ProfilePicture src={v["picture"]} />
              </ProfilePictureContainer>

              <TeamMemberNameAndPositionContainer>
                <TeamMemberName>
                  {v["lastName"] + ", " + v["fristName"]}
                </TeamMemberName>
                <TeamMemberPosition>
                  {"Expert - " + v["position"]}
                </TeamMemberPosition>
              </TeamMemberNameAndPositionContainer>

              <IconContainer>
                <EmailLink href={"mailto: " + email}>
                  {/* <Icon src={"images/PersonIcon.svg"}/> */}
                  {/* <Icon src={"images/MailIcon.svg"} /> */}
                </EmailLink>
              </IconContainer>
            </TeamMembersContainers>
          );
        })}
      </TeamContainers>
    </ZFNTeamContainer>
  );
}
export default ZFNTeam;
