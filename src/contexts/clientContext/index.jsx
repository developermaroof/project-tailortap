import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import axios from "axios";
import {
  CLOUDINARY_UPLOAD_URL,
  CLOUDINARY_UPLOAD_PRESET,
} from "../../utils/cloudinaryConfig";

const ClientContext = createContext();

export const useClient = () => useContext(ClientContext);

export const ClientProvider = ({ children, userId }) => {
  // Initialize clientData from localStorage
  const [clientData, setClientData] = useState(() => {
    const savedClientData = localStorage.getItem("clientData");
    return savedClientData
      ? JSON.parse(savedClientData)
      : {
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
          images: [],
        };
  });

  // Update localStorage whenever clientData changes
  useEffect(() => {
    if (clientData) {
      localStorage.setItem("clientData", JSON.stringify(clientData));
    }
  }, [clientData]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setClientData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMeasurementInput = (name, value) => {
    setClientData((prev) => ({
      ...prev,
      measurements: { ...prev.measurements, [name]: value },
    }));
  };

  const addClient = async () => {
    if (
      !userId ||
      !clientData.fullname ||
      !clientData.cast ||
      !clientData.number
    ) {
      alert("All required fields must be filled out!");
      return;
    }

    try {
      const clientRef = collection(db, `users/${userId}/clients`);
      const docRef = await addDoc(clientRef, clientData);
      alert(`Client added successfully with ID: ${docRef.id}`);
      resetClientData();
      return docRef.id;
    } catch (error) {
      alert(`Error adding client: ${error.message}`);
    }
  };

  const updateClient = async (clientId) => {
    if (!userId || !clientId) {
      alert("User ID or Client ID is missing!");
      return;
    }

    try {
      const clientRef = doc(db, `users/${userId}/clients`, clientId);
      await updateDoc(clientRef, clientData);
      alert("Client updated successfully");
    } catch (error) {
      alert(`Error updating client: ${error.message}`);
    }
  };

  const getClient = async (clientId) => {
    if (!userId || !clientId) {
      console.error("User ID or Client ID is missing!");
      return null;
    }

    try {
      const clientRef = doc(db, `users/${userId}/clients`, clientId);
      const docSnap = await getDoc(clientRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setClientData(data);
        return data;
      } else {
        console.warn("No client found for this ID:", clientId);
        return null;
      }
    } catch (error) {
      console.error("Error fetching client data:", error);
      return null;
    }
  };

  const getAllClients = async () => {
    if (!userId) {
      alert("User ID is missing!");
      return;
    }

    try {
      const clientRef = collection(db, `users/${userId}/clients`);
      const querySnapshot = await getDocs(clientRef);
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      alert(`Error fetching clients: ${error.message}`);
    }
  };

  const uploadScreenshots = async (files) => {
    try {
      const uploadedImages = await Promise.all(
        Array.from(files).map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
          const response = await axios.post(CLOUDINARY_UPLOAD_URL, formData);
          return response.data.secure_url;
        })
      );
      setClientData((prev) => ({
        ...prev,
        images: [...prev.images, ...uploadedImages],
      }));
    } catch (error) {
      alert(`Error uploading images: ${error.message}`);
    }
  };

  const saveScreenshots = async (clientId) => {
    if (!userId || !clientId) {
      alert("User ID or Client ID is missing!");
      return;
    }

    try {
      const clientRef = doc(db, `users/${userId}/clients`, clientId);
      await updateDoc(clientRef, { images: clientData.images });
      alert("Screenshots saved successfully!");
    } catch (error) {
      alert(`Error saving screenshots: ${error.message}`);
    }
  };

  const removeScreenshot = (index) => {
    setClientData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const resetClientData = () => {
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
      images: [],
    });
  };

  return (
    <ClientContext.Provider
      value={{
        clientData,
        handleInput,
        handleMeasurementInput,
        addClient,
        updateClient,
        getClient,
        uploadScreenshots,
        saveScreenshots,
        removeScreenshot,
        getAllClients,
        setClientData,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
