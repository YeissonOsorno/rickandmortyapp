import React from 'react'
import UseFetchCharacter from '../../hooks/UseFetchCharacter';
import CharacterItem from '../UI/CharacterItem';
const GridCharacters = () => {

  const characterList = UseFetchCharacter();

  return ( 
    <>
        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 '>
              {characterList.map(item=>
                <CharacterItem />
              )}
          </div>
        </div>
    </>
   );
}
 
export default GridCharacters;