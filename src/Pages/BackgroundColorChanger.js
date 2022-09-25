import React from 'react';
import { useParams } from 'react-router-dom'

export const BackgroundColorChanger = () => {
  const { colorname } = useParams()

  return (
    <main
      id="main"
      style={{ height: '100vh', backgroundColor: `${colorname}` }}
    >
      Background Color Changer
    </main>
  )
}