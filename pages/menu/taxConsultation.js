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
    <Box
      display={"flex"}
      flexDirection={"column"}
      maxWidth={"80ch"}
      margin={"0 auto"}
      gap={1}
    >
      <TitleComp title="Free Tax Consultation" />
      <Box>
        <Typography variant="h4" component={"div"}>
          Qualify for tax relief in minutes!
        </Typography>
        <Typography variant="body">
          {`  Your free consultation provides us with all the necessary information
          we'll need to see if:`}
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
        Plus, you get the opportunity to talk to a tax expert and ask any
        questions you may have regarding qualifying for tax relief. Our tax
        consultation is non-obligational, and we offer it to everyone who
        qualifies through our tax relief survey.
      </Typography>

      <Accordion>
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
            TaxRise is one of the nation’s top tax relief companies – and the
            fastest growing. Our innovative two-phase approach to tax relief,
            paired with in-house developed software, helped us achieve this
            status.
          </Typography>
          <Typography variant="body" gutterBottom>
            Our success would not be possible without the initial tax
            consultation. We pre-qualify our clients from the beginning by
            offering them realistic resolutions and giving them access to a free
            tax consultant.
          </Typography>
          <Typography variant="body" gutterBottom>
            The tax relief survey contains a few questions to help us evaluate
            your financial situation. As soon as you complete the survey, it is
            sent immediately to a Resolution Officer for review.
          </Typography>
          <Typography variant="body" gutterBottom>
            Your Resolution Officer will review the information you provided
            and, during our office hours, will call you to begin the tax
            consultation.
          </Typography>
          <Typography variant="body" gutterBottom>
            Before you speak with a free tax consultant, try to have a rough
            estimate of the amount the IRS claims you owe. Also, make sure to
            confirm any unfiled tax years you might have.
          </Typography>
          <Typography variant="body" gutterBottom>
            However, if you’re not sure how much you owe – no problem! We can
            determine that information for you during the consultation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
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
            The free tax consultation phone call is the first step in your
            journey to tax relief. During your consultation, a Resolution
            Officer will take the time to learn more about your current tax
            situation and verify if you qualify for the Fresh Start Program.
          </Typography>
          <Typography variant="body" gutterBottom>
            These questions will include:
          </Typography>
          <Typography
            variant="body"
            fontWeight={"bold"}
            gutterBottom
            display={"flex"}
          >
            {checkmark}your current tax debt amount (and if it is state or
            federal)
          </Typography>
          <Typography
            variant="body"
            fontWeight={"bold"}
            gutterBottom
            display={"flex"}
          >
            {checkmark}your monthly expenses and income
          </Typography>
          <Typography
            variant="body"
            fontWeight={"bold"}
            gutterBottom
            display={"flex"}
          >
            {checkmark}some basic information on any assets you may own (such as
            a house or a car)
          </Typography>
          <Typography variant="body" gutterBottom>
            Your assigned Resolution Officer will be able to answer any
            questions you may have regarding our process, the IRS, and tax
            relief.
          </Typography>
          <Typography variant="body" gutterBottom>
            While some smaller companies offer free tax lawyer consultations,
            our tax lawyers spend their entire day resolving tax debt with the
            IRS. Most of their effort is dedicated to rigorous negotiation with
            IRS examiners.
          </Typography>
          <Typography variant="body" gutterBottom>
            Your free tax consultation phone call will last approximately thirty
            minutes and is broken up into three parts:
          </Typography>
          <Typography
            variant="body"
            fontWeight={"bold"}
            gutterBottom
            display={"flex"}
            justifyContent={"center"}
          >
            {one}Your Situation— The Resolution Officer will give you the
            opportunity to tell them how you ended up in tax debt, so that we
            have the proper perspective moving forward.
          </Typography>
          <Typography
            variant="body"
            fontWeight={"bold"}
            gutterBottom
            display={"flex"}
            justifyContent={"center"}
          >
            {two}The Interview — We ask our questions to determine if you
            qualify for the Fresh Start Program.
          </Typography>
          <Typography
            variant="body"
            fontWeight={"bold"}
            gutterBottom
            display={"flex"}
            justifyContent={"center"}
          >
            {three}Your Options — After we confirm whether you are a candidate
            for tax relief, we will map out the most likely tax relief scenarios
            and help you determine the next steps.
          </Typography>
          <Typography variant="body" gutterBottom>
            TaxRise realizes that your time is valuable. Our objective is always
            to be 100% upfront with you. If you don’t qualify, and our services
            are not the best option for your financial situation, we will tell
            you right away and help point you in the right direction.
          </Typography>
          <Typography variant="body" gutterBottom>
            TaxRise realizes that your time is valuable. Our objective is always
            to be 100% upfront with you. If you don’t qualify, and our services
            are not the best option for your financial situation, we will tell
            you right away and help point you in the right direction.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
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
            If you qualify for the Fresh Start Program and choose to work with
            us, we will use the following process:
          </Typography>
          <Typography variant="body" gutterBottom display={"flex"}>
            {checkmark}
            <Box>
              <Box fontWeight={"bold"}>
                Discovery Phase, plus Analysis and Strategy:
              </Box>{" "}
              After your initial tax consultation, we will acquire all necessary
              documents to prepare your case for the best resolution possible.
              You will be assigned your very own TaxRise team, who will review
              the findings and create a strategy for your case.
            </Box>
          </Typography>
          <Typography variant="body" gutterBottom display={"flex"}>
            {checkmark}
            <Box>
              <Box fontWeight={"bold"}>Review and Advise:</Box> Before your
              TaxRise team files paperwork for the resolution, we will meet with
              you to share our findings and present our strategy for your
              approval.
            </Box>
          </Typography>
          <Typography variant="body" gutterBottom display={"flex"}>
            {checkmark}
            <Box>
              <Box fontWeight={"bold"}>
                Presentation, Negotiation, and Submission:
              </Box>{" "}
              Once you approve of our plan, we will prepare your case documents
              for presentation. Then, our experts will present your case to the
              IRS (or State) and negotiate until we achieve the best possible
              resolution. After your final approval of the resolution, we will
              submit the case on your behalf.
            </Box>
          </Typography>
          <Typography variant="body" gutterBottom display={"flex"}>
            {checkmark}
            <Box>
              <Box fontWeight={"bold"}>Compliance:</Box> Unlike other companies,
              TaxRise sets you up for success after our primary services are
              complete. By working with you and offering you tools to stay
              compliant, we’ll help you avoid accumulating tax debt again.
            </Box>
          </Typography>
          <Typography variant="body" gutterBottom>
            Throughout our process, you can talk to a tax expert if any
            questions should arise.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
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
            TaxRise requires that our clients owe at least $5,000 in tax debt
            and/or have unfiled back taxes. If you do not meet these criteria,
            our services would most likely cost you more money than you would
            end up saving.
          </Typography>
          <Typography variant="body" gutterBottom>
            TaxRise offers our tax consultation for free; that way, if you do
            not qualify, you won’t have wasted your money looking for free tax
            advice.
          </Typography>
          <Typography variant="body" gutterBottom>
            However, just because you don’t qualify doesn’t mean tax relief is
            automatically off the table. You can still reach out to the IRS and
            see what options are available to you.
          </Typography>
          <Typography variant="body" gutterBottom>
            Below are several resources you may find helpful on your journey to
            tax relief:
          </Typography>
          <Typography variant="body" gutterBottom display={"flex"}>
            {checkmark}Contacting the IRS
          </Typography>
          <Typography variant="body" gutterBottom display={"flex"}>
            {checkmark}Tax Relief Programs Information
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" component={"h2"}>
            What is the IRS Fresh Start Program?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body" gutterBottom>
            As part of our free tax advice, your Resolution Officer will be able
            to explain in detail what the Fresh Start Program is and how we can
            help you navigate its complexities.
          </Typography>
          <Typography variant="body" gutterBottom>
            TaxRise offers tax relief for back taxes, unfiled tax years, and
            various other tax issues and penalties through the Fresh Start
            Program. With this program, we help our clients receive the best
            resolution possible.
          </Typography>
          <Typography variant="body" gutterBottom>
            The Fresh Start Program provides tax relief to taxpayers who owe
            more money than they will ever be able to repay to the IRS. Those
            who qualify can significantly reduce their federal tax debt. Under
            certain circumstances, they can achieve tax reductions of 90% or
            more.
          </Typography>
          <Typography variant="body" gutterBottom>
            There are four main programs available to taxpayers through the
            Fresh Start Program:
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
            Read more about the Fresh Start Program to see what tax relief
            opportunities are available to taxpayers.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
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
            Not only does TaxRise provide tax relief services for personal and
            business-related tax problems, but we also offer tax preparation.
          </Typography>
          <Typography variant="body" gutterBottom>
            Filing tax returns is a complex financial obligation that every
            American must complete, but TaxRise can make filing your current and
            past returns painless and stress-free.
          </Typography>
          <Typography variant="body" gutterBottom>
            Our CPAs will walk you through your tax return and help you complete
            any other required IRS forms.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" component={"h2"}>
            How Much Will TaxRise’s Services Cost?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body" gutterBottom>
            If you qualify for our program, your Resolution Officer will provide
            you with a quote for further services. Because each case is unique
            and case complexity varies, we cannot provide you with a quote until
            your free tax consultation.
          </Typography>
          <Typography variant="body" gutterBottom>
            Your Resolution Officer will quote you an estimated cost of your
            resolution during the initial tax consultation. However, we base the
            total cost on the findings from our discovery analysis. Due to this
            process, we attribute the fee that you paid for your discovery
            analysis to your total resolution fee.
          </Typography>
          <Typography variant="body" gutterBottom>
            Costs must be determined on a case-by-case basis. The primary
            factors considered in your total will be your tax liability
            situation, as well as the chosen relief program. Similarly, we
            understand that most of our clients are struggling financially, and
            we can work with you to create the most suitable payment plan.
          </Typography>
          <Typography variant="body" gutterBottom>
            Not everyone will be eligible for tax relief – that’s why our tax
            consultation is free and non-obligational. We won’t force you to use
            our service if you choose not to, and you will not be charged a fee
            merely for speaking with one of our representatives.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
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
            TaxRise offers free tax consultation phone calls Monday through
            Friday, from 9 AM to 6 PM PST. However, some taxpayers won’t be able
            to find thirty minutes in their busy day, let alone thirty minutes
            within our hours of operation. If you cannot complete your free tax
            consultation over the phone, we have Resolution Officers available
            to begin our process via email.
          </Typography>
          <Typography variant="body" gutterBottom>
            Your privacy is important to us; we recommend that you talk to a tax
            expert over the phone due to the sensitive nature of the information
            that we will discuss. For more information on this subject, please
            read our privacy policy and terms and conditions.
          </Typography>
          <Typography variant="body" gutterBottom>
            Nevertheless, we can make exceptions for certain circumstances.
            Please let our Appointment Manager know which method of contact you
            would prefer, and we will connect you with the appropriate
            Resolution Officer for your tax consultation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" component={"h2"}>
            title
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body" gutterBottom>
            comment
          </Typography>
        </AccordionDetails>
      </Accordion> */}

      <Typography variant="h4" component={"h2"}>
        Complete Your Free Tax Consultation Today
      </Typography>
      <Typography variant="body">
        Take the first step in your journey to tax relief. Contact TaxRise today
        for a free tax consultation phone call.
      </Typography>
      <Typography variant="body">
        For more information and new 2022 tax relief updates, check out our tax
        blog or follow us on Facebook and Twitter!
      </Typography>

      <TestimonialsComp title={"Testimonials"} />
    </Box>
  );
}

export default TaxConsultation;
