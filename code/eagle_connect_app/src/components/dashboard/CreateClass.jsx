//This should probably be deleted soon ~Chase

// CreateClass.jsx (Modified version of MyPopup.jsx)
// This code should be uncommented. Currently, this code doesn't allow the user to successfully create a class
// however, the MyPopup.jsx file successfully creates the class even though its the same code

//documentation: https://react-popup.elazizi.com/react-modal
/*import React, { useState } from "react";
import Popup from "reactjs-popup"; 
import "../../design/dashboard2Style.css";
import { db, auth } from "../../firebase";
import { collection, addDoc, doc, arrayUnion, updateDoc } from "firebase/firestore";

const MyPopup = ({ isOpen, closePopup }) => { // popup menu
  const [classInitials, setClassInitials] = useState(""); // this is for class abbrev. like CS, MATH, EEC
  const [classNumber, setClassNumber] = useState(""); // this is for class number like 170, 308, 355
  const [classExtension, setClassExtension] = useState(""); // this is for class extension like L, C, D
  const [classSection, setClassSection] = useState(""); // this is for class section like 001, 002, 700
  const [classLevelUp, setClassLevelUp] = useState(""); // this is for class level up like UR
  const [className, setClassName] = useState(""); // this is for the class name like Intro to Computer Science

  // Function to handle adding the class to the avaiableClasses collection
  async function handleCreate() {

      const user = auth.currentUser; // gets current user from firebase auth

      const userId = user.uid; // gets the current user unique id

      const userDocRef = doc(db, "users", userId); // reference to current user

      // try this
      try {
        // this will add the create class that user creates into the avaiableClasses collection
        const createClassRef = await addDoc(collection(db, "availableClasses"), {
                classInitials: classInitials, // created class abbrev. CS, MATH, EEC
                classNumber: classNumber, // created class number 170, 308, 355
                classExtension: classExtension, // created class extension L, C, D
                classSection: classSection, // created class section 001, 002, 700
                classLevelUp: classLevelUp, // created class levelUp UR
                className: className, // created class name Intro to Computer Science
                createdBy: userId, // created by current user
                createdAt: new Date(), // created at certain date and time
          });

          // this will update the joined classes for the user immediately after the user creates the class
          await updateDoc(userDocRef, {
            joinedClasses: arrayUnion({
                classId: createClassRef.id, // joined created class id
                classInitials: classInitials, // joined created class abbrev. CS, MATH, EEC
                classNumber: classNumber, // joined created class number 170, 308, 355
                classExtension: classExtension, // joined created class extension L, C, D
                classSection: classSection, // joined created class section 001, 002, 700
                classLevelUp: classLevelUp, // joined created class levelUp UR
                className: className, // joined created class name Intro to Computer Science
                joinedAt: new Date(), // timestamp for joined the created class
            }),
        });

          console.log("Class successfully created!"); // console log if successful
          alert(`You have created the class: ${className}`); // alert user if successful
         // setClassName(""); // Clear input field
      } catch (error) { // if any errors
          console.error("Error creating class:", error); // console log if error
          alert("Failed to create the class. Please try again."); // alert user if error
      }
  }
  // not sure how to comment in return function
  // only changes that I have done is the onChange=...
  // I also had to change the value on the select in order to successfully save in firebase - Landon
  // other than that, this is the same as what Dylan implemented

  return (
    <Popup open={isOpen} closeOnDocumentClick onClose={closePopup}> 
      <h2>Create A Class</h2>
      <form>
        <label htmlFor="className">Class Number: </label>
 
        <div class="className">
          <input type="text" id="className" className="input-small" onChange={(e) => setClassInitials(e.target.value)} />
          <label htmlFor="className3" class="dash">
            -
          </label>
 
          <input
            type="number"
            id="className"
            onChange={(e) => setClassNumber(e.target.value)}
            className="classNameIn"
            min="0"
            max="999"
          />
 
          <select onChange={(e) => setClassExtension(e.target.value)}>
            <option value=""></option>
            <option value="L">L</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
 
          <label htmlFor="className3" class="dash">
            -
          </label>
          <input
            type="number"
            id="className"
            onChange={(e) => setClassSection(e.target.value)}
            className="classNameIn"
            min="0"
            max="999"
          />
          <select onChange={(e) => setClassLevelUp(e.target.value)}>
            <option value=""></option>
            <option value="UR">UR</option>
          </select>
        </div>
 
        <label htmlFor="classNumber">Class Name: </label>
        <input type="text" id="classNumber" className="input-with-padding" onChange={(e) => setClassName(e.target.value)}/>
 
        <button type="submit" onClick={handleCreate} class="add-button">
          Add
        </button>
      </form>
    </Popup>
  );
};

export default MyPopup; */