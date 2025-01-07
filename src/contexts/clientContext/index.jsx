import { createContext, useContext, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";

const ClientContext = createContext();

export const useClient = () => {
  return useContext(ClientContext);
};

export const ClientProvider = ({ children, userId }) => {
  const [clientData, setClientData] = useState({
    fullname: "",
    cast: "",
    number: "",
    address: "",
    measurements: {
      length: "",
      shoulder: "",
      arms: "",
      cuffs: "",
      collar: "",
      chest: "",
      fitting: "",
      lap: "",
      pantshalwar: "",
      paincha: "",
      additionalDetails: "",
    },
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setClientData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMeasurementInput = (name, value) => {
    setClientData((prev) => ({
      ...prev,
      measurements: {
        ...prev.measurements,
        [name]: value,
      },
    }));
  };

  const addClient = async () => {
    if (!userId) {
      alert("User Id is Missing!");
      return;
    }

    if (!clientData.fullname || !clientData.cast || !clientData.number) {
      alert("Please fill all the required fields");
      return;
    }

    try {
      const clientRef = collection(db, `users/${userId}/clients`);
      const docRef = await addDoc(clientRef, clientData);
      alert("Client added successfully with ID:", docRef.id);

      setClientData({
        fullname: "",
        cast: "",
        number: "",
        address: "",
        measurements: {
          length: "",
          shoulder: "",
          arms: "",
          cuffs: "",
          collar: "",
          chest: "",
          fitting: "",
          lap: "",
          pantshalwar: "",
          paincha: "",
          additionalDetails: "",
        },
      });

      return docRef.id;
    } catch (error) {
      alert("Couldn't add client", error.message);
    }
  };

  const updateClient = async (clientId) => {
    if (!userId || !clientId) {
      alert("User Id or Client Id is Missing!");
      return;
    }

    try {
      const clientRef = doc(db, `users/${userId}/clients`, clientId);
      await updateDoc(clientRef, clientData);
      alert("Client updated successfully");
    } catch (error) {
      alert("Couldn't update client", error.message);
    }
  };

  const getClient = async (clientId) => {
    if (!userId || !clientId) {
      alert("User Id or Client Id is Missing!");
      return;
    }

    try {
      const clientRef = doc(db, `users/${userId}/clients`, clientId);
      const docSnap = await getDoc(clientRef);
      if (docSnap.exists()) {
        setClientData(docSnap.data());
      } else {
        alert("No such client!");
      }
    } catch (error) {
      alert("Couldn't fetch client data", error.message);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        clientData,
        handleMeasurementInput,
        handleInput,
        addClient,
        updateClient,
        getClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
