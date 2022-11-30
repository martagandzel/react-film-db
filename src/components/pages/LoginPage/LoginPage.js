import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Input from "components/atoms/Input/Input"
import Button from 'components/atoms/Button/Button';

import { loginUser } from 'utils/http';
import SubPageTemplate from 'components/templates/SubPageTemplate/SubPageTemplate';

const LoginPage = () => {

    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const navigate = useNavigate()

    const readLoginInput = event => {
        setLoginInput(event.target.value)
    }

    const readPasswordInput = event => {
        setPasswordInput(event.target.value)
    }

    const handleLogin = event => {
        event.preventDefault()

        loginUser(loginInput)
            .then(users => {
                const currentUser = users[0]
                if (currentUser && currentUser.password === passwordInput) {
                    navigate('/')
                } else {
                    console.log('Incorrect user or password');
                }
            })
    }


    return (
        <SubPageTemplate>
            <h2>Log in</h2>

            <form
                onSubmit={handleLogin}
                className="submit-form"
            >
                <Input
                    className="submit-input"
                    placeholder="Login"
                    id="login"
                    value={loginInput}
                    HandleChange={readLoginInput}
                />
                <Input
                    className="submit-input"
                    placeholder="Password"
                    type="password"
                    id="password"
                    value={passwordInput}
                    HandleChange={readPasswordInput}
                />
                <Button
                    className="sumbitNewUser"
                    text="Log in"
                    onClick={handleLogin}
                />
            </form>
        </SubPageTemplate>
    );
}

export default LoginPage;