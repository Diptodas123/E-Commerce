import { useFilterContext } from '../Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {

  const { filterProducts, gridView } = useFilterContext();

  if (filterProducts.length === 0) {
    return <div style={{ padding: "9rem 0", maxWidth: "120rem", textAlign: "center" }} > No Data </div>
  }

  if (gridView) {
    return (
      <GridView products={filterProducts} />
    )
  } else {
    return (
      <ListView products={filterProducts} />
    )
  }

}

export default ProductList;