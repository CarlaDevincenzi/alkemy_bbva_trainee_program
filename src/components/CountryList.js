import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CountryList() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((data) => {
      setCountry(data.data);
      console.log("hola");
    });
  }, []);
  function handleClick(nativeName) {
    return alert(`El nombre nativo del pais es: ${nativeName}`);
  }
  return (
    <>
      {country.map((pais, key) => {
        return (
          <div onClick={() => handleClick(pais.nativeName)}>
            <img src={pais.flag} alt="" />
            <h4>{pais.name}</h4>
          </div>
        );
      })}
    </>
  );
}