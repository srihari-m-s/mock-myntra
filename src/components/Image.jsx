import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

// <img />
/**
 * Image Component from react-medium-image-zoom library
 * on image click shows full screen image.
 * Resets on out side click
 * 
 * props--
 * 1. imgURL "String"
 */
export const Image = ({imgUrl}) => (
  <Zoom>
    <img
      alt="Product Image"
      src={imgUrl}
      width="300"
    />
  </Zoom>
)