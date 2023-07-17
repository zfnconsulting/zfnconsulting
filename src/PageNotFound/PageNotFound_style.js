import styled from "styled-components";
const greenColor = "#0E7458"
const blackColor = "#000000"
const PageNotFoundContainer = styled.div`
	font-family:'Mulish' ;
	box-sizing:border-box ;
	width: 100%;
	height: 100%;
	
	position:absolute ;
`
const PageNotFoundSubContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex ;
	flex-direction:column ;
	justify-content: center ;
	align-items:center ;
	text-align: center ;
`
const Error = styled.div`
	color: black ;
	width: 100%;
	font-size:15px ;
	letter-spacing: 20px;

`
const MessageContainer=styled.div`
	display:inline-flex ;
	justify-content: center;
	width: 100%;
	font-size: 45px ;
	padding-top:39px ;
	padding-bottom:39px ;
	letter-spacing: 10px;
`
const Message = styled.div`
	color:${(props)=>props.green? greenColor: blackColor} ;
	padding-right:${(props)=>props.green? "15px": "0"} ;
	font-weight: bold ;
`
const Btn = styled.div`
	background-color:${greenColor} ;
	color:white ;
	padding-top:21px ;
	padding-bottom:21px ;
	padding-left:30px ;
	padding-right:30px ;
	font-size:15px ;
	font-weight: bold ;
	letter-spacing: 3px;
	&:hover{
		background-color:#13A17B ;
		text-decoration: none;
	}
	a:visited{
		text-decoration:none ;
		color:white ;
	}
	a:-webkit-any-link{
		text-decoration:none ;
		color:white ;
	}
`

export {
	PageNotFoundContainer, PageNotFoundSubContainer, Error, Message, MessageContainer, Btn
}
