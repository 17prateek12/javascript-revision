import React from 'react'
import { useForm } from "react-hook-form";


const UncontrolledForm = () => {
    const {register, handleSubmit}  = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} />
        <input type='password' {...register("password")} />
        <button type='submit'>Submit</button>
    </form>
  );
}

export default UncontrolledForm