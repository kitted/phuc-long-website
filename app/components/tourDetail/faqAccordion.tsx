"use client";

import type React from "react";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

export default function FAQAccordion({ data }: any) {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [expandAll, setExpandAll] = useState<boolean>(false);

  const faqItems: FAQItem[] = [
    {
      question: "What is a definite departure?",
      answer: (
        <div className="space-y-4">
          <p>
            A departure is shown as 'Definite Departure' once it has reached a
            minimum number of guests. That particular departure will definitely
            run, barring any extraordinary circumstances.
          </p>
          <p>
            We update these regularly, and you can book any departure. While it
            is highly unlikely a departure doesn't meet the minimum number of
            guests, you will be offered the best alternative dates or a full
            refund of any payment made if this is the case.
          </p>
          <p>
            If there are ever any changes to your departure, we will contact
            you.
          </p>
        </div>
      ),
    },
    {
      question:
        "How can I book flights for my tour? What about extra hotel nights?",
      answer: (
        <p>
          You can book flights through our travel partners or on your own. For
          extra hotel nights, we offer pre and post-tour accommodation options
          that can be added during the booking process. Contact our customer
          service team for assistance with coordinating your flights and tour
          dates.
        </p>
      ),
    },
    {
      question: "How much is the deposit for a Trafalgar tour?",
      answer: (
        <p>
          The standard deposit for a Trafalgar tour is typically 10% of the
          total tour price or a minimum amount depending on the tour selected.
          This deposit secures your spot on the tour and is required at the time
          of booking. The full balance is usually due 45-90 days before
          departure, depending on the specific tour.
        </p>
      ),
    },
    {
      question: "What are the different kinds of experiences available?",
      answer: (
        <p>
          Trafalgar offers a variety of experiences including Be My Guest dining
          with locals, Hidden Gems not found in guidebooks, Local Specialists
          who share insider knowledge, and Authentic Accommodations that reflect
          the destination's culture. We also offer Cultural Insights, scenic
          drives, and opportunities to taste local cuisine throughout your
          journey.
        </p>
      ),
    },
    {
      question: "Can I join a Trafalgar tour as a solo traveller?",
      answer: (
        <p>
          Yes, solo travelers are welcome on all Trafalgar tours. You can choose
          to share a room with another solo traveler of the same gender (subject
          to availability) to avoid single supplements, or you can opt for your
          own room by paying a single supplement. Our tours are designed to be
          social, making them perfect for solo travelers looking to meet new
          people.
        </p>
      ),
    },
    {
      question: "Where can I find room options?",
      answer: (
        <p>
          Room options are available during the booking process on our website
          or through your travel agent. You can select from single, twin/double,
          or triple rooms depending on availability. Special requests such as
          adjoining rooms or specific bed configurations can be noted at the
          time of booking but are subject to availability upon arrival.
        </p>
      ),
    },
    {
      question: "How can I apply my past guest discount?",
      answer: (
        <p>
          Past guests can receive a 5% discount on land-only portions of their
          next trip. To apply your discount, simply provide your past guest
          number during the booking process. If you don't have your number, our
          customer service team can look it up for you using the details from
          your previous booking. The discount will be automatically applied to
          your final payment.
        </p>
      ),
    },
  ];

  const toggleQuestion = (index: number) => {
    if (expandAll) return;
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const toggleExpandAll = () => {
    setExpandAll(!expandAll);
    if (!expandAll) {
      setExpandedIndex(-1);
    }
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 max-sm:text-2xl">
          Frequently asked questions
        </h2>
        <button
          onClick={toggleExpandAll}
          className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
        >
          Expand All
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={expandAll ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>
        </button>
      </div>

      <div className="space-y-4 border-t border-gray-200">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center py-4 px-4 text-left focus:outline-none"
            >
              <span className="font-medium text-gray-700">{item.question}</span>
              <span className="ml-6 flex-shrink-0">
                {expandAll || expandedIndex === index ? (
                  <Minus className="h-6 w-6 text-gray-500" />
                ) : (
                  <Plus className="h-6 w-6 text-gray-500" />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                expandAll || expandedIndex === index
                  ? "max-h-96 pb-4 px-4"
                  : "max-h-0"
              }`}
            >
              <div className="prose prose-sm max-w-none text-gray-600">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
