import React, { useState, useEffect } from 'react';

// function parseAndMutateString(str) {
//     // Create a new empty string to store the modified characters
//     let modifiedStr = "";
  
//     // Iterate through each character in the input string
//     for (let i = 0; i < str.length; i++) {
//       // Get the current character
//       let char = str[i];
  
//       // Modify the character in some way (e.g., convert to uppercase)
//       char = char.toUpperCase();
  
//       // Add the modified character to the new string
//       modifiedStr += char;
//     }
  
//     // Return the modified string
//     return modifiedStr;
//   }
  

  function Header() {
    // Define the input string as state, with an initial value of "I am a software engineer."
    const [str, setStr] = useState("I am a software engineer.");
    // Define a counter variable to keep track of the current index
    const [counter, setCounter] = useState(0);
  
    // Use the useEffect hook to update the string every second
    useEffect(() => {
      const interval = setInterval(() => {
        // If the string is empty, add a character back
        if (str.length === 0) {
          setStr("I am a software engineer.");
        }
        // Otherwise, remove a character from the string
        else {
          setStr(str.slice(0, -1));
        }
      }, 1000);
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(interval);
    }, [str]);
  
    return (
      <div>
        {str}
      </div>
    );
  }

  function MyComponent() {
    // Define the input string as state, with an initial value of "I am a software engineer."
    const [str, setStr] = useState("I am a software engineer.");
  
    // Define a counter variable to keep track of the current index
    const [counter, setCounter] = useState(0);
  
    // Use the useEffect hook to update the string every second
    useEffect(() => {
      const interval = setInterval(() => {
        // If the string is empty, add the next character
        if (str.length === 0) {
          setStr("I am a software engineer."[counter]);
          setCounter(counter + 1);
        }
        // If the string is not empty, remove a character or add the next character
        else {
          // If the string is not the full length, remove a character
          if (str.length < "I am a software engineer.".length) {
            setStr(str.slice(0, -1));
          }
          // If the string is the full length, do nothing
          else {
            // setStr(str);
          }
        }
      }, 1000);
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(interval);
    });
  
    return (
      <div>
        {str}
      </div>
    );
  }

export default MyComponent;
