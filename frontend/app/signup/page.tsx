// components/SignUpForm.js
"use client";
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Modal from 'react-modal';
import axios from 'axios';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(schema),
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:4000/signup', data);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert('An error occurred during sign up');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form className=" bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input {...register('name')} className="w-full p-2 border border-gray-300 rounded" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input {...register('email')} className="w-full p-2 border border-gray-300 rounded" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={'us'}
                inputClass="w-full p-2 border border-gray-300 rounded"
              />
            )}
          />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" {...register('password')} className="w-full p-2 border border-gray-300 rounded" />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" >Confirm Password</label>
          <input type="password" {...register('confirmPassword')} className="w-full p-2 border border-gray-300 rounded" />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign Up</button>
      </form>

      <Modal
        isOpen={isSuccess}
        onRequestClose={() => setIsSuccess(false)}
        contentLabel="Sign Up Successful"
        className="bg-white p-8 rounded shadow-md max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl font-bold mb-6">Sign Up Successful</h2>
        <p>You have successfully signed up!</p>
        <button onClick={() => setIsSuccess(false)} className="mt-4 bg-blue-500 text-white p-2 rounded">Close</button>
      </Modal>
    </div>
  );
};

export default SignUpForm;
