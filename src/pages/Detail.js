import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

export const Detail = ({ detailId }) => {
  console.log(detailId)
  return <PhotoCardWithQuery id={detailId} />
}
