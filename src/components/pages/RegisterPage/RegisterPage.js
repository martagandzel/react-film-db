import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";
import SubPageTemplate from "components/templates/SubPageTemplate/SubPageTemplate";

const RegisterPage = () => {

    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const navigate = useNavigate()

    const readLoginInput = event => {
        setLoginInput(event.target.value)
    }

    const readPasswordInput = event => {
        setPasswordInput(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()

        const randomId = Date.now()
        const newUser = {
            id: randomId,
            email: loginInput,
            password: passwordInput,
            name: "",
            avatar: ""
        }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(navigate('/'))
    }

    return (
        <SubPageTemplate>
            <h2>Register</h2>

            <form
                onSubmit={handleSubmit}
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
                    id="passwords"
                    value={passwordInput}
                    HandleChange={readPasswordInput}
                />
                <Button
                    className="sumbitNewUser"
                    text="Register"
                    onClick={handleSubmit}
                />
            </form>
        </SubPageTemplate>
    );
}

export default RegisterPage;