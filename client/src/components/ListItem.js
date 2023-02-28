import React from 'react';

function ListItem({item}) {

    // const styles = {
    //     background: "#02577a",
    //     color: "white"
    //   };

    const {name, verietal, region, year} = item

  return (
    <div className='card'>
        <h2>{name}</h2>
        <li>{verietal}</li>
        <li>{region}</li>
        <li>{year}</li>
    </div>
  );
}

export default ListItem;