import styled from 'styled-components';
import Sort from '../Sort';
import FilterSection from '../FilterSection';
import ProductList from '../ProductList';
import { useFilterContext } from '../../Context/FilterContext';

const Products = () => {
  return (
    <Wrapper>
      <div className='container grid grid-filter-column'>
        <div>
          <FilterSection />
        </div>

        <section className='product-view--sort'>
          <div className="sort-fliter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;