import React, { useState } from "react";
import Header from "../components/Header";

const Support = () => {
    const [isFAQOpen, setIsFAQOpen] = useState(null);
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const faqs = [
        {
            question: "How does ShareTo transfer files between PCs?",
            answer: "ShareTo transfers files directly over a local network (WiFi or LAN) using peer-to-peer connections. This means the files are shared directly from one PC to another without being stored on any external servers or databases, ensuring privacy and security.",
        },
        {
            question: "Do I need an internet connection to use ShareTo?",
            answer: "No, ShareTo does not require an internet connection. As long as both devices are connected to the same local network (e.g., the same WiFi network), they can connect and transfer files without needing access to the internet.",
        },
        {
            question: "Is my data stored anywhere on external servers?",
            answer: "No, ShareTo does not store any data on external servers or databases. All files are transferred directly between PCs, so your data remains on your devices and does not leave your local network.",
        },
        {
            question: "What is the maximum file size I can transfer with ShareTo?",
            answer: "The maximum file size depends on your device's capabilities and available storage. Since ShareTo transfers files locally, it’s generally able to handle larger files than some online services, but very large files may still take longer to transfer over WiFi.",
        },
    ];

    const toggleFAQ = (index) => {
        setIsFAQOpen(isFAQOpen === index ? null : index);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactForm({ ...contactForm, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        console.log("Contact Form Submitted:", contactForm);
    };

    return (
        <div className="w-full h-full bg-black text-yellow-500 p-8">
            {/* Include Header */}
            <Header />

            <h1 className="text-3xl font-bold text-center mb-8">Support</h1>

            {/* Flex container for Contact Form and FAQ */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Contact Form on the Left */}
                <div className="w-full lg:w-1/2 bg-[#222222] rounded-xl p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
                    {isSubmitted ? (
                        <p className="text-green-500">Thank you! Your message has been sent.</p>
                    ) : (
                        <form onSubmit={handleFormSubmit}>
                            <label className="block mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={contactForm.name}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 mb-4 rounded-md bg-[#333333] text-yellow-500"
                            />

                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={contactForm.email}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 mb-4 rounded-md bg-[#333333] text-yellow-500"
                            />

                            <label className="block mb-2">Message</label>
                            <textarea
                                name="message"
                                value={contactForm.message}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 mb-4 rounded-md bg-[#333333] text-yellow-500"
                                rows="4"
                            ></textarea>

                            <button
                                type="submit"
                                className="p-2 bg-yellow-500 text-black rounded-md w-full hover:bg-yellow-600"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </div>

                {/* FAQ Section on the Right */}
                <div className="w-full lg:w-1/2 bg-[#222222] rounded-xl p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                    <div>
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left p-3 bg-[#333333] rounded-lg flex justify-between items-center text-yellow-500 font-semibold hover:bg-[#444444]"
                                >
                                    {faq.question}
                                    <span>{isFAQOpen === index ? "-" : "+"}</span>
                                </button>
                                {isFAQOpen === index && (
                                    <p className="mt-2 p-3 bg-[#444444] rounded-lg text-sm text-yellow-300">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
