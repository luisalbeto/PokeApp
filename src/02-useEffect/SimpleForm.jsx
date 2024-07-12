import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'perrarino',
    email: 'perrarino@google.com'
  })

  const {username, email} = formState

  const onInputChange = ({target}) => {
    const{ name, value } = target
    setFormState({
      ...formState,
      [ name ]: value

    })
  }

  useEffect(() => {
 //   console.log(('useEffect called!'))
  },[ ])

  useEffect(() => {
   // console.log(('formState Changed!'))
  },[ formState])

  useEffect(() => {
  //  console.log(('email Changed!'))
  },[ email ])



  return(
    <>
      <h1>Formulario</h1>
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
        {
          (username === 'perrarino') && <Message/>
        }

    </>
  )
}