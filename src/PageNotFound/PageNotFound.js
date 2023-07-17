import React from "react";
import { Link } from "react-router-dom";
import { 
	PageNotFoundContainer, PageNotFoundSubContainer, Error, MessageContainer, Message, Btn
} from "./PageNotFound_style";
function PageNotFound (){
	return (
		<PageNotFoundContainer>
			<PageNotFoundSubContainer>
				<Error>404 ERROR</Error>
				<MessageContainer>
					<Message green={true}>PAGE</Message>
					<Message> NOT FOUND</Message>
				</MessageContainer>
					<Btn>
						<Link to="/">
							HOMEPAGE
						</Link>
					</Btn>
			</PageNotFoundSubContainer>
		</PageNotFoundContainer>
	)
}
export default PageNotFound
