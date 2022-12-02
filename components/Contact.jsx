import React from 'react';

const Contact = () => {
  return (
    <div className='m-auto h-screen max-w-[1240px] p-4'>
      <h1 className='p-4 text-center text-2xl font-bold'>Let's works together</h1>
      <form className='m-auto max-w-[600px]'>
        <div className='grid grid-cols-2 gap-2'>
          <input className='border p-3 shadow-lg' type='text' placeholder='Name' />
          <input className='border p-3 shadow-lg' type='email' placeholder='Email' />
        </div>

        <input className='my-4 w-full border p-3 shadow-lg' type='text' placeholder='Subject' />
        <textarea className='w-full border p-3 shadow-lg' cols='30' rows='10' placeholder='Message'></textarea>
        <button className='mt-2 w-full border p-3 shadow-lg'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
