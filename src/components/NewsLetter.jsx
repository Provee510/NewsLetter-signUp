// import React, { useState } from 'react';
// import right from '../assets/icons/illustration-sign-up-desktop.svg';
// import check from '../assets/icons/icon-list.svg';
// import Thanks from './Thanks';  

// const Subscribe = () => {
//   const [email, setEmail] = useState('');  // State to track the email input
//   const [error, setError] = useState('');  // State to track the error message
//   const [isSubmitted, setIsSubmitted] = useState(false);  // Track form submission

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();  // Prevent page reload

//     // Validate the email input
//     if (!email) {
//       setError('Valid email required');  // Show error if email is empty
//     } else {
//       setError('');  // Clear the error if email is valid
//       setIsSubmitted(true);  // Set submission status to true to show Thanks component
//     }
//   };

//   // Handle dismiss action to reset the form and state
//   const handleDismiss = () => {
//     setIsSubmitted(false);  // Reset submission status
//     setEmail('');  // Clear email input
//     setError('');  // Clear any error
//   };

//   // submitted show hanks component
//   if (isSubmitted) {
//     return <Thanks email={email} handleDismiss={handleDismiss} />;  component
//   }

//   return (
//     <div className="general-container h-screen flex flex-col lg:flex-row  w-[390px] lg:w-full max-w-none justify-center bg-red-400 lg:bg-gray-800 lg:p-10 px-0">
      
//       {/* Right container */}
//       <div className="right-container w-full h-[50vh] lg:w-[32%] lg:h-auto flex items-center justify-center order-1 lg:order-2 relative lg:top-[10px] ">
//         <div className="w-full lg:w-[530px] h-full lg:h-[579px] relative lg:top-[10px] bg-white flex items-center rounded-r-3xl">
//           <img src={right} alt="Newsletter" className="w-[500px] lg:w-[390px] h-full lg:rounded-3xl lg:h-[540px] object-cover rounded-bl-3xl rounded-br-3xl " />
//         </div>
//       </div>
       
//       {/* Left container */}
//       <div className="left-container w-full lg:w-[40%] h-full lg:h-[550px] bg-white mt-5 lg:mt-0 order-2 lg:order-1 lg:rounded-l-3xl relative lg:top-[10px]">
//         <div className="lg:py-20 p-5 lg:p-10">
//           <h1 className="lg:text-5xl text-4xl font-bold text-darkSlateGrey">Stay updated!</h1>
//           <div>
//             <p className="p-7 relative right-5 text-darkSlateGrey">Join 60,000+ product managers receiving monthly  updates on:</p>
//             <div className="flex gap-3 p-2">
//               <img src={check} alt="" className="h-5 w-5" />
//               <p className="text-sm text-darkSlateGrey">Product discovery and building what matters</p>
//             </div>
//             <div className="flex gap-3 p-2">
//               <img src={check} alt="" className="h-5 w-5" />
//               <p className="text-sm text-darkSlateGrey">Measuring to ensure updates are a success</p>
//             </div>
//             <div className="flex gap-3 p-2">
//               <img src={check} alt="" className="h-5 w-5" />
//               <p className="text-sm text-darkSlateGrey">And much more!</p>
//             </div>
//           </div>

//           {/* Email input and submit button */}
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-5 mt-5">
//               <div className="relative">
//                 <p className="text-sm font-semibold text-darkSlateGrey mb-2 hover:text-gray-900">Email address</p>

//                 {/* Email input field */}
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}  // Update email state on input change
//                   placeholder="email@company.com"
//                   className={`p-[14px] w-[370px] lg:w-full relative right-3 lg:right-0 rounded-md border ${error ? 'border-red-500' : 'border-gray-400'} hover:border-black`}
//                 />

//                 {/* Error message */}
//                 {error && (
//                   <p className="text-red-500 text-xs absolute right-0 top-0 mt-1">
//                     {error}
//                   </p>
//                 )}
//               </div>

//               {/* Submit button */}
//               <div className="w-[370px] lg:w-full bg-darkSlateGrey hover:bg-red-500  flex items-center justify-center rounded-md p-[14px] relative right-3 lg:right-0">
//                 <button type="submit" className="text-white w-full">
//                   Subscribe to monthly newsletter
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default Subscribe;






























import React, { useState } from 'react';
import right from '../assets/icons/illustration-sign-up-desktop.svg';
import check from '../assets/icons/icon-list.svg';
import Thanks from './Thanks';  

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Valid email required');
    } else {
      setError('');
      setIsSubmitted(true);
    }
  };

  const handleDismiss = () => {
    setIsSubmitted(false);
    setEmail('');
    setError('');
  };

  if (isSubmitted) {
    return <Thanks email={email} handleDismiss={handleDismiss} />;
  }

  return (
    <div className="general-container h-screen flex flex-col lg:flex-row  w-[390px] lg:w-full max-w-none justify-center bg-white lg:bg-gray-800 lg:p-10 px-0">
      
      {/* Right container */}
      <div className="right-container w-full lg:w-[32%] lg:h-[550px] flex items-center justify-center order-1 lg:order-2 relative lg:top-0">
        <div className="w-full lg:w-[530px] h-full relative bg-white flex items-center rounded-r-3xl">
          <img src={right} alt="Newsletter" className="w-[500px] lg:w-[370px] lg:h-[500px] h-full lg:rounded-3xl object-cover rounded-bl-3xl rounded-br-3xl" />
        </div>
      </div>
       
      {/* Left container */}
      <div className="left-container w-full lg:w-[40%] lg:h-[550px] bg-white mt-5 lg:mt-0 order-2 lg:order-1 lg:rounded-l-3xl relative lg:top-0">
        <div className="lg:py-20 p-5 lg:p-10 h-full flex flex-col justify-center">
          <h1 className="lg:text-5xl text-4xl font-bold text-darkSlateGrey">Stay updated!</h1>
          <div>
            <p className="p-7 relative right-5 text-darkSlateGrey">Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="flex gap-3 p-2">
              <img src={check} alt="" className="h-5 w-5" />
              <p className="text-sm text-darkSlateGrey">Product discovery and building what matters</p>
            </div>
            <div className="flex gap-3 p-2">
              <img src={check} alt="" className="h-5 w-5" />
              <p className="text-sm text-darkSlateGrey">Measuring to ensure updates are a success</p>
            </div>
            <div className="flex gap-3 p-2">
              <img src={check} alt="" className="h-5 w-5" />
              <p className="text-sm text-darkSlateGrey">And much more!</p>
            </div>
          </div>

          {/* Email input and submit button */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-5 mt-5">
              <div className="relative">
                <p className="text-sm font-semibold text-darkSlateGrey mb-2 hover:text-gray-900">Email address</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@company.com"
                  className={`p-[14px] w-[370px] lg:w-full relative right-3 lg:right-0 rounded-md border ${error ? 'border-red-500' : 'border-gray-400'} hover:border-black`}
                />
                {error && (
                  <p className="text-red-500 text-xs absolute right-0 top-0 mt-1">
                    {error}
                  </p>
                )}
              </div>

              <div className="w-[370px] lg:w-full bg-darkSlateGrey hover:bg-red-500  flex items-center justify-center rounded-md p-[14px] relative right-3 lg:right-0">
                <button type="submit" className="text-white w-full">
                  Subscribe to monthly newsletter
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Subscribe;
