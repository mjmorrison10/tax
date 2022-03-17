import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import {
  Check,
  ExpandMore,
  Looks3Outlined,
  Looks4Outlined,
  Looks5Outlined,
  LooksOneOutlined,
  LooksTwoOutlined,
} from "@mui/icons-material";
import TestimonialsComp from "../../components/testimonialsComp";
import TitleComp from "./components/title";
import SkeleBar from "../../components/SkeleBar";
import {
  companyName,
  openingHoursInfo,
} from "../../public/Settings/baseSettings";
import PageComingSoon from "../../components/pageComingSoon";

const checkmark = (
  <Check
    sx={{
      color: "secondary.light",
    }}
  />
);

const one = <LooksOneOutlined sx={{ color: "secondary.light" }} />;
const two = <LooksTwoOutlined sx={{ color: "secondary.light" }} />;
const three = <Looks3Outlined sx={{ color: "secondary.light" }} />;
const four = <Looks4Outlined sx={{ color: "secondary.light" }} />;
const five = <Looks5Outlined sx={{ color: "secondary.light" }} />;

function TaxConsultation() {
  return (
    <Box>
      <PageComingSoon label="Developer Note: Page completed. 3/16/22. Text analyzed and changed. Click and ignore. This is used for development purposes." />
      <TitleComp title="Free Tax Consultation" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxWidth={"80ch"}
        margin={"0 auto"}
        gap={1}
      >
        <Box>
          <Typography variant="h4" component={"div"}>
            Qualify for tax relief in minutes!
          </Typography>
          <Typography variant="body">
            {`Your complimentary consultation supplies us with all the essential information we'll require to see if:`}
          </Typography>
          <Typography variant="body2">
            {checkmark}
            you qualify for our services and
          </Typography>
          <Typography variant="body2">
            {checkmark}
            which tax relief package works best for you
          </Typography>
        </Box>

        <Typography gutterBottom variant="body">
          Plus, you earn the opportunity to converse with a tax professional and
          ask any questions you may have concerning tax relief. Our tax
          consultation is non-obligational, and we present it to everyone who
          qualifies via our tax relief survey.
        </Typography>

        <SkeleBar />

        <Accordion sx={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" component={"h2"}>
              What to Expect From Your Free Tax Consultation
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body" gutterBottom>
              {`${companyName} is one of the country’s foremost tax relief companies – and the quickest developing. Our visionary two-phase method of tax relief helped us achieve this status.`}
            </Typography>
            <Typography variant="body" gutterBottom>
              Our success would not be achievable without the initial tax
              consultation. We pre-authorize our clients by suggesting practical
              solutions and giving them access to a free tax consultant.
            </Typography>
            <Typography variant="body" gutterBottom>
              The tax relief survey comprises a few questions to assist us in
              assessing your financial situation. As soon as you finish the
              survey, it is sent instantly to a Resolution Officer for
              consideration.
            </Typography>
            <Typography variant="body" gutterBottom>
              Your Resolution Officer will examine your information and contact
              you to initiate the tax consultation during office hours.
            </Typography>
            <Typography variant="body" gutterBottom>
              Before you converse with a complimentary tax consultant, try to
              calculate the amount the IRS asserts you owe. Furthermore, make
              sure to confirm any unfiled tax years you might have.
            </Typography>
            <Typography variant="body" gutterBottom>
              However, no trouble if you’re not sure how much you owe! We can
              resolve that information for you during the consultation.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" component={"h2"}>
              During the Tax Consultation
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body" gutterBottom>
              The complimentary tax consultation phone call is the first action
              in your journey to tax relief. During your consultation, a
              Resolution Officer will take the time to understand more regarding
              your present tax situation and confirm if you qualify for one of
              our packages.
            </Typography>
            <Typography variant="body" gutterBottom>
              These questions will include:
            </Typography>
            <Typography
              variant="body"
              fontWeight={"bold"}
              gutterBottom
              display={"flex"}
              gap={1}
            >
              {checkmark}your current tax obligation amount (and if it is state
              or federal)
            </Typography>
            <Typography
              variant="body"
              fontWeight={"bold"}
              gutterBottom
              display={"flex"}
              gap={1}
            >
              {checkmark}your monthly expenditures and earnings
            </Typography>
            <Typography
              variant="body"
              fontWeight={"bold"}
              gutterBottom
              display={"flex"}
              gap={1}
            >
              {checkmark}some primary information on any assets you may possess
              (such as a house or a car)
            </Typography>
            <Typography variant="body" gutterBottom>
              Your designated Resolution Officer will be competent to answer any
              questions you may have concerning our strategy, the IRS, and tax
              relief.
            </Typography>
            <Typography variant="body" gutterBottom>
              While some smaller corporations propose free tax counsel
              consultations, our tax attorneys spend their whole day settling
              tax obligations with the IRS. Most of their struggle is devoted to
              relentless negotiation with IRS examiners.
            </Typography>
            <Typography variant="body" gutterBottom>
              Your complimentary tax consultation phone call will last roughly
              thirty minutes and is broken up into three components:
            </Typography>
            <Typography
              variant="body"
              fontWeight={"bold"}
              gutterBottom
              display={"flex"}
              justifyContent={"center"}
              gap={1}
            >
              {one}Your Situation— The Resolution Officer will let you tell them
              how you ended up in tax debt so that we have an accurate
              perspective moving forward.
            </Typography>
            <Typography
              variant="body"
              fontWeight={"bold"}
              gutterBottom
              display={"flex"}
              justifyContent={"center"}
              gap={1}
            >
              {two}The Interview — We ask our questions to decide if you qualify
              for our tax relief program.
            </Typography>
            <Typography
              variant="body"
              fontWeight={"bold"}
              gutterBottom
              display={"flex"}
              justifyContent={"center"}
              gap={1}
            >
              {three}Your Options — After we establish whether you are a
              prospect for tax relief, we will map out the most plausible tax
              relief scenarios and assist you in determining the next steps.
            </Typography>
            <Typography variant="body" gutterBottom>
              {companyName} acknowledges that your time is priceless. Our goal
              is always to be transparent with you. If you don’t qualify, and
              our assistance is not the most suitable choice for your financial
              situation, we will inform you immediately and point you in the
              right direction.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" component={"h2"}>
              After Your Free Tax Consultation
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body" gutterBottom>
              If you qualify for our tax relief program and decide to work with
              us, we will use the subsequent method:
            </Typography>
            <Typography variant="body" gutterBottom display={"flex"} gap={1}>
              {checkmark}
              <Box>
                <Box fontWeight={"bold"}>
                  Discovery Stage, plus Analysis and Strategy:
                </Box>
                {`After your initial tax consultation, we will receive all the essential documents to organize your claim for the most suitable solution imaginable. You will be designated your very own ${companyName} unit to inspect the results and create a method for your claim.`}
              </Box>
            </Typography>
            <Typography variant="body" gutterBottom display={"flex"} gap={1}>
              {checkmark}
              <Box>
                <Box fontWeight={"bold"}>Review and Advise:</Box>{" "}
                {`Before your ${companyName} unit files paperwork for the solution, we will meet with you to communicate our findings and explain our strategy for your permission.`}
              </Box>
            </Typography>
            <Typography variant="body" gutterBottom display={"flex"} gap={1}>
              {checkmark}
              <Box>
                <Box fontWeight={"bold"}>
                  Presentation, Negotiation, and Submission:
                </Box>
                {`Once you consent to our strategy, we will organize your case papers for representation. Then, our specialists will deliver your claim to the IRS (or State) and negotiate until we reach the most acceptable possible solution. After your final approval of the resolution, we will present the claim on your behalf.`}
              </Box>
            </Typography>
            <Typography variant="body" gutterBottom display={"flex"} gap={1}>
              {checkmark}
              <Box>
                <Box fontWeight={"bold"}>Compliance:</Box>
                {`Unlike other companies, ${companyName} sets you up for victory after our preliminary services are finished. By operating with you and offering you mechanisms to stay compliant, we’ll help you evade accumulating tax debt again.`}
              </Box>
            </Typography>
            <Typography variant="body" gutterBottom>
              Throughout our process, you can talk to a tax expert if any
              questions should arise.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" component={"h2"}>
              What If You Don’t Qualify?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body" gutterBottom>
              {`${companyName} needs that our clients owe at least $5,000 in tax debt and/or have unfiled back taxes. If you do not satisfy these standards, our services would most likely cost you more money than you would save.`}
            </Typography>
            <Typography variant="body" gutterBottom>
              {`${companyName} delivers our tax consultation for free; that way, if you do not qualify, you won’t have wasted your cash looking for a complimentary tax recommendation.`}
            </Typography>
            <Typography variant="body" gutterBottom>
              {`Nevertheless, simply because you don’t qualify doesn’t mean tax relief is automatically off the table. You can still contact the IRS and see what options are available.`}
            </Typography>
            <Typography variant="body" gutterBottom>
              Below are several resources you may find useful on your journey to
              tax relief:
            </Typography>
            <Typography
              variant="body"
              gutterBottom
              display={"flex"}
              gap={1}
              alignItems={"center"}
            >
              {checkmark}Contacting the IRS
            </Typography>
            <Typography
              variant="body"
              gutterBottom
              display={"flex"}
              gap={1}
              alignItems={"center"}
            >
              {checkmark}Tax Relief Programs Information
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" component={"h2"}>
              What is the Tax Relief Program?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body" gutterBottom>
              As part of our complimentary tax guidance, your Resolution Officer
              will be capable of explaining in detail what our tax relief
              program is and how we can assist you to navigate its intricacies.
            </Typography>
            <Typography variant="body" gutterBottom>
              {`${companyName} offers tax relief for back taxes, unfiled tax years, and other tax issues and liabilities through the tax relief program. We help our clients obtain the most satisfactory resolution possible with this program.`}
            </Typography>
            <Typography variant="body" gutterBottom>
              The tax relief program delivers tax relief to taxpayers who owe
              more money than they will ever be able to repay to the IRS. Those
              who qualify can immensely decrease their federal tax obligation.
              Under certain occurrences, they can reach 90% or more tax
              deductions.
            </Typography>
            <Typography variant="body" gutterBottom>
              There are four main programs open to taxpayers through our tax
              relief program:
            </Typography>
            <Typography variant="body" gutterBottom display={"flex"}>
              {one}Installment Agreement
            </Typography>
            <Typography variant="body" gutterBottom display={"flex"}>
              {two}Offer in Compromise
            </Typography>
            <Typography variant="body" gutterBottom display={"flex"}>
              {three}Currently Non-Collectible Status
            </Typography>
            <Typography variant="body" gutterBottom display={"flex"}>
              {four}Penalty Abatement
            </Typography>
            <Typography variant="body" gutterBottom>
              Read more about the tax relief program to see what tax relief
              opportunities are available to taxpayers.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" component={"h2"}>
              Does TaxRise Offer Tax Preparation?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body" gutterBottom>
              {`Not only does ${companyName} supply tax relief assistance for personal and business-related tax issues, but we also offer tax preparation.`}{" "}
            </Typography>
            <Typography variant="body" gutterBottom>
              {`Filing tax returns is a complicated financial responsibility that
              every American must satisfy, but ${companyName} can complete filing your
              current and past returns effortless and stress-free.`}
            </Typography>
            <Typography variant="body" gutterBottom>
              Our CPAs will walk you through your tax return and assist you in
              completing any other mandatory IRS forms.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" component={"h2"}>
              {`How Much Will ${companyName}’s Services Cost?`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body" gutterBottom>
              Your Resolution Officer will supply you with further services if
              you qualify for our program. Because each claim is unique and case
              intricacy varies, we cannot give you a quote until your free tax
              consultation.
            </Typography>
            <Typography variant="body" gutterBottom>
              Your Resolution Officer will quote you an evaluated price of your
              solution during the initial tax consultation. However, we base the
              total expenditure on the results from our discovery analysis. Due
              to this approach, we attribute the fee you paid for your discovery
              analysis to your full-resolution payment.
            </Typography>
            <Typography variant="body" gutterBottom>
              Costs are to be decided on a case-by-case basis. The primary
              characteristics considered in your total will be your tax
              liability situation and the selected relief program. Likewise, we
              comprehend that most of our clients are struggling financially,
              and we can work with you to create the most convenient payment
              plan.
            </Typography>
            <Typography variant="body" gutterBottom>
              Not everyone will be qualified for tax relief – that’s why our tax
              consultation is complimentary and non-obligational. We won’t
              compel you to use our service if you prefer not to, and you will
              not be charged a fee simply for communicating with one of our
              agents.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" component={"h2"}>
              What If A Free Tax Consultation Phone Call Doesn’t Work For You?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body" gutterBottom>
              {`${companyName} suggests free tax consultation phone calls Monday through
              Friday, from ${openingHoursInfo.open} to ${openingHoursInfo.close} PST. However, some taxpayers won’t be
              able to find thirty minutes in their busy day, let alone thirty
              minutes within our hours of operation. If you cannot conduct your
              free tax consultation over the phone, we have Resolution Officers
              available to start our procedure through email.`}
            </Typography>
            <Typography variant="body" gutterBottom>
              Your privacy is paramount to us; we advise that you talk to a tax
              specialist over the phone due to the sensitive nature of the
              information that we will consult. Please read our privacy policy
              and terms and conditions for more information on this subject.
            </Typography>
            <Typography variant="body" gutterBottom>
              Nevertheless, we can make exceptions for particular cases. Please
              let our Appointment Manager know which method of communication you
              prefer, and we will connect you with the appropriate Resolution
              Officer for your tax consultation.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <SkeleBar />

        <Typography variant="h4" component={"h2"}>
          Complete Your Free Tax Consultation Today
        </Typography>
        <Typography variant="body">
          Take the first step in your journey to tax relief. Contact
          {companyName} today for a free tax consultation phone call.
        </Typography>
        {/* <Typography variant="body">
          For more information and new 2022 tax relief updates, check out our
          tax blog or follow us on Facebook and Twitter!
        </Typography> */}
        <SkeleBar />
      </Box>
      <TestimonialsComp title={"Testimonials"} />
    </Box>
  );
}

export default TaxConsultation;
