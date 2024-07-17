const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			contacts: null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContacts: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/amrhector/contacts");
				const data = await response.json();
				console.log("contacts from flux", data.contacts);
				setStore({ contacts: data.contacts });
				console.log("contacts from store", data.contacts);
			},
			addContact: async (contact) => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/contact/agendas/amrhector/contacts", {
					method: "POST",
					body: JSON.stringify(contact),
					headers: {
						"Content-Type": "application/json"
					}
				});
				const data = await response.json();
				console.log(data);
			},
		}
	};
};

export default getState;
