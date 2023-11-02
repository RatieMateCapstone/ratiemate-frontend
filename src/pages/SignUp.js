import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const SignUp = () => {
    return(
        <div>
            <Form id="form">
                <h1>Sign Up</h1>
                <FormGroup floating>
                    <Input 
                        id="email"
                        name="email"
                        placeholder="email"
                        type="string"
                    />
                    <Label for="exampleEmail">
                        Email:
                    </Label>
                </FormGroup>
                    {' '}
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
                <FormGroup floating>
                    <Input
                        id="confirmpassword"
                        name="confirmpassword"
                        placeholder="confirm password"
                        type="string"
                    />
                    <Label for="exampleEmail">
                        Password Confirmation:
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
        </div>
    )
}

export default SignUp