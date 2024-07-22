import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";

const ContactCard = () => {
    const { store, actions } = useContext(Context);
  
        useEffect(() => {
            const getData = async () => {
                console.log("Trying to get data");
                await actions.getContacts();
            }
            getData()
            console.log("Data should be here", store.contacts)
        }, [])
   
    
      
 
    return (
        <div className="contact-card">
            <div className="contact-image">
                <i className="fa-solid fa-user"></i>
            </div>
            {store.contacts && store.contacts.map((contact, index) => {
                return (
                    <div key={index} className="contact-info">
                        <div className="contact-name">
                            {contact.name}
                        </div>
                        <div className="contact-address">
                            <i className="fa-solid fa-location-dot"></i>
                            {contact.address}
                        </div>
                        
                        <div className="contact-phone">
                            <i className="fa-solid fa-phone"></i>
                            {contact.phone}
                        </div>
                        <div className="contact-email">
                            <i className="fa-solid fa-envelope"></i>
                            {contact.email}
                        </div>
                    </div>
                )
            })}
            {/* <div className="contact-info">
                <div className="contact-name">
                    {contact.firstName} {contact.lastName}
                </div>
                <div className="contact-address">
                    <i className="fa-solid fa-location-dot"></i>
                    {contact.streetName}
                </div>
                
                <div className="contact-phone">
                    <i className="fa-solid fa-phone"></i>
                    {contact.phoneNumber}
                </div>
                <div className="contact-email">
                    <i className="fa-solid fa-envelope"></i>
                    {contact.email}
                </div>
            </div> */}
            <div className="contact-icons">
                <i className="fa-solid fa-pencil"></i> {/* Edit icon */}
                <i className="fa-solid fa-trash-bin"></i> {/* Delete icon */}
            </div>
        </div>
    );
};


export default ContactCard;