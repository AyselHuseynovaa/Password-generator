import React  from "react";
import {
  upperCaseLetters,
  lowerCaseLetters,
  Allnumbers,
  specialCharacters,
} from "./Characters";
const PasswordButton = ({
  passwordLength,
  uppercase,
  lowercase,
  numbers,
  symbols,
  setPassword,
}) => {
  const handlePassword = (e) => {
    let characterList = "";
    if (uppercase) {
      characterList = characterList + upperCaseLetters;
    }
    if (lowercase) {
      characterList = characterList + lowerCaseLetters;
    }
    if (numbers) {
      characterList = characterList + Allnumbers;
    }
    if (symbols) {
      characterList = characterList + specialCharacters;
    }
    setPassword(createPassword(characterList));
  };

  const createPassword = (characterList) => {
    let password = ""
    let i=0
    for (; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterList.length);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };



  return (
    <div>
      <div className="generator">
        <button onClick={handlePassword} className="btn">
          Generate password
        </button>
      </div>
    </div>
  );
};
export default PasswordButton;
