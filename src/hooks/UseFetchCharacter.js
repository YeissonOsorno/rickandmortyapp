import { useState,useEffect } from "react";
import { getCharacteres } from "../helpers/getCharacters";

const UseFetchCharacter = () => {
  const [state, setState] = useState([])

  useEffect(()=>{
    getCharacteres()
    .then(character=>{
      setState(character)
    })
  },[])
  return state;
}


export default UseFetchCharacter;