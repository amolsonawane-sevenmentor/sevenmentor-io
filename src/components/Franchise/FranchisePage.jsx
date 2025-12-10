"use client";
import BuyFranchise from './BuyFranchise.jsx'
import WhyFranchise from './WhyFranchise.jsx'
import FranchiseSupprt from './FranchiseSupport.jsx'
import ContactFranchise from './ContactFranchise.jsx'
// import AboveFooterForm from '../Home/AboveFooterForm/AboveFooterForm.jsx'
import FranchiseAboveFooter from './FranchiseAboveFooter.jsx'
function FranchisePage() {
  return (
    <div>
      <BuyFranchise/>
      <WhyFranchise/>
      <FranchiseSupprt/>
      <ContactFranchise/>

      <FranchiseAboveFooter mailId={"franchise@sevenmentor.com"} mailSubject={"New Franchise Form Submission Received"} userEmailSubject={"Thank You For Your Interest in Franchise - SevenMentor"} formTitle={"Franchise Enquiry Form"} contactNo={"7360000325"} bannerTitle={"Individual Franchise At SevenMentor"} emailRoute={"/franchise-form"} />
    </div>
  )
}

export default FranchisePage
