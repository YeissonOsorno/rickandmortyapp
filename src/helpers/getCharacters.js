// This component do the fetch request to get 
export const getCharacteres = async()=>{
  const url = `https://rickandmortyapi.com/api/character`;
  const response = await fetch(url);
  const {results} =  await response.json();
  return results;
}