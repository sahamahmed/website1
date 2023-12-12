"use client";
 
import { useState } from "react";
 
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
 
  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    
    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };
    console.log("data",data)
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
 
    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      // reset the form
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
    }
  return (
    
        <form  className=" w-96 mx-auto p-4 bg-gray-400 shadow-md rounded-md flex flex-col justify-center" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="mb-4">
            <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="name"
            >
            Name
            </label>
            <input
            type="text"
            minLength={3}
            maxLength={150}
            required
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-300 text-black  "
            autoComplete="off"
            placeholder="Your Name"
            id="name"
            />
        </div>
        <div className="mb-4">
            <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="email"
            >
            Email
            </label>
            <input
            type="email"
            minLength={5}
            maxLength={150}
            required
            className=" w-full p-2 border border-gray-300 rounded-md bg-gray-300 text-black"
            autoComplete="off"
            id="email"
            placeholder="Your Email"
            />
        </div>
        <div  className="mb-4">
            <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="message"
            >
            Message
            </label>
            <textarea
            rows={4}
            required
            minLength={10}
            maxLength={500}
            name="message"
            className="w-full p-2 border border-gray-300 rounded-md resize-none bg-gray-300 place-holder-black text-black"
            />
        </div>
        <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-700 transition duration-300 w-fit mx-auto"
        >
            Send Message
        </button>
      </form> 
    );
    
}



























// // Form.jsx

// import React from 'react';

// const Form = () => {
//   return (
//     <form className=" w-96 mx-auto p-4 bg-gray-400 shadow-md rounded-md flex flex-col justify-center">
//       <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

//       {/* Name Input */}
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           className="w-full p-2 border border-gray-300 rounded-md bg-gray-300 text-black"
//           placeholder="Your Name"
//           required
//         />
//       </div>

//       {/* Email Input */}
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           className="w-full p-2 border border-gray-300 rounded-md bg-gray-300 text-black"
//           placeholder="Your Email"
//           required
//         />
//       </div>

//       {/* Message Textarea */}
//       <div className="mb-4">
//         <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
//           Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           className="w-full p-2 border border-gray-300 rounded-md resize-none bg-gray-300 place-holder-black text-black"
//           rows= {4}
//           placeholder="Your Message"
//           required
//         ></textarea>
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-700 transition duration-300 w-fit mx-auto "
//       >
//         Send Message
//       </button>
//     </form>
//   );
// };

// export default Form;
