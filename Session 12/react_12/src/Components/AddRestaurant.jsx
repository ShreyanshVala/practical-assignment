import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddRestaurant({ loadRestaurants }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !cuisine) {
      alert("Fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "restaurants"), {
        name,
        cuisine,
      });

      alert("Restaurant Added");

      setName("");
      setCuisine("");

      loadRestaurants();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Restaurant</h2>

      <input
        type="text"
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Cuisine"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      />

      <br />
      <br />

      <button>Add</button>
    </form>
  );
}
