"use client"


import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import PopupForm from "../../../../../Forms/PopUpForm/PopUpForm.jsx";

export default function NonITFaqs({ faqData }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = useCallback(() => {
    setShowPopup(true);
  }, []);

  const handleClosePopup = useCallback(() => {
    setShowPopup(false);
  }, []);

  // Divide FAQs equally into two arrays
  const half = Math.ceil(faqData.length / 2);
  const firstHalf = faqData.slice(0, half);
  const secondHalf = faqData.slice(half);

  return (
    <section className="bg-black bg-[radial-gradient(circle_at_10%_20%,rgba(255,97,0,0.03)_0%,transparent_50%),radial-gradient(circle_at_90%_80%,rgba(255,97,0,0.03)_0%,transparent_50%)] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-orange-500 bg-clip-text text-transparent mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-orange-400">
            Everything you need to know about our revolutionary job platform
          </p>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Half of FAQs */}
          <div className="space-y-6">
            {firstHalf.map((faq) => (
              <motion.div
                key={faq.id}
                className="transition-all rounded-lg border border-orange-600/10 bg-white/5 p-6 hover:shadow-xl hover:border-orange-500"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-orange-500 bg-orange-500/10 py-1 px-3 rounded-md">
                    {faq.id}
                  </span>
                  <h3 className="text-lg font-semibold text-orange-500">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-gray-300">
                  <span className="text-orange-500 font-bold">Ans: </span>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Second Half of FAQs */}
          <div className="space-y-6">
            {secondHalf.map((faq) => (
              <motion.div
                key={faq.id}
                className="transition-all rounded-lg border border-orange-600/10 bg-white/5 p-6 hover:shadow-xl hover:border-orange-500"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-orange-500 bg-orange-500/10 py-1 px-3 rounded-md">
                    {faq.id}
                  </span>
                  <h3 className="text-lg font-semibold text-orange-500">
                    {faq.question}
                  </h3>
                </div>
                <p
                  className="text-gray-300 whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{
                    __html: `<span class="text-orange-500 font-bold">Ans: </span>${faq.answer}`,
                  }}
                ></p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleOpenPopup}
            className="py-3 px-6 font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all"
          >
            Didn’t find your query? Request a Callback
          </button>
        </div>

        {/* Popup Form */}
        {showPopup && (
          <PopupForm
            isOpen={showPopup}
            onClose={handleClosePopup}
            title={"Request Callback"}
            id="NonItFaqPopupSubmit"
          />
        )}
      </div>
    </section>
  );
}