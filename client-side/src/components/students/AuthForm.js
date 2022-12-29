import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, logOut } from './../../redux/actions/userActions'

function AuthForm() {
    const dispatch = useDispatch()
    let user = useSelector( (state) => state.user.user )
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signInHandler = (event) =>{
        event.preventDefault()
        const user = { email:email, password:password }
        dispatch(signIn(user))
    }

    const logOutHandler = () =>{
        dispatch(logOut())
    }
    return (
        <div>
            {!user ?
                (<div>
                    <label>Email</label>
                    <input type='text' value={email} onChange={ (event) => setEmail(event.target.value) } placeholder='Email'/>
                    <label>Password</label>
                    <input type='password' value={password} onChange={ (event) => setPassword(event.target.value) } placeholder='Password'/>
                    <button onClick={signInHandler}>Sign In</button>
                    <hr />
                </div>)
                :
                (<div>
                    <p>{user.email}</p>
                    <button onClick={logOutHandler}>Log Out</button>
                    <hr />
                </div>)}
            
        </div>
        
    )
}

export default AuthForm
