import React, { useState } from 'react'
import database from './FirebaseDB'
import "./ContactForm.css"

/* eslint-disable */
export default function ContactForm() {

    const [contactFormData, setContactFormData] = useState({
        name: "",
        email: "",
        contact: "",
        message: "",
    })

    const [formSumitted, setFormSumitted] = useState(false)

    let name, value;
    const postContactFormData = (e) => {
        name = e.target.name
        value = e.target.value

        setContactFormData({
            ...contactFormData, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormSumitted(true)

        const { name, email, contact, message } = contactFormData

        database.ref("all-react-practice-form").push({
            Name: name,
            Email_ID: email,
            Contact_No: contact,
            Message: message,
            Time_And_Date: Date().toLocaleString()
        })
            .then(() => {
                alert("DOne");
                setFormSumitted(false)
            })
            .catch(error => {
                console.log(error.message)
                setFormSumitted(false)
            })

        setContactFormData({
            name: "",
            email: "",
            contact: "",
            message: "",
        })
    }


    return (
        <>

            <div className="background">
                <div className="container">
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div className="screen-header-button close"></div>
                                <div className="screen-header-button maximize"></div>
                                <div className="screen-header-button minimize"></div>
                            </div>
                            <div className="screen-header-right">
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>CONTACT</span>
                                    <span>US</span>
                                </div>
                                <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                            </div>
                            <div className="screen-body-item">
                                <form className="app-form" onSubmit={handleSubmit}>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="NAME"
                                            name='name'
                                            value={contactFormData.name}
                                            onChange={postContactFormData} />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="EMAIL"
                                            name='email'
                                            value={contactFormData.email}
                                            onChange={postContactFormData} />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="CONTACT NO"
                                            name='contact'
                                            value={contactFormData.contact}
                                            onChange={postContactFormData} />
                                    </div>
                                    <div className="app-form-group message">
                                        <input className="app-form-control" placeholder="MESSAGE"
                                            name='message'
                                            value={contactFormData.message}
                                            onChange={postContactFormData} />
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button className="app-form-button">CANCEL</button>
                                        <button className="app-form-button" type='submit' style={{ color: formSumitted ? 'green' : null }} >SEND</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
