import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import Footer from "../component/Footer"

const SignIn = () => {
    return(
        <>
            <Form id="form">
                <h1>Sign In</h1>
                <FormGroup floating>
                    <Input
                        id="username"
                        name="username"
                        placeholder="username"
                        type="string"
                    />
                    <Label for="examplePassword">
                        Username:
                    </Label>
                </FormGroup>
                    {' '}
                <FormGroup floating>
                    <Input
                        id="password"
                        name="password"
                        placeholder="password"
                        type="string"
                    />
                    <Label for="exampleEmail">
                        Password:
                    </Label>
                </FormGroup>
                    {' '}
                <Button>
                    Submit
                </Button>
            </Form>
            <div id="signupbutton">
                <Link to="/">
                    <button id="gobackbutton">
                        Go Back 
                    </button>
                </Link>
            </div>
            <Footer/>
        </>
    )
}

export default SignIn