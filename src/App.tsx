import React from 'react';
import {useLoadScript} from "@react-google-maps/api";
import {Loader} from "./components/UI/Loader/Loader";
import Map from "./components/UI/Map/Map";

function App() {
  const  {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyCESEfkDnL3cR3BjBBTiiPVlLMYTwQoAw8",
    libraries: ["places"],
    language: 'en'
  })

  if(!isLoaded) return <div><Loader/></div>
  return (
    <Map/>
  );
}

export default App;
