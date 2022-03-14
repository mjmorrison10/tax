import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function commonIrsNotices() {
  const notices = [
    {
      notice: "CP10 Notice",
      title: "Tax Return Miscalculation",
      saying:
        "Your return appeared to have an error or miscalculation, and the IRS has made changes to it. These changes may impact the estimated tax payment you requested to be applied to your next tax year.",
      resolve:
        "If you do not agree with the changes made, you can review your account by contacting the IRS directly.",
    },
    {
      notice: "CP12 Notice",
      title: "Tax Return Error",
      saying:
        "This notice informs you that a miscalculation on your tax return was corrected by the IRS. If you agree with the changes the IRS made to your return, you do not need to do anything and your return should arrive within 4-6 weeks.",
      resolve:
        "Please read this notice carefully as it will outline what the problems were and suggest additional steps for you to take. Also, adjust this year’s estimated tax payments to avoid any possible underpayments of upcoming taxes.",
    },
    {
      notice: "CP23 Notice",
      title: "Correction on Return",
      saying:
        "The IRS made changes to your return because errors were found between the amount of estimated tax payments on your tax return and the amount posted to your account.",
      saying2:
        "Because of these changes, you have a balance due. Read this carefully as it will explain why you owe money on your taxes, and check the list of payments the IRS applied to your account to ensure all the payments you made were applied.",
      resolve:
        "If you agree with the changes, pay the full amount by the date shown on your notice, and if you are unable to pay the full amount by the date shown you may be able to set up a payment plan. If you disagree with the changes made, contact the IRS at the toll-free number listed on your notice.",
    },
    {
      notice: "CP49 Notice",
      title: "Error Resulting in Balance Due",
      saying:
        "This notice is informing you that the IRS used your whole tax refund to pay a tax debt. Your notice will explain how they used your refund.",
      resolve:
        "No action is needed, however if you feel this is a mistake you should contact the IRS or another tax professional for help.",
    },
    {
      notice: "CP90 Notice",
      title: "Paid Debt with Return",
      saying:
        "This notice is informing you of the IRS’s intent to levy certain assets. They have previously sent you a notice regarding the issue with your account, but your balance is still unpaid.",
      resolve:
        "Read your notice carefully as it explains what steps you need to take within 30 days of your notice to prevent the levy from being issued.",
    },
    {
      notice: "CP297 Notice",
      title: "Intent to Levy",
      saying:
        "The IRS has sent you this notice to inform you of a levy issued and your right to a hearing. They have previously sent you a notice regarding the issue with your account, but your balance is still unpaid.",
      resolve:
        "Read your notice carefully as it explains what steps you need to take. If you feel this is a mistake,  call the IRS or another tax professional immediately.",
    },
    {
      notice: "CP503 Notice",
      title: "Issued Levy",
      saying:
        "This notice alerts you that you have not followed up from the previous letters and that you will only have 10 days to comply before future negligent actions are taken.",
      saying2:
        "Upon receiving this notice, you have a few options but it is imperative you act immediately.",
      resolve:
        "The first and most beneficial option is by paying the total owed amount in full. Paying your account off will not only eliminate your tax debt but will prevent future damages to be collected.",
      resolve2:
        "If you cannot pay your balance in its entirety, you can opt-in for a repayment plan that allows you to pay a partial amount of your debt every month. If this feels like the best option for you, do not wait until your 10 days are over; contact the agency immediately.",
    },
    {
      notice: "CP504B Notice",
      title: "Immediate Action Required",
      saying:
        "This notice informs you that you have an unpaid amount due on your account, and if it is not paid immediately the IRS will levy certain property or rights to property and apply it to pay the amount you owe.",
      resolve:
        "Read this notice carefully it will tell you your due date, amount due, and offer payment options for you. You must make your payments by the due date, or set up a payment plan if you cannot pay in full.",
    },
    {
      notice: "CP2005 Notice",
      title: "Final Notice of Intent to Levy",
      saying:
        "The IRS accepted the information you sent them and they are not going to change your tax return. They have closed their review of your account.",
      resolve: "You do not need to take any further actions.",
    },
    {
      notice: "Letter 668D/LP68",
      title: "Accepted Change of Information",
      before:
        "The 668 Form Series is a fleet of letters sent by the IRS to taxpayers indicating actions are being taken on their personal assets, such as a tax lien, tax levy, wage garnishment, or a release of any of the sort.",
      saying:
        "Receiving Letter 668D is an indication from the IRS saying that your debt obligations have been satisfied. As part of the bylaws of this letter, any and all levies placed on your tangible and intangible assets will be lifted.",
      saying2:
        "Alternatively, this notice can be sent once the time limit has expired for the IRS to make a collection on a debt, or if the agency concluded the garnishment was a mistake.",
      saying3:
        "You are not the only one being sent the letter; your bank, employer, and any other financial institutions will be notified of your released levy. This will only benefit you, as it will increase your credit score and re-up your eligibility for applying for a loan.",
      resolve:
        "If you received this letter intentionally or unintentionally, it is recommended to call the IRS immediately to confirm this is correct. If you need further assistance on how to execute this, it is recommended you consult a tax professional.",
    },
    {
      notice: "CP11 Notice",
      title: "Tax Lien / Levy Lifted",
      saying:
        "This notifies you that the IRS has found an error on your tax return and, as a result, you owe money on your taxes.",
      resolve:
        "It is important to carefully read this notice as it will outline what the problems were and suggest additional steps for you to take. If you disagree with the changes the IRS has made, contact them within 60 days of receiving your notice.",
    },
    {
      notice: "CP14 Notice",
      title: "Tax Return Error (Balance Due)",
      saying:
        "Simply put, this notice is sent by the IRS when you owe money on unpaid taxes. ",
      resolve:
        "This notice must be read carefully as it will explain how much you owe as well as how to pay it. You must pay the amount listed on this notice by the date listed, unless you are unable to pay in which case you may be able to arrange a payment plan.",
    },
    {
      notice: "CP24 Notice",
      title: "Notice of Amount Owed",
      saying:
        "The IRS has made changes to your tax return because they found a difference between the amount of estimated tax payments on your tax return and the amount posted to your account.",
      saying2: "Because of these changes, you may hold an over-payment credit.",
      resolve:
        "Carefully read through and check the list of payments the IRS applied to your account to ensure all the payments you made were applied.",
      resolve2:
        "If you disagree with the changes made, contact the IRS toll-free at the number listed on your notice.",
    },
    {
      notice: "CP54G Notice",
      title: "Over-Payment Credit",
      saying:
        "This notifies you that the tax return you submitted shows a different name or ID number from the information the IRS has on file for your account.",
      resolve:
        "Please provide the IRS with the requested information in order for them to properly process your refund.",
    },
    {
      notice: "CP91 Notice",
      title: "Incorrect Name/ ID",
      saying:
        "The IRS is notifying you of their intent to levy your Social Security benefits. Your balance is still unpaid, and they intend to take 15% of your Social Security benefits as payment.",
      resolve:
        "Read your notice carefully as it explains what steps you need to take within 30 days of your notice to prevent the levy from being issued.",
    },
    {
      notice: "CP501 Notice",
      title: "Intent to Levy (Benefits)",
      saying:
        "This informs you that you have a balance due (money you owe to the IRS) on one of your tax accounts.",
      resolve:
        "Read this notice carefully as it should answer your initial questions. It will tell you your due date, amount due, and offer payment options for you. You must make your payments by the due date, or set up a payment plan if you cannot pay in full.",
    },
    {
      notice: "CP504 Notice",
      title: "Balance Due",
      saying:
        "By the time you are mailed this notice, you should have already received plenty of previous notices from the IRS, such as the CP501/502 and CP503, which instruct you to take action on your back taxes.",
      saying2:
        "The CP504 is your final notice to pay of your amount before consequences are made by the IRS.",
      resolve:
        "When dealing with the CP504, there is a very important decision to be made; take the necessary actions to pay off your tax debt, or face collection protocols from the IRS.",
      resolve2:
        "Paying off the entire amount owed will and cease any more threats or penalties from the IRS. If you cannot pay the full amount, you can still set up a repayment plan, but your chances of getting approval dramatically diminish with each day that passes.",
      resolve3:
        "If you feel the amount the IRS claims you owe is incorrect, you can still contact the IRS about the matter and appeal it over the phone.",
    },
    {
      notice: "CP523 Notice",
      title: "Final Notice to Pay",
      saying:
        "The CP523 is a letter from the IRS informing you of their intent to terminate your repayment plan and seize, or levy, your assets. The reason the IRS would send this termination letter is due to a defaulted payment.",
      saying2:
        "You may have received a CP521 recently before this, which highlights your recent missed payment. For whatever reason, it may be, a defaulted payment may have resulted from one of these commonly made mistakes:",
      list: "Failure to make a monthly payment (most common)",
      list2: "Failure to provide the IRS information upon their request",
      list3: "Failure to pay the required monthly installment amount",
      saying3:
        "Upon receiving the CP523 notice, it does not mean immediate termination of an installment agreement. Your account will go into the IRS’ systems as “default status”, which is removable via a CAP appeal.",
      resolve:
        "A CAP appeal allows you to re-examine the IRS’ reasoning as to why the defaulted you and can offer the possibility of reinstatement for your repayment plan.",
      resolve2:
        "The IRS allows up to 30 days after the agreement is terminated to submit an appeal, which if approved could save you from paying the entire amount immediately.",
      resolve3:
        "If you plan on submitting a CAP appeal, be sure you are referencing the date stated on the notice, and NOT the date you received it in the mail. There are no exceptions for late appeals, which makes it all the more important to submit your claim in a timely manner.",
    },
    {
      notice: "CP2051 Notice",
      title: "Intent to Cancel Repayment",
      saying:
        "The IRS needs you to contact them as soon as possible. They have received information not reported on your tax return.",
      resolve:
        "Read the notice carefully as it explains what information the IRS has already received. Complete the response form sent with your notice regardless of if the information is correct or incorrect.",
    },
    {
      notice: "LT11/Letter 1058",
      title: "Incorrect Information Collected",
      saying:
        "This letter is a notice explaining the IRS intends to issue a levy against your bank accounts, wages, or other assets because you still have a balance due.",
      saying2:
        "It is informing you that they will begin searching for other assets on which to issue a levy also, and may file a Federal Tax Lien if they have not already done so.",
      resolve:
        "You must pay the amount shown on the notice, or call the number provided to set up a payment plan.",
    },
  ];

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Typography variant="h3" component={'h1'} textAlign={'center'} color="info.dark" >Common IRS Notices</Typography>
      {notices.map((n, i) => (
        <Box key={i} display={"flex"} flexDirection={"column"}>
          <Accordion
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}
            sx={{ mb: 1 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography color='info.main' component={'h2'} fontWeight={'bold'} sx={{ width: "33%", flexShrink: 0 }}>
                {n.notice}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {n.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <Typography variant="body" component={'h3'} fontWeight={"bold"}>
                What it's saying
              </Typography>
              <Typography variant="body">{n.saying}</Typography>
              {n.saying2 && <Typography variant="body">{n.saying2}</Typography>}

              {n.list && (
                <Box component={"ul"} display={"flex"} flexDirection={"column"}>
                  {n.list && (
                    <Typography variant="body" component={"li"}>
                      {n.list}
                    </Typography>
                  )}
                  {n.list2 && (
                    <Typography variant="body" component={"li"}>
                      {n.list2}
                    </Typography>
                  )}
                  {n.list3 && (
                    <Typography variant="body" component={"li"}>
                      {n.list3}
                    </Typography>
                  )}
                </Box>
              )}

              {n.saying3 && <Typography variant="body">{n.saying3}</Typography>}
              <Typography variant="body" component={'h3'} fontWeight={"bold"}>
                How to resolve it
              </Typography>
              <Typography variant="body">{n.resolve}</Typography>
              {n.resolve2 && (
                <Typography variant="body">{n.resolve2}</Typography>
              )}
              {n.resolve3 && (
                <Typography variant="body">{n.resolve3}</Typography>
              )}
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
}

export default commonIrsNotices;
