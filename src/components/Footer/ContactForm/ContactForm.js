import { React, Component } from 'react';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

import emailIcon from '../../../images/email-mail-pngrepo-com.png'
// import classes from './ContactForm.module.css'


class ContactForm extends Component {

    state = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    }

    inputUpdate = (event, id) => {
        let newStateObj = { ...this.state }
        newStateObj[id] = event.target.value
        this.setState({
            ...newStateObj
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        alert("Your mail has been successfully submitted!\nThank you!!!")
    }

    render() {
        let name;
        let type;
        let placeholder;
        let required = false;

        let input = Object.keys(this.state).map((id) => {

            switch (id) {
                case ('name'):
                    name = id;
                    type = 'text';
                    placeholder = 'Name';
                    break
                case ('subject'):
                    name = id;
                    type = 'text';
                    placeholder = 'Subject ';
                    required = true
                    break
                case ('email'):
                    name = id;
                    type = 'email';
                    placeholder = 'E-mail';
                    required = true
                    break
                case ('phone'):
                    name = id;
                    type = 'tel';
                    placeholder = 'Phone';
                    break
                case ('message'):
                    name = id;
                    type = 'textarea';
                    placeholder = 'Message';
                    required = true;
                    break
                default:
                    name = ''
                    type = 'text'
                    placeholder = ''
            }

            return <Input key={id}
                name={name}
                placeholder={placeholder}
                type={type}
                value={this.state[name]}
                required={required}
                update={(event) => this.inputUpdate(event, id)} />
        })

        const buttonStyle = " hover:relative hover:top-1 "

        return (
            <div id='contact-us' className="pt-10">
                <div className='space-y-3 text-xl'>
                    <h1 className='font-gloria mb-8 text-orange-600 text-5xl'><strong>Contact Us</strong></h1>
                    <p>Want to make an inquiry? <br /> Fill the form and we'll get back to you shortly.</p>
                    <h4 className='flex justify-center items-center'>
                        <span>
                            <img className='w-5 h-5' src={emailIcon} alt="email-icon" />
                        </span>
                        <a className='hover:text-orange-300 text-base' href={'mailto:ezikeog@gmail.com'}>spicysoups@gmail.com</a>
                    </h4>

                    <form
                        className="text-center py-10"
                        action="https://formsubmit.co/ezikeog@gmail.com"
                        method="POST">
                        <div className='mx-auto mb-5 w-10/12 md:w-8/12 grid grid-cols-2 gap-2'>
                            {input}
                        </div>

                        <input type="hidden" name="_next" value="http://localhost:3000/spicy_soups" />
                        <input type="hidden" name="_captcha" value="false" />
                        <Button className={buttonStyle}
                            class='Submit'
                            type='submit'
                        >SUBMIT</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactForm;