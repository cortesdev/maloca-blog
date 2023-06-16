import React, { useState } from 'react';
import { faqData } from '../__FAQDATA__';

const Faq = () => {
    const [expandedIndices, setExpandedIndices] = useState([]);

    const handleToggle = (sectionIndex, questionIndex) => {
        const questionId = `${sectionIndex}-${questionIndex}`;
        const isExpanded = expandedIndices.includes(questionId);

        if (isExpanded) {
            // Collapse the question
            setExpandedIndices((prevExpandedIndices) =>
                prevExpandedIndices.filter((index) => index !== questionId)
            );
        } else {
            // Expand the question and collapse others
            setExpandedIndices([questionId]);
        }
    };

    return (
        <section className="mx-auto h-full flex flex-col items-center justify-center">
            <h2 className="text-center text-5xl mb-10 font-bold">
                FAQ
            </h2>
            <div className="faq w-[85%]">
                {faqData.map((section, sectionIndex) => (
                    <div className="faq-block__questions md:flex" key={sectionIndex}>
                        <div className="faq-block--header bg-[#282a57] text-white p-4 md:w-2/5">
                            <h2 className="text-left flex mt-8 faq-block--heading w-full text-3xl">{section.header}</h2>
                        </div>
                        <div className="faq-block__questions_list md:w-2/3">
                            {section.questions.map((qa, questionIndex) => {
                                const questionId = `${sectionIndex}-${questionIndex}`;
                                const isExpanded = expandedIndices.includes(questionId);

                                return (
                                    <div className="faq-block__question-row mt-6 last:mb-10" key={questionId}>
                                        <div>
                                            <ul
                                                className={`${isExpanded ? 'active' : ''} collapse__header flex items-center justify-between`}
                                                onClick={() => handleToggle(sectionIndex, questionIndex)}
                                            >
                                                <li className="collapse__header--text body-heading items-baseline py-6 flex justify-between w-full">
                                                    <span className='text-2xl'> {qa.question}</span>
                                                    <span className={`${isExpanded ? 'active' : ''} collapse__chevron`}></span>
                                                </li>
                                            </ul>
                                            <div
                                                className={`h-full  collapse__content ${isExpanded ? 'expanded fade-in' : 'fade-out'}`}
                                            >
                                                <p className="faq-block__paragraph body-heading text-xl">{qa.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
