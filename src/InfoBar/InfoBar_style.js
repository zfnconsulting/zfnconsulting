import styled from "styled-components";
const InfoBarContainer = styled.ul`
	box-sizing: border-box;
	display: flex;
	flex-direction:row ;
	width:100vw ;
	background-color: #0E7458;
	padding-top: 20px ;
	padding-bottom:20px ;
	padding-left: 90px ;
	color:white ;
	margin-bottom:10px ;
	margin-top:0 ;
	@media (max-width: 768px) {
		padding-left: 0;
	}
`
const ListItems=styled.li`
	list-style:none ;
	padding-left:30px ;
	@media (max-width: 768px) {
		padding-left: 10px;
	}
`
const Icon=styled.img`
	width: 12px ;
`
// const =styled.ul
export {
	InfoBarContainer, ListItems, Icon
}
