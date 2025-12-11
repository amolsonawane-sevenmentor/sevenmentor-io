import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import { faqData } from '../../../data/faqData';

export default function FAQSection() {
    const [expandedFaq, setExpandedFaq] = useState(null);

    return (
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-50 to-white p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-400 rounded-xl flex items-center justify-center">
                        <HelpCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">{faqData.title}</h2>
                        <p className="text-sm text-gray-600">{faqData.subtitle}</p>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8">
                <div className="space-y-4 mb-8">
                    {faqData.faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-colors duration-300"
                        >
                            <button
                                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                                className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 text-left"
                            >
                                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                {expandedFaq === faq.id ? (
                                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                )}
                            </button>

                            {expandedFaq === faq.id && (
                                <div className="p-5 bg-white border-t border-gray-200">
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-50 p-8 rounded-xl border border-orange-200 text-center">
                    <h3 className="font-bold text-gray-900 text-xl mb-2">{faqData.contactInfo.message}</h3>
                    <p className="text-gray-600 mb-6">{faqData.contactInfo.cta}</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href={`tel:${faqData.contactInfo.phone}`}
                            className="flex items-center gap-2 bg-white hover:bg-gray-50 border-2 border-orange-200 text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md"
                        >
                            <Phone className="w-5 h-5 text-orange-600" />
                            {faqData.contactInfo.phone}
                        </a>
                        <a
                            href={`mailto:${faqData.contactInfo.email}`}
                            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                        >
                            <Mail className="w-5 h-5" />
                            {faqData.contactInfo.email}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
