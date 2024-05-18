import { useState } from 'react';

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
                    Frequently asked questions
                </h1>

                <div className="mt-8 space-y-8 lg:mt-12">
                    {faqData.map((faq, index) => (
                        <div key={index} className="p-6 md:p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                            <button
                                className="flex items-center justify-between w-full"
                                onClick={() => handleToggle(index)}
                            >
                                <h1 className="font-semibold text-gray-700 dark:text-white">
                                    {faq.question}
                                </h1>
                                <span className="text-white bg-blue-500 rounded-full p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        {openIndex === index ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M18 12H6"
                                            />
                                        ) : (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        )}
                                    </svg>
                                </span>
                            </button>
                            {openIndex === index && (
                                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const faqData = [
    {
        question: 'How can I buy from your website?',
        answer: 'First, you need to search and find your desired product. Then click on the product to see the details, and click on the "Add to Cart" button. Finally, click on the "Checkout" button, fill out the form, and click on the "Place Order" button.'
    },
    {
        question: 'How can I make a payment?',
        answer: 'You can pay with your credit card or with your PayPal account.'
    },
    {
        question: 'Can I get a referral discount?',
        answer: 'Yes, you can get a referral discount. You can refer your friend and get a discount.'
    }
];

export default Questions;
