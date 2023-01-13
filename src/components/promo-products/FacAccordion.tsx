import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useEffect, useState } from "react";
import type { FC } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { Fade } from "react-reveal";

export interface AccordionProps {
  question: string;
  answer: string;
  expanded: boolean;
  panel: string;
  handleChange: (question: string) => any;
}

const FacAccordion: FC<AccordionProps> = (props) => {
  const { question, answer, handleChange, panel, expanded } = props;

  return (
    <Fade bottom>
      <div className="w-full h-full flex flex-col items-start justify-center gap-4 transition-all duration-1000 miniTablet:max-w-[90%] miniTablet:pl-[2rem] md:pl-0">
        <Accordion
          expanded={expanded}
          onChange={handleChange(panel)}
          style={{
            cursor: `none`,
            boxShadow: `none`,
            background: `#f5f5f5`,
            borderRadius: 0,
          }}
          className=" w-full pb-1 shadow-none border-b border-gray-300 rounded-none miniTablet:pb-[2rem] miniTablet:pt-[2rem]"
        >
          <AccordionSummary
            expandIcon={
              expanded ? (
                <IoIosRemove className={`text-gray-600 text-xl`} />
              ) : (
                <IoMdAdd className={`text-gray-600 text-xl`} />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <span className="w-full text-lg font-bold text-[#0A083A]  transition-all duration-700 flex justify-between items-center lg:text-xl">
              {question}
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="text-xs lg:text-sm mini2xl:text-base md:pr-[65%]">
              {answer}
            </span>
          </AccordionDetails>
        </Accordion>
      </div>
    </Fade>
  );
};

export default FacAccordion;
