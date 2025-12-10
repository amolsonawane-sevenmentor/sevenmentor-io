import React from "react";
import AboutUsBanner from "./AboutUsBanner";
import AboutForm from "./AboutForm";
import CoreTeam from "./CoreTeam";
import AboutContent from "./AboutContent";
import StickyButton from "../../../src/components/StickyButton/StickyButton";
import AboveFooterForm from "../Home/AboveFooterForm/AboveFooterForm";
import MissionVision from "./MissionVision";
import InfiniteScroll from "../Home/HiringCompanies/HiringCompanies";

// import HiringCompanies from '../Home/HiringCompanies/HiringCompanies.jsx'

// import CoreTeam from './CoreTeam.jsx'

function About() {
  return (
    <div>
      <AboutUsBanner />
      <AboutForm />
      <MissionVision/>
      <CoreTeam />
      <InfiniteScroll/>
      <AboutContent />
      <AboveFooterForm/>
      <StickyButton
        mailId={"registration@sevenmentor.com"}
        contactNo={"7798058777"}
        bannerTitle={"Individual Course At SevenMentor"}
      />
    </div>
  );
}

export default About;
