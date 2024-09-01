import React from 'react'
import ProductCover from '../components/ProductCover'
import Productservice from '../components/Productservice'
import Productset from '../components/Productset'
import Productbox from '../components/Productbox'
import Creationproduct from '../components/Creationproduct'
import Sign from '../components/Sign'
import ProductSpecial from '../components/ProductSpecial'
import ProductJuice from '../components/ProductJuice'
import ProductSale from '../components/ProductSale'

const Product = () => {
  return (
    <div>
      <ProductCover />
      <Productset />
      {/* product show  */}
      <ProductSpecial />
      <ProductJuice/>
      <Creationproduct />
      <ProductSale/>
      {/* <Productservice /> */}
      <Productbox/>
    </div>
  )
}

export default Product