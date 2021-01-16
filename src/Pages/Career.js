import React, { useState } from "react";
import classes from "./Career.module.css";

import cvLogo from "../../../shared/assets/Images/cvLogo.png";
import DownArrow from "../../../shared/assets/Images/DownArrow.png";
import { useHttpClient } from "../../../shared/hooks/http-hook";

const Career = (props) => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [submitted, setSubmitted] = useState(false);

    const [selected, setSelected] = useState(undefined);
    const [selectedError, setSelectedError] = useState(false);

    const [firstName, setFirstName] = useState(undefined);
    const [lastName, setLastName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [phone, setPhone] = useState(undefined);
    const [employment, setEmployment] = useState(undefined);
    const [experience, setExperience] = useState(undefined);
    const [letter, setLetter] = useState(undefined);
    const [file, setFile] = useState(undefined);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [employmentError, setEmploymentError] = useState(false);
    const [experienceError, setExperienceError] = useState(false);
    const [letterError, setLetterError] = useState(false);
    const [fileError, setFileError] = useState(false);

    const submitJobFormHandler = async () => {
        let errors = false;
        if (!selected) {
            errors = true;
            setSelectedError(true);
        } else setSelectedError(false);
        if (!firstName || (firstName && firstName.length < 1)) {
            errors = true;
            setFirstNameError(true);
        } else setFirstNameError(false);
        if (!lastName || (lastName && lastName.length < 1)) {
            errors = true;
            setLastNameError(true);
        } else setLastNameError(false);
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            errors = true;
            setEmailError(true);
        } else setEmailError(false);
        if (!phone || (phone && phone.length < 11)) {
            errors = true;
            setPhoneError(true);
        } else setPhoneError(false);
        if (!employment || (employment && employment.length < 1)) {
            errors = true;
            setEmploymentError(true);
        } else setEmploymentError(false);
        if (!experience || (experience && experience.length < 1)) {
            errors = true;
            setExperienceError(true);
        } else setExperienceError(false);
        if (!letter || (letter && letter.length < 49)) {
            errors = true;
            setLetterError(true);
        } else setLetterError(false);
        if (!file) {
            errors = true;
            setFileError(true);
        } else setFileError(false);
        if (errors) return;
        const formData = new FormData();
        formData.append("title", selected);
        formData.append("fname", firstName);
        formData.append("lname", lastName);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("employment", employment);
        formData.append("experience", experience);
        formData.append("letter", letter);
        formData.append("cv", file);

        for (var value of formData.entries()) {
            console.log("value", value);
        }

        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/job`,
                "POST",
                {
                    // "Content-Type": "multipart/form-data",
                },
                formData,
            );
            console.log("responseData", responseData);
            if (responseData) {
                setSubmitted(true);
            }
        } catch (error) {}
    };

    let content;

    content = (
        <div className={classes.Form}>
            <div className={classes.FormContainer}>
                <div className={classes.Left}>
                    <div className={classes.FormElement}>
                        <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        {firstNameError && <p>Please, enter a valid first name</p>}
                    </div>
                    <div className={classes.FormElement}>
                        <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        {lastNameError && <p>Please, enter a valid last name</p>}
                    </div>
                    <div className={classes.FormElement}>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {emailError && <p>Please, enter a valid email</p>}
                    </div>
                    <div className={classes.FormElement}>
                        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D[^\.]/g, ""))} />
                        {phoneError && <p>Please, enter a valid phone number</p>}
                    </div>
                    <div className={classes.FormElement}>
                        <input placeholder="Current Employment" value={employment} onChange={(e) => setEmployment(e.target.value)} />
                        {employmentError && <p>Please, enter a employment status</p>}
                    </div>
                    <div className={classes.FormElement}>
                        <input placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
                        {experienceError && <p>Please, enter a valid experience</p>}
                    </div>
                </div>
                <div className={classes.Right}>
                    <div className={classes.FormElement}>
                        <textarea rows={6} placeholder="Cover Letter" value={letter} onChange={(e) => setLetter(e.target.value)} />
                        {letterError && <p>Min. Character:50</p>}
                    </div>
                    <input
                        // accept="application/pdf, application/doc ,application/docx ,application/xls, application/xlsx,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{ display: "none" }}
                        id="file"
                        placeholder="Experience"
                    />

                    <div className={classes.FormElement}>
                        <label className={classes.CVFormElement} for="file">
                            <div>
                                <img src={cvLogo} />
                            </div>
                            {file ? <span>{file.name}</span> : <span>Upload Your CV</span>}
                        </label>
                        {fileError && <p>Please, attach a valid file</p>}
                    </div>
                </div>
            </div>
            <a onClick={() => submitJobFormHandler()}>Submit</a>
        </div>
    );

    if (submitted) {
        content = <p>Thank you for applying, we will get back to you shortly.</p>;
    }

    return (
        <div className={classes.Career}>
            <h2>APPLY ONLINE</h2>
            {error && <p>{error}</p>}
            {!submitted && (
                <nav className={classes.menu}>
                    <ol>
                        <li className={classes.menuItem}>
                            <div className={classes.DropDown_Main}>
                                <p>{!selected ? "Select Position" : selected}</p>
                                <div>
                                    <img src={DownArrow} />
                                </div>
                            </div>
                            <ol className={classes.subMenu}>
                                <li onClick={() => setSelected("React Dev")} className={classes.menuItem}>
                                    <span>React Dev</span>
                                </li>
                                <li onClick={() => setSelected("React Native Dev")} className={classes.menuItem}>
                                    <span>React Native Dev</span>
                                </li>
                                <li onClick={() => setSelected("WordPress Dev")} className={classes.menuItem}>
                                    <span>WordPress Dev</span>
                                </li>
                            </ol>
                        </li>
                    </ol>
                    {selectedError && <label>Please select job title you are applying for</label>}
                </nav>
            )}
            {content}
        </div>
    );
};

export default Career;
