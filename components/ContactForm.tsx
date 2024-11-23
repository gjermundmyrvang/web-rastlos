'use client';

import { useForm } from 'react-hook-form';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log("Mail sent", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-2xl self-center mb-5' id='contact'>
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-white-100'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Fullt navn'
          className='w-full rounded-md border border-gray-300 bg-white-100 py-3 px-6 text-base font-medium text-black-200 outline-none focus:border-orange-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-white-100'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white-100 py-3 px-6 text-base font-medium text-black-200 outline-none focus:border-orange-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-white-100'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white-100 py-3 px-6 text-base font-medium text-black-200 outline-none focus:border-orange-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-md bg-orange-500 py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
  );
};
