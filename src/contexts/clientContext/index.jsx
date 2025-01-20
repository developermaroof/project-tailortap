// Importing necessary modules and functions
import { createContext, useCallback, useContext, useState } from "react"; // React tools for creating and using context and managing state.
import { db } from "../../firebase/firebaseConfig"; // Firebase configuration file for database access.
import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  getDocs,
} from "firebase/firestore"; // Firebase Firestore functions for managing database operations.
import axios from "axios"; // Library for making HTTP requests.
import {
  CLOUDINARY_UPLOAD_URL,
  CLOUDINARY_UPLOAD_PRESET,
} from "../../utils/cloudinaryConfig"; // Cloudinary configuration for image uploads.
import { toast, ToastContainer } from "react-toastify"; // Toast notifications for user feedback.
import "react-toastify/dist/ReactToastify.css"; // CSS for the toast notifications.

// Creating a React Context for client management
const ClientContext = createContext();

// Custom hook for using the ClientContext
export const useClient = () => useContext(ClientContext);

// Component to provide the ClientContext to child components
export const ClientProvider = ({ children, userId }) => {
  // State to manage client data and loading state
  const [clientData, setClientData] = useState({
    fullname: "", // Client's full name
    cast: "", // Client's cast
    number: "", // Client's contact number
    address: "", // Client's address
    measurements: {
      // Client's measurements (e.g., clothing sizes)
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
    images: [], // Array to store uploaded image URLs
  });

  const [loading, setLoading] = useState(false); // Loading state to show progress

  // Function to handle input changes for client data
  const handleInput = (e) => {
    const { name, value } = e.target; // Extract name and value from the input
    setClientData((prev) => ({ ...prev, [name]: value })); // Update client data
  };

  // Function to handle measurement-specific inputs
  const handleMeasurementInput = (name, value) => {
    setClientData((prev) => ({
      ...prev,
      measurements: { ...prev.measurements, [name]: value }, // Update specific measurement field
    }));
  };

  // Function to add a new client to Firestore
  const addClient = async () => {
    if (
      !userId || // Ensure user ID exists
      !clientData.fullname || // Ensure required fields are filled
      !clientData.cast ||
      !clientData.number
    ) {
      toast.error("All required fields must be filled out!"); // Show error message
      return;
    }

    setLoading(true); // Set loading state
    try {
      const clientRef = collection(db, `users/${userId}/clients`); // Reference to Firestore collection
      const docRef = await addDoc(clientRef, clientData); // Add document to Firestore
      // toast.success(`Client added successfully with ID: ${docRef.id}`); // Show success message
      resetClientData(); // Reset form data
      return docRef.id; // Return the ID of the added document
    } catch (error) {
      toast.error(`Error adding client: ${error.message}`); // Show error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Function to update an existing client in Firestore
  const updateClient = async (clientId) => {
    if (!userId || !clientId) {
      toast.error("User ID or Client ID is missing!"); // Show error message
      return;
    }

    setLoading(true); // Set loading state
    try {
      const clientRef = doc(db, `users/${userId}/clients`, clientId); // Reference to specific Firestore document
      await updateDoc(clientRef, clientData); // Update the document with new data
      // toast.success("Client updated successfully"); // Show success message
    } catch (error) {
      toast.error(`Error updating client: ${error.message}`); // Show error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Function to fetch a single client's data from Firestore
  const getClient = useCallback(
    async (clientId) => {
      if (!userId || !clientId) {
        toast.error("User ID or Client ID is missing!"); // Show error message
        return null;
      }

      setLoading(true); // Set loading state
      try {
        const clientRef = doc(db, `users/${userId}/clients`, clientId); // Reference to Firestore document
        const docSnap = await getDoc(clientRef); // Get the document snapshot
        if (docSnap.exists()) {
          const data = docSnap.data(); // Extract data from the document
          setClientData(data); // Update state with fetched data
          return data; // Return the fetched data
        } else {
          toast.info("No client found for this ID"); // Show info message
          return null;
        }
      } catch (error) {
        toast.error(`Error fetching client data: ${error.message}`); // Show error message
        return null;
      } finally {
        setLoading(false); // Reset loading state
      }
    },
    [userId]
  );
  const setClientDataMemoized = useCallback((data) => setClientData(data), []);

  // Function to fetch all clients from Firestore
  const getAllClients = async () => {
    if (!userId) {
      toast.error("User ID is missing!"); // Show error message
      return;
    }

    setLoading(true); // Set loading state
    try {
      const clientRef = collection(db, `users/${userId}/clients`); // Reference to Firestore collection
      const querySnapshot = await getDocs(clientRef); // Get all documents from the collection
      // toast.success("Clients fetched successfully"); // Show success message
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Map documents to array of objects
    } catch (error) {
      toast.error(`Error fetching clients: ${error.message}`); // Show error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Function to upload images to Cloudinary
  const uploadScreenshots = async (files) => {
    setLoading(true); // Set loading state
    try {
      const uploadedImages = await Promise.all(
        Array.from(files).map(async (file) => {
          const formData = new FormData(); // Create form data object
          formData.append("file", file); // Add file to form data
          formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); // Add upload preset
          const response = await axios.post(CLOUDINARY_UPLOAD_URL, formData); // Upload image to Cloudinary
          return response.data.secure_url; // Return the uploaded image URL
        })
      );
      setClientData((prev) => ({
        ...prev,
        images: [...prev.images, ...uploadedImages], // Add uploaded images to state
      }));
      toast.success("Images uploaded successfully"); // Show success message
    } catch (error) {
      toast.error(`Error uploading images: ${error.message}`); // Show error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Function to save uploaded screenshots to Firestore
  const saveScreenshots = async (clientId) => {
    if (!userId || !clientId) {
      toast.error("User ID or Client ID is missing!"); // Show error message
      return;
    }

    setLoading(true); // Set loading state
    try {
      const clientRef = doc(db, `users/${userId}/clients`, clientId); // Reference to Firestore document
      await updateDoc(clientRef, { images: clientData.images }); // Update document with images
      toast.success("Screenshots saved successfully!"); // Show success message
    } catch (error) {
      toast.error(`Error saving screenshots: ${error.message}`); // Show error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Function to remove a specific screenshot by index
  const removeScreenshot = (index) => {
    setClientData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index), // Filter out the selected image
    }));
    toast.info("Screenshot removed"); // Show info message
  };

  // Function to reset client data to initial state
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

  // Providing all values and functions through the ClientContext
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
        setClientDataMemoized,
      }}
    >
      {children} {/* Render child components */}
      <ToastContainer /> {/* Toast notifications container */}
    </ClientContext.Provider>
  );
};
