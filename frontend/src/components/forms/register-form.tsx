'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from 'next/link';
// internal
import ErrorMsg from '../common/error-msg';

type FormData = {
  name: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
});

const RegisterForm = () => {
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='mb-20'>
          <label htmlFor="name">Username <span>**</span></label>
          <input id='name' {...register("name")} type="text" placeholder='Enter user name...' />
          <ErrorMsg msg={errors.name?.message!} />
        </div>

        <div className='mb-20'>
          <label htmlFor="name">Email Address <span>**</span></label>
          <input id='email' {...register("email")} type="email" placeholder='Email address...' />
          <ErrorMsg msg={errors.email?.message!} />
        </div>

        <div className='mb-20'>
          <label htmlFor="pass">Password <span>**</span></label>
          <input id="password" {...register("password")} type="password" placeholder="Enter password..." />
          <ErrorMsg msg={errors.password?.message!} />
        </div>

        <div className="login-action mb-20 fix">
          <span className="log-rem f-left">
            <input id="remember" type="checkbox" />
            <label htmlFor="remember">Remember me!</label>
          </span>
          <span className="forgot-login f-right">
            <a href="#">Lost your password?</a>
          </span>
        </div>
        <button className="os-btn w-100">Register Now</button>
        <div className="or-divide"><span>or</span></div>
        <Link href="/login" className="os-btn os-btn-black w-100">
           Login Now
        </Link>
      </form>
    </>
  );
};

export default RegisterForm;