import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Title from "./Title";

import img from "../assets/brand/contact.jpg"
import { Button, Input, Textarea } from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Log form values
        console.log("Name:", form.current.user_name.value);
        console.log("Email:", form.current.user_email.value);
        console.log("Message:", form.current.message.value);

        emailjs
            .sendForm(
                "service_ngj61pm",
                "template_39d1qga",
                form.current,
                "fYc9OsJqwXNOnP2_w"
            )
            .then(
                (result) => {
                    toast.success('Message Sent')
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (

        <div   data-aos="fade-up" id="contact" className="mb-16">
            <Title heading={'Contact Me'} />
            <Toaster />
            <div className="md:flex md:gap-20 justify-between items-center">
                <form className="flex-1 md:w-1/2 mx-auto space-y-8" ref={form} onSubmit={sendEmail}>
                    <div>
                        <Input label="Name" color="blue" required type="text" name="user_name" />
                    </div>
                    <div>
                        <Input label="Email" color="purple" required type="email" name="user_email" />
                    </div>
                    <div>
                        <Textarea label="Message" color="indigo" required name="message" />
                    </div>
                    <Button color="blue" className="btn w-full " type="submit" >Send Message</Button>
                </form>
                <div className="flex-1">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;

