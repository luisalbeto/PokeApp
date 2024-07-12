import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

  const { formState, onInputChange, onResetForm , username, email, password} = useForm({
      username: '',
      email: '',
      password: ''
  })


  return(
    <>
      <h1>Formulario con custom hook</h1>
      <hr/>

      <input 
        className="form-control"
        placeholder="Username"
        name="username"
        type="text"
        value={username}
        onChange={onInputChange}
        />

        
      <input 
        className="form-control mt-2"
        placeholder="example@gmail.com"
        name="email"
        type="email"
        value={email}
        onChange={onInputChange}
        />

      <input 
        className="form-control mt-2"
        placeholder="password"
        name="password"
        type="password"
        value={password}
        onChange={onInputChange}
        />

        <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
      
    </>
  )
}