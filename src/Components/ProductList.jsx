import { useFilterContext } from '../Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';
import Product from './Product'

const ProductList = () => {

  const { filterProducts,setGridView } = useFilterContext();

  if(setGridView){
    return(
      <GridView products={filterProducts} />
    )
  }else{
    return(
      <ListView products={filterProducts} />
    )
  }

}

export default ProductList;