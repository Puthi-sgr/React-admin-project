import React, { useContext } from "react";
import { LanguageModeContext } from "../../languageTheme";
import { Header } from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";

export const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { languageTheme } = useContext(LanguageModeContext);
  const faqTheme = languageTheme?.menu.pages.faq;
  return (
    <Box m="20px">
      <Header title={faqTheme.faqTitle} subtitle={faqTheme.faqSubtitle} />
      <AccordionComponent
        title="User Management"
        question="How can I efficiently manage user roles and permissions within the admin system?"
        colors={colors}
      />
      <AccordionComponent
        title="Data Security"
        question="What measures are in place to ensure the security and privacy of sensitive information in the admin management system?"
        colors={colors}
      />
      <AccordionComponent
        title="Reporting and Analytics"
        question="Can the admin management system generate customized reports and provide real-time analytics for decision-making?"
        colors={colors}
      />
      <AccordionComponent
        title="System Integration"
        question="How can the admin management system be integrated with existing software and databases in our organization?"
        colors={colors}
      />
      <AccordionComponent
        title="Scalability"
        question="Is the admin management system capable of scaling to accommodate growing user bases and increasing data volumes?"
        colors={colors}
      />
      <AccordionComponent
        title="Audit Trails"
        question="Does the admin management system provide comprehensive audit trails for tracking user actions and system changes?"
        colors={colors}
      />
      <AccordionComponent
        title="Customization"
        question="To what extent can the admin management system be customized to meet our organization's specific needs and workflows?"
        colors={colors}
      />
    </Box>
  );
};

const AccordionComponent = ({ title, question, colors }) => (
  <Accordion
    sx={{
      "& .MuiButtonBase-root": {
        gap: "0.25rem",
      },
    }}
  >
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography color={colors.greenAccent[500]} variant="h5">
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails
      sx={{
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: `${colors.greenAccent[300]}33`,
      }}
    >
      <Typography>{question}</Typography>
    </AccordionDetails>
  </Accordion>
);
