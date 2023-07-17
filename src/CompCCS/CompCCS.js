import React, { useState, useEffect } from "react";
import {
  CompCCSContainer,
  PageTitleContainer,
  PageTitle,
  SubTitleContainer,
  SubTitle,
  SubTitleContent,
  InfoContainer,
  InfoSubContainer,
  IconAndItemContainer,
  Icon,
  DropDown,
  DropDownItem,
  HREmail,
  ResponsibilitiesContainer,
  ResponsibilitiesList,
  HRMesage,
} from "./CompCCS_style";
import info from "../asset/info.json";

function CompCCS({ page }) {
  const [records, setRecords] = useState();

  const [pageTitle, setPageTitle] = useState();
  const [headingOne, setHeadingOne] = useState();
  const [headingTwo, setHeadingTwo] = useState();
  const [headingTwoDescription, setHeadingTwoDescription] = useState();
  const [ArrowLeftIcon, setArrowLeftIcon] = useState();
  const [ArrowDownIcon, setArrowDownIcon] = useState();
  const [hrEmail, setHREmail] = useState();

  const [hrMessage, setHrMessage] = useState();

  useEffect(() => {
    const pageinfo = info[page];
    setPageTitle(pageinfo["titles"]);
    if (pageinfo["titles"] === "Careers")
      setHrMessage(
        <HRMesage>
          For immediate consideration, please send your resume to
          hr@zfn-consulting.com
        </HRMesage>
      );
    console.log(pageinfo["titles"]);
    setHeadingOne(pageinfo["headingOne"]);
    setHeadingTwo(pageinfo["headingTwo"]);
    setHeadingTwoDescription(pageinfo["headingTwoDescription"]);
    setArrowLeftIcon(pageinfo["ArrowLeftIcon"]);
    setArrowDownIcon(pageinfo["ArrowDownIcon"]);
    setHREmail(pageinfo["hrEmail"]);

    setRecords(pageinfo["records"]);
  }, [page]);

  const displayDescription = (position) => {
    const slice = records.slice();
    const hold = [];
    for (let x of slice) {
      if (x["item"] === position) {
        if (x["show"] === false) {
          x["show"] = true;
        } else {
          x["show"] = false;
        }
      } else {
        x["show"] = false;
      }
      hold.push(x);
    }
    setRecords(hold);
  };

  return (
    <CompCCSContainer>
      <PageTitleContainer>
        <PageTitle>{pageTitle}</PageTitle>
      </PageTitleContainer>

      <SubTitleContainer>
        <SubTitle>{headingOne}</SubTitle>
        <SubTitleContent>{headingTwoDescription}</SubTitleContent>
        {hrMessage}
        <SubTitle>{headingTwo}</SubTitle>
      </SubTitleContainer>

      <InfoContainer>
        {records &&
          records.map((v, i) => {
            const arrow = v["show"] ? ArrowDownIcon : ArrowLeftIcon;
            const itemDescription = v["itemDescription"];
            let responsibilities, qualifications;
            if (page === "Careers") {
              responsibilities = v["responsibilities"];
              qualifications = v["Qualifications"];
            }

            return (
              <InfoSubContainer key={i}>
                <IconAndItemContainer show={v["show"]}>
                  <Icon
                    src={arrow}
                    onClick={() => displayDescription(v["item"])}
                  />
                  {v["item"]}
                </IconAndItemContainer>
                <DropDown show={v["show"]}>
                  <DropDownItem>
                    {itemDescription}
                    {responsibilities && (
                      <ResponsibilitiesContainer>
                        {responsibilities.map((res, ind) => {
                          return (
                            <ResponsibilitiesList>{res}</ResponsibilitiesList>
                          );
                        })}
                      </ResponsibilitiesContainer>
                    )}
                    Qualifications
                    {qualifications && (
                      <ResponsibilitiesContainer>
                        {qualifications.map((res, ind) => {
                          return (
                            <ResponsibilitiesList>{res}</ResponsibilitiesList>
                          );
                        })}
                      </ResponsibilitiesContainer>
                    )}
                    <HREmail>
                      {hrEmail &&
                        "For immediate consideration, please send your resume to " +
                          hrEmail}
                    </HREmail>
                  </DropDownItem>
                </DropDown>
              </InfoSubContainer>
            );
          })}
      </InfoContainer>
    </CompCCSContainer>
  );
}
export default CompCCS;
