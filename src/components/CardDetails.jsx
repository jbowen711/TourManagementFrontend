import React from 'react';

const CardDetails = ({ show, handleClose, handleConfirm }) => {
  if (!show) return null;

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-white/30 backdrop-blur-sm">
      <div className="pointer-events-auto bg-white w-full max-w-2xl shadow-2xl p-5 relative">
        {/*Close*/}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold"
        >
          ✕
        </button>

        {/*Body*/}
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Edit Card Details</h2> {/*large text, semibold, dark gray, margin bottom*/}
        <div className='space-y-4'> {/*Space between each element*/}
            <div>
            <label className='block text-sm font-bold text-gray-700'>
                Name On Card
            </label>
            <input 
            type = 'text'
            placeholder='First Last'
            className='w-full p-2 border border-gray-300 placeholder-gray-400'
            />
            </div>
            <div>
            <label className='block text-sm font-bold text-gray-700'>
                Card Number
            </label>
            <input 
            type = 'text'
            placeholder='1234 5678 9012 3456'
            className='w-full p-2 border border-gray-300 placeholder-gray-400'
            />
            </div>
            <div>
            <label className='block text-sm font-bold text-gray-700'>
                Expiration Date
            </label>
            <input 
            type = 'text'
            placeholder='MM/YY'
            className='w-full p-2 border border-gray-300 placeholder-gray-400'
            />
            </div>
            <div>
            <label className='block text-sm font-bold text-gray-700'>
                Secuirty Code
            </label>
            <input 
            type = 'text'
            placeholder='CCV'
            className='w-full p-2 border border-gray-300 placeholder-gray-400'
            />
            </div>



            
        </div>
        

        
        {/*Confirm*/}
        <div className="mt-6 text-right">
          <button
            onClick={handleConfirm}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
