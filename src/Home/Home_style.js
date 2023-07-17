import styled from "styled-components";
const HomeContainer = styled.div`
	grid-area:"content" ;
	box-sizing:border-box ;
	display: grid;
	grid-template-columns:100vw;
	grid-template-rows:repeat(auto, 1fr) ;
	font-family:"Mulish" ;
`

const BackgroundVideoContainer = styled.div`
  box-sizing: border-box;
  background-color:transparent ;
`


const Video = styled.video`
  /* height:81vh ; */
  
  width:100vw ;
  z-index: -1;
  position: absolute;
  object-fit: cover ;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  object-position: center;
  grid-column:1/2 ;
  grid-row:1/3 ;
  @media (max-width: 768px) {
    width:100vw ;
	height:81vh ;
  }
`

const VideoContentContainer = styled.div`
	grid-column:1/2 ;
	grid-row:1/3 ;
	display: grid;
	grid-template-columns:1fr .30fr;
	grid-template-rows:.3fr 1fr .5fr;
	@media (max-width: 768px) {
		grid-template-rows:repeat(3, .5fr) ;
		grid-template-columns:1fr;
  	}
`
const CenterTitle = styled.div`
	font-size:clamp(10px, 50px, 60px) ;
	grid-column:1/3 ;
	grid-row:1/2;
	font-weight:bold ;
	font-family:"Mulish" ;
	color:white ;
	align-self: flex-start ;
	padding-left:9% ;
	@media (max-width: 768px) {
		grid-row:1/2;
		grid-column:1/2 ;
		/* font-size:27px ; */
		font-weight:900 ;
		padding:1% ;
		
	}
  
`
const RightUnorderList = styled.ul`
  	font-size:24px ;
	font-weight:bold ;
	font-family:"Mulish" ;
	color:white ;
	list-style: none;
	display: grid;
	grid-template-columns:1fr ;
	grid-template-rows:repeat(4, 20px);
	grid-row-gap:30px ;
	/* align-content:center ; */
	grid-column:1/3 ;
	grid-row:2/3;
	padding-left:9% ;
	/* grid-row-gap:20px ; */
	/* grid-row-gap:10px ; */
	/* padding-right:3% ; */
	/* text-align:right ; */
	justify-content:flex-start ;
	@media (max-width: 768px) {
		grid-row:2/2;
		grid-column:1/2 ;
		justify-self:left ;
		text-align:left ;
		font-size:12px ;
		grid-row-gap:20px ;
		padding:1% ;
		/* font-weight:10; */
	}
`
const RightListItems = styled.li`
  	font-size:24px ;
	font-weight:bold ;
	font-family:"Mulish" ;
	color:white ;
`

const SubheaderContainer = styled.div`
	grid-column:1/2 ;
  	grid-row: 3/4;
	background-color: white ;
	padding-top:3% ;
	display:inherit ;
	@media (max-width: 768px) {
		padding-top:3% ;
		padding-bottom:3% ;
	}
	/* justify-self:center ; */
`
const SubHeader = styled.div`
  	width: 90.73%;
	height: fit-content ;
	text-align:center ;
	font-family: 'Mulish';
	font-size:21px ;
	justify-self:center ;
`


const GalleryContainer = styled.div`
	grid-column:1/2 ;
  	grid-row: 4/5;
	display:grid ;
	grid-template-columns:repeat(1, 1fr) ;
	grid-template-rows: .25fr 1fr;
	background-color: white ;
	@media (max-width: 768px) {
		grid-template-rows: auto;
	}
`

const GalleryTabContainer = styled.div`
	display: flex;
	flex-direction:row ;
	justify-content:center ;
	width:100vw ;
	padding:0 ;
	margin:0 ;
	padding-top:3% ;

	@media (max-width: 768px) {
		justify-content:space-around ;
		font-weight:bold ;
	}
	

`

const GalleryTab = styled.div`
  	/* border:solid 2px red ; */
	padding:1%;
	width:fit-content ;
	height:fit-content ;
	justify-self:center ;
	background-color:${(props)=>props.selected? "#F2F7F5": "white" } ;
	color:#0E7458 ;
	font-size: 24px ;
	margin:0 ;
	font-weight: ${(props)=>props.selected? "bold": "normal" } ;;
	
`

const GalleryImgContainer = styled.div`
	box-sizing:border-box ;
	background-color:#F2F7F5 ;
	padding-top:3% ;
	padding-bottom:3%;
	grid-row: 2/2;
	grid-column:1/2 ;
  	display:grid ;
	grid-template-columns:repeat(3, minmax(100px, 1fr)) ;
	grid-template-rows: repeat(2, 1fr);
	grid-row-gap:9% ;
	/* border: solid 2px blue; */
	width:100vw ;
	/* @media (max-width: 768px) { */
	@media (max-width: 844px) {
		grid-template-columns:repeat(1, 1fr);
		grid-template-rows:repeat(6, 1fr) ;
		grid-row-gap:3% ;
		/* margin-top:-15px ; */
		padding-bottom: 50%;
	}
	
`
const GalleryImg = styled.img`
	width:300px;
	justify-self: center;
`



export {
	HomeContainer, BackgroundVideoContainer, Video, VideoContentContainer, CenterTitle, RightUnorderList, RightListItems, SubheaderContainer, SubHeader, GalleryContainer, GalleryImgContainer, GalleryImg, GalleryTabContainer, GalleryTab
}





// border: solid 2px blue;