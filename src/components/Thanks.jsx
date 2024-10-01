// import React from 'react';
// import check from '../assets/icons/icon-success.svg';

// const Thanks = ({ email, handleDismiss }) => {
//   return (
//     <div className="bg-slate-700 h-[660px] flex items-center justify-center">
//         <div className="lg:w-[310px] w-[400px] h-[700px]  lg:h-[340px] bg-white rounded-2xl p-6 ">
//       <div className=" h-40 rounded-lg w-[250px]">
//         <img src={check} alt="" className="h-8 w-8 mb-5" />
//         <h1 className="text-4xl font-bold mb-5 text-darkSlateGrey">
//           Thanks for Subscribing!
//         </h1>
//         <p className="text-xs mb-5 text-charcoalGrey">
//           A confirmation email has been sent to{' '}
//           <span className="text-black">{email}</span>. Please open it and click the button inside to confirm your subscription.
//         </p>
//         {/* Dismiss button */}
//         <button
//           onClick={handleDismiss}
//           className="block w-full text-center py-4 text-sm font-semibold bg-charcoalGrey hover:bg-red-500 text-white rounded-md"
//         >
//           Dismiss message
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Thanks;
















import React from 'react';
import check from '../assets/icons/icon-success.svg';

const Thanks = ({ email, handleDismiss }) => {
  return (
    <div className="bg-slate-700 min-h-screen flex items-center justify-center">
      {/* Mobile first, with adjustments for larger screens */}
      <div className="lg:w-[310px] w-[800%] lg:h-[360px] h-[670px] lg:py-6 py-10 flex flex-col justify-between bg-white lg:rounded-2xl p-4">
        {/* Content section */}
        <div className="h-[10px]  flex-1 flex flex-col items-start justify-start p-4">
          <div className="relative top-5 lg:top-0 mb-5 lg:mb-0">
          <img src={check} alt="Checkmark icon" className="h-16 lg:h-10 lg:w-10 w-16 mb-10 lg:mb-5" />
          <h1 className="lg:text-4xl text-5xl font-bold mb-5 text-darkSlateGrey">
            Thanks for Subscribing!
          </h1>
          </div>
          <p className="lg:text-xs text-sm mb-5 text-charcoalGrey">
            A confirmation email has been sent to{' '}
            <span className="text-black font-bold">{email}</span>. Please open it and click the button inside to confirm your subscription.
          </p>
        </div>
        {/* Dismiss button at the bottom */}
        <button
          onClick={handleDismiss}
          className="block w-full text-center py-4 text-sm font-semibold bg-charcoalGrey hover:bg-red-500 text-white rounded-md"
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default Thanks;
