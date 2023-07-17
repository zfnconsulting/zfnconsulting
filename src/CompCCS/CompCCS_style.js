import styled from "styled-components";
const CompCCSContainer = styled.div`
	box-sizing:border-box ;
	width: 100%;
	height: 100%;
	display: grid;
	grid-auto-columns:1fr;
	grid-auto-rows:auto;
	margin-bottom:10% ;
	font-family: 'Mulish' ;
	z-index:1 ;
	grid-row-gap:0 ;
	grid-column-gap:0 ;
`
const PageTitleContainer = styled.div`
	
	display:inherit ;
	align-content:center; 
	width: 100% ;
	height:200px ;
	background-color: #0E7458;	
`
const PageTitle = styled.p`
	padding: 0 0 0 9% ;
	align-content:center ;
	font-size: 24px ;
	letter-spacing: 3px;
	color: white ;
`

const SubTitleContainer = styled.div`
	display:inherit ;
	align-content:center; 
	width: 100% ;
	height:fit-content ;
	padding:0 ;
	margin:0 ;
`
const SubTitle = styled.p`
	font-size: 18px ;
	letter-spacing: 3px;
	padding: 0 0 0 12% ;
`
const SubTitleContent = styled.p`
	width: 72%;
	height: 30%;
	margin: 0 0 0 12% ;
`

// CareersOpportunitiesContainer
const InfoContainer = styled.div`
	width: 100% ;
	min-height: 100% ;
	box-sizing:border-box ;
`

// CareersOpportunitiesSubContainer
const InfoSubContainer= styled.div`
	display: grid ;
	grid-template-columns:1fr ;
	grid-auto-rows:repeat(auto, 1fr) ;
	grid-gap: 10px;
	/* padding:0 ; */
	margin-bottom:100px ;
	height:fit-content ;
`

// CareersOpportunities
const IconAndItemContainer= styled.div`
	box-sizing:border-box ;
	padding-bottom: 1%;
	border-bottom: solid 2px #0E7458;
	margin: 0 0 0 12% ;
	width: 72%;
	display:flex ;
	align-items:center ;
	color:${(props)=>props.show? "#0E7458": "black"};
`

const Icon = styled.img`
	width:30px ;
	padding-right:1% ;

`
// OG works 
const DropDown= styled.div`
	display:${(props)=>props.show? "block": "none"};
	width: 72%;
	margin-left:12% ;
	padding-top: 12px;
	padding-bottom: 30px;
	padding-left: 0;
	padding-right:0;
`


const DropDownItem =styled.div`

`
const HREmail=styled.div`
	font-size: 16px ;
	font-weight:600 ;
`
const ResponsibilitiesContainer =styled.ul`
	
`
const ResponsibilitiesList =styled.li`
	
`
const HRMesage =styled.div`
	font-weight:bold ;
	padding:1% ;
	justify-self:center ;
`



export {
	CompCCSContainer, PageTitleContainer, PageTitle, SubTitleContainer, SubTitle, SubTitleContent, InfoContainer, InfoSubContainer, IconAndItemContainer, Icon, DropDown, DropDownItem, HREmail, ResponsibilitiesContainer, ResponsibilitiesList, HRMesage
}
