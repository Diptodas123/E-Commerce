import { useFilterContext } from '../Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {

  const { filterProducts,gridView } = useFilterContext();

  if(gridView){
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