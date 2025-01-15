import { createContext, useContext, useState } from "react";
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientContext = createContext();

export const useClient = () => useContext(ClientContext);

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
    images: [],
  });
  const [loading, setLoading] = useState(false);

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
      toast.error("All required fields must be filled out!");
      return;
    }

    setLoading(true);
    try {
      const clientRef = collection(db, `users/${userId}/clients`);
      const docRef = await addDoc(clientRef, clientData);
      toast.success(`Client added successfully with ID: ${docRef.id}`);
      resetClientData();
      return docRef.id;
    } catch (error) {
      toast.error(`Error adding client: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const updateClient = async (clientId) => {
    if (!userId || !clientId) {
      toast.error("User ID or Client ID is missing!");
      return;
    }

    setLoading(true);
    try {
      const clientRef = doc(db, `users/${userId}/clients`, clientId);
      await updateDoc(clientRef, clientData);
      toast.success("Client updated successfully");
    } catch (error) {
      toast.error(`Error updating client: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const getClient = async (clientId) => {
    if (!userId || !clientId) {
      toast.error("User ID or Client ID is missing!");
      return null;
    }

    setLoading(true);
    try {
      const clientRef = doc(db, `users/${userId}/clients`, clientId);
      const docSnap = await getDoc(clientRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setClientData(data);
        return data;
      } else {
        toast.info("No client found for this ID");
        return null;
      }
    } catch (error) {
      toast.error(`Error fetching client data: ${error.message}`);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getAllClients = async () => {
    if (!userId) {
      toast.error("User ID is missing!");
      return;
    }

    setLoading(true);
    try {
      const clientRef = collection(db, `users/${userId}/clients`);
      const querySnapshot = await getDocs(clientRef);
      toast.success("Clients fetched successfully");
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      toast.error(`Error fetching clients: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const uploadScreenshots = async (files) => {
    setLoading(true);
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
      toast.success("Images uploaded successfully");
    } catch (error) {
      toast.error(`Error uploading images: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const saveScreenshots = async (clientId) => {
    if (!userId || !clientId) {
      toast.error("User ID or Client ID is missing!");
      return;
    }

    setLoading(true);
    try {
      const clientRef = doc(db, `users/${userId}/clients`, clientId);
      await updateDoc(clientRef, { images: clientData.images });
      toast.success("Screenshots saved successfully!");
    } catch (error) {
      toast.error(`Error saving screenshots: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const removeScreenshot = (index) => {
    setClientData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    toast.info("Screenshot removed");
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
        loading,
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
      <ToastContainer />
    </ClientContext.Provider>
  );
};
