import React from "react";
import { Typography, Box } from "@mui/material";
import TitleComp from "./components/title";

function TaxRelief() {
  return (
    <Box>

      <TitleComp title='The Truth about Tax Relief' />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        sx={{ maxWidth: "75ch", margin: "0 auto" }}
      >
        <Typography
          variant="h3"
          color="info.main"
          component={"h2"}
          gutterBottom
          textAlign={"center"}
        >
          Avoiding Tax Relief Scams
        </Typography>
        <Typography variant="body2">
          With uncollected taxes approaching more than 280 Billion and rising,
          the Internal Revenue Service (IRS) has stepped up efforts to collect
          unpaid back taxes from individuals and businesses that have
          outstanding balances due.
        </Typography>
        <Typography variant="body2">
          Unfortunately, those who are can’t pay their back taxes can face
          severe penalties by the IRS, including the seizure of personal or
          business assets in some cases. In the wake of this dilemma, a new type
          of business has sprung up to help delinquent taxpayers cope with their
          tax debts.
        </Typography>
        <Typography variant="body2">
          Known commonly as tax settlement firms, these legal agencies claim
          that they can either drastically reduce or completely eliminate
          whatever the client owes the IRS. Unfortunately, the Tax Relief
          Industry has attracted circling vultures waiting to prey on those who
          are weakened by the threat of IRS action. Arm yourself with the tools
          necessary to defend against their self-serving actions. Start by
          informing yourself about some of the common tax relief scams below and
          reading our tips on how to protect yourself.
        </Typography>
        <Typography
          variant="h3"
          color="info.main"
          component={"h2"}
          gutterBottom
          textAlign={"center"}
        >
          Top Tax Relief Scams
        </Typography>
        <Typography variant="body" color="info.dark" fontWeight={"bold"}>
          Tax Relief Scam #1 – Lead Generation Companies Posing as Tax Relief
          Experts
        </Typography>
        <Typography variant="body2">
          We all know companies buy and sell leads. Unfortunately, that applies
          to the Tax Relief industry as well. Companies that specialize in
          marketing will lead consumers into believing they are dealing with a
          firm that actually does the tax relief work, but do nothing more than
          sell the customer’s information multiple times to actual tax relief
          companies. This leads to never ending phone harassment as your
          information is sold over and over again.
        </Typography>
        <Typography variant="body2">
          These marketing companies have no control over the resolution process
          or even the quality of service, and in some cases, they will sign up a
          consumer with no intention of servicing the client whatsoever.
        </Typography>
        <Typography variant="body" color="info.dark" fontWeight={"bold"}>
          Tax Relief Scam #2 – Collecting Non-Refundable Payments Without Any
          Guarantees
        </Typography>
        <Typography variant="body2">
          One of the most common scams performed by unscrupulous companies is to
          collect payment for results they know are unpredictable, if not
          impossible, to achieve. You’ve probably heard the radio ads where
          former IRS agents claim they can settle your debt for pennies on the
          dollar? What they don’t tell you is that the IRS Offer in Compromise
          program is extremely difficult to qualify for.
        </Typography>
        <Typography variant="body2">
          Be weary of companies that ask you to commit a very large sum of money
          upfront before an investigation is conducted. Our Tax Relief experts
          have years of experience and they understand every case is different.
          The truth you won’t hear is not everyone qualifies for tax relief, but
          at Fidelity Tax Relief, we’ll do everything we can to help you and
          promise transparency and honesty during the process.
        </Typography>
        <Typography variant="body" color="info.dark" fontWeight={"bold"}>
          Tax Relief Scam #3 – The Outright Scam Artists
        </Typography>
        <Typography variant="body2">
          Unfortunately, there are some firms who have outright cheated and
          stole from their clients. These are the firms that are being targeted
          and shut down by the Attorney Generals and who have tarnished the
          industry. In these cases, the unscrupulous companies will enroll many
          clients into a program and collect their money without providing
          adequate services. Some don’t even send the necessary paperwork to the
          IRS.
        </Typography>
        <Typography variant="body2">
          As soon as there are too many complaints or upset consumers, the
          Company will simply change their name and start preying on consumers
          all over again. Adding insult to injury, many of these companies don’t
          provide refunds and leave people even further in debt.
        </Typography>
        <Typography variant="body2">
          When you are dealing with a new tax resolution company, ask yourself;
          does the company make a thorough assessment of the factors above? Do
          they emphasize the importance of these qualifications? Do they make it
          clear that an Offer in Compromise is difficult to obtain? If the
          answer to any of these questions is no, you may be dealing with a
          company that does not have your best interests in mind.
        </Typography>
      </Box>
    </Box>
  );
}

export default TaxRelief;
