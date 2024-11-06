import React, { useState } from 'react';
import assets from '../../../assets';

const Reserve = () => {
    // State variables for each input field
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [totalPeople, setTotalPeople] = useState('');
    const [message, setMessage] = useState('');

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        // Here, you can send the form data to a server or log it
        const formData = { name, email, date, totalPeople, message };
        console.log('Form Data Submitted:', formData);

        // Clear the form fields after submission (optional)
        setName('');
        setEmail('');
        setDate('');
        setTotalPeople('');
        setMessage('');
    };

    return (
        <div
            className="h-auto sm:h-[788px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${assets.images.spoon})` }}
        >
            {/* Semi-transparent overlay for readability */}
            <div className="w-full max-w-screen-xl bg-opacity-60 flex items-center justify-center p-4 sm:p-8">
                <div className="w-full p-4 sm:p-6 md:p-8 rounded-lg shadow-lg bg-opacity-50">
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                        {/* Form Section */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center md:text-left">
                                BOOK YOUR TABLE
                            </h2>
                            <p className="mb-8 text-gray-300 text-sm sm:text-base text-center md:text-left">
                                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                                leo molestie vel, ornare non id blandit netus.
                            </p>

                            {/* Form with handleSubmit function */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name and Email fields */}
                                <div className="flex flex-col sm:flex-row sm:space-x-4 gap-2">
                                    <input
                                        type="text"
                                        placeholder="Your Name *"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full sm:w-72 h-11 px-4 bg-transparent border border-gray-500 rounded text-white placeholder-gray-400"
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full sm:w-72 h-11 px-4 bg-transparent border border-gray-500 rounded text-white placeholder-gray-400"
                                    />
                                </div>

                                {/* Reservation Date and Total People fields */}
                                <div className="flex flex-col sm:flex-row sm:space-x-4 gap-2">
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="w-full sm:w-72 h-11 px-4 bg-transparent border border-gray-500 rounded text-white placeholder-gray-400"
                                        required
                                    />
                                    <input
                                        type="number"
                                        placeholder="Total People"
                                        value={totalPeople}
                                        onChange={(e) => setTotalPeople(e.target.value)}
                                        className="w-full sm:w-72 h-11 px-4 bg-transparent border border-gray-500 rounded text-white placeholder-gray-400"
                                        min="1"
                                        required
                                    />
                                </div>

                                {/* Message field */}
                                <textarea
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full p-4 bg-transparent border border-gray-500 rounded text-white placeholder-gray-400 h-32"
                                ></textarea>

                                {/* Submit button */}
                                <div className="flex justify-center md:justify-start">
                                    <button
                                        type="submit"
                                        className="bg-yellow-500 text-black font-semibold w-[142px] h-[56px] px-6 py-4"
                                    >
                                        BOOK NOW
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Background Image Section */}
                        <div
                            className="hidden md:block w-full md:w-1/2 h-full bg-cover bg-center rounded-lg"
                            style={{
                                backgroundImage: `url(${assets.images.spoon})`,
                                opacity: 0.8,
                            }}
                        >
                            {/* Spoon image displays as a background on the right side for larger screens */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reserve;
