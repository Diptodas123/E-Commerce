import { useFilterContext } from '../Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {

  const { filterProducts, gridView } = useFilterContext();

  if (filterProducts.length === 0) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708473600&semt=ais"
          style={{ padding: "9rem 0", maxWidth: "120rem" }}
          alt="" />
      </div>
    )
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