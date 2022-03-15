import { Box, Typography } from "@mui/material";
import React from "react";
import CardComp from "../../components/CardComp";
import { companyPhoneNumber } from "../../public/Settings/baseSettings";
import TitleComp from "./components/title";

function frequentlyAskedQuestions() {
  const QA = [
    {
      question: "Q: What is Tax Relief and do I qualify?",
      answer: `A: Tax relief is an IRS program put into practice years ago to allow taxpayers to potentially settle tax debts for a fraction of what is owed. And while the IRS does not openly promote these programs, Fidelity Tax Relief specializes in finding the best possible solution for those who qualify. A reputable tax relief company can help you reach a tax relief agreement with the IRS.

      Our knowledgeable experts can stop wage garnishments and bank levies, assist you through tax audits, and help reduce your tax debt. In some cases, you may be able to settle tax debts for much less than was originally owed. The tax relief experts at Fidelity Tax Relief can help resolve all your tax issues and save you the most money.`,
    },
    {
      question:
        "Q: Other companies charge less, so do you have any hidden fees?",
      answer:
        "A: Companies who charge less either hide certain fees or do not provide comprehensives tax debt relief representation. Some companies only submit your offer. Then, they charge more when the IRS rejects the offer or requires further information. Instead of charging piecemeal, we provide comprehensive services in a flat rate. Our fees include tax attorney research, re-filing, and any other event that may arise. The only additional fee we may charge is if the IRS begins to garnish your wages or seizes your assets prior to your signing a contract with us.",
    },
    {
      question: "Q: How do I know this is not a scam?",
      answer:
        "A: Unfortunately, there are many companies out there scamming people during this tough time. We are not one of them. You can rely upon us to assist you with your tax debt relief in a completely legitimate manner. We are accredited by the Better Business Bureau, or BBB, which ensures the authenticity of our business. We’ve also published an article about how Tax Relief Scams.",
    },
    {
      question: "Q: How long does your program take?",
      answer:
        "A: The exact time will depend upon your unique situation. A typical case can take between 8 months to a year to complete. The IRS requires a lot of information, and each request typically takes around 90 days for processing and review by the IRS. We will work with you closely and provide you with updates during the whole process.",
    },
    {
      question:
        "Q: The IRS already levied my account. Will these funds be returned if I file an Offer in Compromise?",
      answer:
        "A: Unfortunately, all payments and credits made, received or applied to the total original tax liability prior to the Offer in Compromise will not be returned to you.",
    },
    {
      question:
        "Q: What if I already have an Installment Agreement but now qualify for an Offer in Compromise?",
      answer:
        "A: If you already have an installment agreement and you qualify for an Offer in Compromise, you still have to make the agreed upon installment payments. However, we can petition the IRS on your behalf to reduce the payment amount or stop the payments altogether.",
    },
    {
      question: "Q: What assets can the IRS seize?",
      answer:
        "A: Almost any of your assets can be seized, including real estate property; salary and wages; bank accounts; retirement accounts including IRAs, 401Ks, pension plans, and social security; alimony; licenses and franchising rights; intellectual property including any copyrights or patents; royalties; assets in court custody; inheritance proceeds; luxury items; and more. However, they cannot take child support or unemployment benefits.",
    },
    {
      question: "Q: What happens if I wait to solve my tax debt?",
      answer:
        "A: If you have already received a notice of action, then the IRS will implement the levy, lien, or wage garnishment right away. Therefore, you should take action right away. Even if you have not yet received information from the IRS, you should handle any federal tax debt as soon as possible. Waiting could lead to penalties and interest that can increase your liability by as much as 70 percent per year, as well as increase your risk of facing action by the IRS.",
    },
    {
      question:
        "Q: Can I just submit an Offer in Compromise or Installment Agreement by myself?",
      answer: `A: Although you can submit these tax relief options yourself, the forms and procedures are difficult to handle correctly. You have to ensure that you follow all tax codes and IRS guidelines perfectly. If there are any errors or emissions, it will be rejected. To get the best tax settlement, you need to work with professionals who are familiar with the tax code and tax relief programs, such as the experienced staff at Fidelity Tax Relief. Call us today at ${companyPhoneNumber}.`,
    },
  ];

  return (
    <Box>
      <TitleComp title="Frequently Asked Questions" />
      <Box
        display={"flex"}
        gap={2}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {QA.map((q, i) => (
          <CardComp question={q.question} answer={q.answer} key={i} />
        ))}
      </Box>
    </Box>
  );
}

export default frequentlyAskedQuestions;
