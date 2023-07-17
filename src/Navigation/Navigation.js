import React, {useState} from "react";
import { Link } from "react-router-dom";
import { 
	NavigationContainer, Icon, BrandContainer, Brand, Urls, HeaderContainer
 } from "./Navigation_style";
import info from "../asset/info.json"


function Navigation (){
	const closeIcon = info["navigation"]["closeIcon"]
	const hambergerIcon = info["navigation"]["hambergerIcon"]
	const [icon, setIcon]=useState({
		iconName:"HambergerIcon",
		iconImg:hambergerIcon,
		isOpen:false
	})

	const IconOnclick = ()=>{
		if(icon["isOpen"]){
			setIcon({
				iconName:"HambergerIcon",
				iconImg:hambergerIcon,
				isOpen:false
			})
			
		}else{
			setIcon({
				iconName:"CloseIcon",
				iconImg:closeIcon,
				isOpen:true
			})
		}

	}
	return (
		<NavigationContainer section={info["navigation"].length} open={icon["isOpen"]} className={"NavigationContainer"}>
			<BrandContainer>
				<Link to="/">
					<Brand src={info["navigation"]["brand"]}/>
				</Link>
			</BrandContainer>
			
			<Icon src={icon["iconImg"]} onClick={IconOnclick}/>


			<HeaderContainer section={info["navigation"].length} open={icon["isOpen"]} className='HeaderContainer'>
				{info["navigation"]["navigationItems"].map((val, ind)=>{
					return (
							<Urls key={ind}>
								<Link to={val["link"]} onClick={IconOnclick}>{val["item"]}</Link>
							</Urls>
					)
				})}
			</HeaderContainer>


		</NavigationContainer>
	)
}
export default Navigation
