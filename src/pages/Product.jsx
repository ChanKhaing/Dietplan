import React from 'react'
import ProductCover from '../components/ProductCover'
import Productservice from '../components/Productservice'
import Productset from '../components/Productset'
import Productbox from '../components/Productbox'
import Creationproduct from '../components/Creationproduct'
import Sign from '../components/Sign'

const Product = () => {
  return (
    <div>
      <ProductCover />
      <Productset />
      <Sign/>
      <Creationproduct/>
      <Productservice />
      <Productbox/>
    </div>
  )
}

export default Product