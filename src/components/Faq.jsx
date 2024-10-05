import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Brand from "./Navbar/Brand";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useModal } from "./MyModal";

const faq = [
  {
    q: "Personal data",
    a: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
  },
  {
    q: "Personal data",
    a: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
  },
  {
    q: "Personal data",
    a: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
  },
  {
    q: "Personal data",
    a: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
  },
  {
    q: "Personal data",
    a: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
  },
];
const Faq = () => {
  const [expanded, setExpanded] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width:768px)");
  const { openModal } = useModal();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Brand hideName={true} />
        <Typography variant="h5">
          {isLargeScreen ? "Frequently Asked Questions" : "FAQs"}
        </Typography>
      </div>

      <div>
        {faq?.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {faq.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Typography align="center">
          Got answer or{" "}
          <Link role="button" style={{ color: "var(--primary-bg-color)" }} onClick={()=>openModal("query")}>
            Call Executive <PhoneIcon />
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default Faq;
