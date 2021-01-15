import React, { useState } from "react";
import { useHttpClient } from "../hooks/http-hook";
import classes from "../extra/Contact.module.css";
import "../style/Contact.css";

function Contact() {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [subject, setSubject] = useState(undefined);
    const [message, setMessage] = useState(undefined);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const submitContactFormHandler = async () => {
        let errors = false;
        if (!name || (name && name.length < 1)) {
            errors = true;
            setNameError(true);
        } else {
            setNameError(false);
        }
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            errors = true;
            setEmailError(true);
        } else setEmailError(false);
        if (!subject || (subject && subject.length < 5)) {
            errors = true;
            setSubjectError(true);
        } else setSubjectError(false);
        if (!message || (message && message.length < 10)) {
            errors = true;
            setMessageError(true);
        } else setMessageError(false);
        if (errors) return;
        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/contact`,
                "POST",
                {
                    "Content-Type": "application/json",
                },
                JSON.stringify({ name, email, subject, message }),
            );
            console.log("responseData", responseData);
            if (responseData) {
                setSubmitted(true);
            }
        } catch (error) {}
    };

    let content;

    content = (
        <div className={"Form"}>
            <div className={"FormElement"}>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={"FormElement"}>
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={"FormElement"} value={subject} onChange={(e) => setSubject(e.target.value)}>
                <input placeholder="Subject" />
            </div>
            <div className={"FormElement"}>
                <textarea placeholder="Type Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <a onClick={() => submitContactFormHandler()}>Submit</a>
        </div>
    );

    if (submitted) {
        content = <p>Thank you for contacting us, we will get back to you shortly.</p>;
    }

    return (
        <div id="contacts" className={"contact"}>
            <div className={"HomeWidth"}>
                <div className={"Left"}>
                    <div className={"LeftDiv"}>
                        <h1>
                            Contact <span style={{ color: "black" }}>Us!</span>
                        </h1>
                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
                            will give you a complete account of the system, and.
                        </p>
                        {content}
                    </div>
                </div>
                <div className={"Right"}></div>
            </div>
        </div>
    );
}

export default Contact;
