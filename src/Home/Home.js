import React,{useState, useEffect} from "react";
import { 
	HomeContainer, BackgroundVideoContainer, Video, VideoContentContainer, CenterTitle, RightUnorderList, RightListItems, SubheaderContainer, SubHeader, GalleryContainer, GalleryImgContainer, GalleryImg, GalleryTabContainer, GalleryTab
	
 } from "./Home_style";
 import info from "../asset/info.json"

function Home (){
	const [galleryImgs, setGalleryImg]=useState([])
	const [gallery, setGallery]=useState(info["HomePageInfo"]["records"]["homeTwo"])
	useEffect(()=>{
		const hold = []
		gallery.map((v)=>{
			if(v["selected"]) {
				v["imgs"].map((val)=>{
					hold.push(val)
				})
			}
		})
		setGalleryImg(hold)
	},[gallery])

	const ChangeGallery = (title)=>{
		const hold = []
		gallery.map((v)=>{
			if (v["title"]===title){
				v["selected"]=true
			}else{
				v["selected"]=false
			}
			hold.push(v)
		})
		setGallery(hold)
		
	}
	return (
		<HomeContainer className="HomesContainer">
			<BackgroundVideoContainer>
				<Video 
				src={info["HomePageInfo"]["records"]["backgroundVideo"]}
				autoPlay 
				loop 
				muted
				type='video/mp4'
				allowFullScreen
				allowfullscreen='true'
				playsInLine
				controls={false}
				playsInline
				/>
			</BackgroundVideoContainer>

			<VideoContentContainer className="VideoHeaderContainer">
				<CenterTitle>
					{info["HomePageInfo"]["records"]["home"]["title"]}
				</CenterTitle>
				<RightUnorderList className="RightUnorderList">
					{info["HomePageInfo"]["records"]["home"]["subTitle"].map((v, i)=>{
						return (
							<RightListItems key={i}>
								{v}
							</RightListItems>
						)
					})}
					
				</RightUnorderList>

			</VideoContentContainer>

			<SubheaderContainer className="SubheaderContainer">
				<SubHeader>
					{info["HomePageInfo"]["records"]["bodyCaption"]["caption"]}
				</SubHeader>	
			</SubheaderContainer>
			

			<GalleryContainer className="GalleryContainer">

				<GalleryTabContainer className="GalleryTabContainer">
					{gallery.map((v, i)=>{
						return(
							<GalleryTab key={i} onClick={()=>ChangeGallery(v["title"])} selected={v["selected"]}>{v["title"]}</GalleryTab>
						)
					})}
				</GalleryTabContainer>

				<GalleryImgContainer className="GalleryImgContainer">
					{galleryImgs.map((v, i)=>{
						// l(v, i)
						return (
							<GalleryImg key={i} src={v}/>
						)
					})}
				</GalleryImgContainer>
			</GalleryContainer>



		</HomeContainer>
	)
}
export default Home
