import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import ZFNTeam from "../ZFNTeam/ZFNTeam";
import CompCCS from "../CompCCS/CompCCS";
import PageNotFound from "../PageNotFound/PageNotFound";
import Navigation from "../Navigation/Navigation";
import InfoBar from "../InfoBar/InfoBar";






function PublicPageRouter (){
	return (
	<Router>
		<InfoBar/>
		<Navigation />
		<Routes>
				<Route path="/" element={<Home/>} exact/>
				<Route path="/ZFN_Team" element={<ZFNTeam/>} exact/>
				<Route path="/Careers" element={<CompCCS page="Careers"/>} exact/>
				<Route path="/Markets" element={<CompCCS page="Markets"/>} exact/>
				<Route path="/*" element={<PageNotFound/>} exact/>
				
		</Routes>
		<Footer/>
		
	</Router>
	
	
	)
}
export default PublicPageRouter
