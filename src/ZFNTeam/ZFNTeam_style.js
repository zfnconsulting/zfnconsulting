import styled from "styled-components";

const ZFNTeamContainer = styled.div`
	grid-area:"content" ;
	width: 100%;
	height: 100%;
	display: grid;
	
	grid-auto-columns:100%;
	grid-auto-rows:auto;
	grid-row-gap: 10px ;

	margin-bottom:10% ;
	font-family: 'Mulish' ;
	z-index:1 ;
	/* grid-row-gap:0 ;
	grid-column-gap:0 ; */
	/* min-height:100% ; */

	
`

const TitleContainer = styled.div`
	display:grid ;
	align-content:center; 
	width: 100% ;
	height:200px ;
	background-color: #0E7458;	
`
const Title = styled.p`
	padding: 0 0 0 9% ;
	align-content:center ;
	font-size: 24px ;
	letter-spacing: 3px;
	color: white ;
	
`
const SubTitleContainer = styled.div`
	display:grid ;
	align-content:center; 
	width: 100% ;
	
`

const SubTitle = styled.p`
	font-size: 18px ;
	letter-spacing: 3px;
	padding: 0 0 0 12% ;
`

const TeamContainers = styled.div`
	display:grid ;
	grid-template-columns:100% ;
	grid-auto-rows:auto ;
	
	width: 100% ;
	min-height: 100% ;
	/* box-sizing:border-box ; */
`

const TeamMembersContainers = styled.div`
	border-top: solid 2px green;
	/* border:solid 2px red ; */
	/* margin: 0 0 0 12% ; */
	width: 72%;
	height: 30%;
	display:flex ;
	align-items:center ;
	margin-bottom:1% ;
	margin-left:12% ;
	padding-top:3% ;
`

const ProfilePictureContainer = styled.div`
	/* height:100% ; */
`
const ProfilePicture = styled.img``

const TeamMemberNameAndPositionContainer =styled.div`

	margin: 0 0 0 6% ;
	margin-left: 6% ;
`

const TeamMemberName = styled.p`
	font-size: 16px ;
	letter-spacing: 3px;
`
const TeamMemberPosition =styled.p`
	font-size: 12px ;
	letter-spacing: 3px;
`



const IconContainer = styled.div`
	/* box-sizing:border-box ; */
	display:inherit ;
	justify-content:space-between;
	min-width: 6% ;
	margin: 0 9% 0 auto ;
	
`
const Icon = styled.img``
const EmailLink = styled.a``




export {
	ZFNTeamContainer, TitleContainer, Title, SubTitleContainer, SubTitle, TeamContainers, TeamMembersContainers, TeamMemberNameAndPositionContainer, TeamMemberPosition, TeamMemberName, ProfilePictureContainer, ProfilePicture, IconContainer, Icon, EmailLink
}
