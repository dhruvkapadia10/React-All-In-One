import React from 'react'
import { Form,Icon,Container,FormTextInput,FormButton,FormInput,FormContent,FormLabel,FormWrap,FormH1,Text, } from './SigninElement'
import emailjs from "emailjs-com";

const SignIn = () => {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_u7s020i', 'template_iw5sadb', e.target, 'user_Kgh6oi3IrjVVnvNRXvdC1')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()

    }
    return (
        <>
          <Container>
              <FormWrap>
                  <Icon></Icon>
              <FormContent>
                  <Form action="#" onSubmit={sendEmail}>
                      <FormH1>Sign in to your account</FormH1>
                        {/* <FormLabel htmlFor='for'>Name</FormLabel> */}
                        <FormInput type='text' placeholder="Name" name="name" required/>
                        {/* <FormLabel htmlFor='for'>Email address</FormLabel> */}
                        <FormInput type='email' placeholder="Email Address" name="email" required/>
                        {/* <FormLabel htmlFor='for'>Subject</FormLabel> */}
                        <FormInput type='text' placeholder="Subject" name="subject" required/>
                        {/* <FormLabel htmlFor='for'>your message</FormLabel> */}
                        <FormTextInput type='text' placeholder="your message" name="message" required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forget Password</Text>
                  </Form>
              </FormContent>             
              </FormWrap>
            </Container>  
        </>
    )
}
export default SignIn