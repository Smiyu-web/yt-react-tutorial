import { useState, useEffect } from 'react';

export const List = ({ langs }) => {

  // subscribe -> unscribe?
  useEffect(() => {
    console.log('list.js');

    return () => {
      console.log('list.js: unmount');
    }
  })

  return (
    <div>
      {
        langs.map((lang, index) => {
          return <div key={index}>{ lang }</div>
        })
      }
    </div>
  )
}