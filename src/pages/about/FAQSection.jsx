import React, { useState } from "react";

const faqs = [
    {
        question: "What is AKESPMUN?",
        answer:
            "AKESPMUN is a premier Model United Nations conference that fosters diplomacy, leadership, and critical thinking among students.",
    },
    {
        question: "Who can participate?",
        answer:
            "Students from high schools and universities are welcome to participate in AKESPMUN.",
    },
    {
        question: "How can I register?",
        answer:
            "You can register through our website by filling out the registration form on the 'Registrations' page.",
    },
    {
        question: "What are the benefits of participating?",
        answer:
            "Participants develop public speaking, negotiation, and leadership skills while engaging in discussions on global issues.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl text-left mx-auto px-6 py-10">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="focus:outline-none w-full text-left flex justify-between items-center text-xl font-semibold text-gray-900"
                    >
                        {faq.question}
                        <span className="text-gray-500">{openIndex === index ? "-" : "+"}</span>
                    </button>
                    {openIndex === index && (
                        <p className="text-gray-900 text-lg mt-2 text-base">{faq.answer}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQSection;
