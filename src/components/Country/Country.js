import React from 'react';

export default function Country({ name, iso2 }) {
  return (
    <div>
      <div>{name}</div>
      <img src={`https://flagcdn.com/40x30/${iso2.toLowerCase()}.png`}></img>
    </div>
  );
}
