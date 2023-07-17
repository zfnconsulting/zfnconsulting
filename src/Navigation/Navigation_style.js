import styled, {css} from "styled-components";
const NavigationContainer = styled.div`
	box-sizing: border-box;
	display: grid;
    grid-template-columns:repeat(2, 1fr);
    grid-template-rows:repeat(1, 1fr);
    padding: 1% 0 1% 0;
    padding-top:1% ;
    padding-bottom:1% ;
    @media (max-width: 768px) {
        ${props => {
            if (props.open){
                return css`
                grid-template-columns:repeat(2, 1fr);
                grid-template-rows:repeat(2, auto-fill);
                `
            }
        }}
    }
`


const Icon = styled.img`
    opacity: 0;
    display: none;
    @media (max-width: 768px) {
        opacity: 1;
        display: block;
        grid-column:2/3 ;
        grid-row:1/2 ;
        justify-self:flex-end ;
        width: 40px;
		padding:3% ;
    }
    
`

const BrandContainer = styled.div`
    box-sizing: border-box;
    align-content:center ;
    color: white ;
    grid-column: 1/2;
    padding-left:18% ;
    @media (max-width: 768px) {  
        padding:3% ;
		/* align-self: center; */
    }
`
const Brand = styled.img`
	width: 94px;
`

const HeaderContainer = styled.div`    
    display: grid;
    grid-template-columns:repeat(4, 1fr) ;
    border-top: 50px solid #0E7458;
    border-left: 50px solid transparent;
    grid-column:2/3 ;
    grid-row:1/2 ;
    
    @media (max-width: 768px) {   
        ${props => {
            if (props.open){
                return css`
                    grid-column:1/3 ;
                    grid-row: 3/3;
                    display: grid;
                    grid-gap:10px ;
                    grid-template-columns:100%;
                    grid-template-rows:repeat(auto, 1fr);
                    border: none;
                    color: red;
                    box-sizing:border-box ;
                    text-align: center;
                    margin-bottom:10px ;
                    margin-top:10px ;
                `
            }else{
                return css`
                    display:none ;
                `
            }
        }}
        
    }
`

const Urls = styled.div`
    color:#FFFFFF ;
    
    margin-top:-33px ;
    a:visited,  a:active, a:focus,  a:link{
        text-decoration: none ;
        color:#FFFFFF ;
        
    }
    &:hover {
        text-decoration: underline 3px;
        text-underline-offset: 10px;
    }
    @media (max-width: 768px) {
        margin:0 ;
        background-color:#0E7458 ;
        color:white;
        text-decoration:none ;
        padding-top:9px ;
        padding-bottom:9px ;
        a:visited,  a:active, a:focus,  a:link{
            text-decoration: none ;
            color:white;
        }
        a:hover {
            text-decoration: underline 3px;
            text-underline-offset: 10px;
            color:white;
        }
    }



    
    
    
    

	
`
export {
	NavigationContainer, Icon, BrandContainer, Brand, Urls, HeaderContainer
}
