import React from "react";
import  ContactCard  from "../component/contactCard";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";


export const Home = () => (
	<div className="text-center mt-5">
		<h1>Contact</h1>
		<ContactCard/>
		<p> 

			This is the contact list of Herbert. You can add a new contact by clicking the button top right
		</p>
	</div>
);
