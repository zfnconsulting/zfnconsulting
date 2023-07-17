import React from "react";
import { InfoBarContainer, ListItems, Icon } from "./InfoBar_style";

function InfoBar() {
  const items = [
    // <Icon src="images/PhoneIcon.svg" />,
    "info@zfn-consulting.com",
  ];
  return (
    <InfoBarContainer>
      {items.map((v) => {
        return <ListItems>{v}</ListItems>;
      })}
    </InfoBarContainer>
  );
}
export default InfoBar;
