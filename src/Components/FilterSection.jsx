import styled from 'styled-components';
import { useFilterContext } from '../Context/FilterContext';
import { FaCheck } from 'react-icons/fa';
import FormatPrice from '../Helpers/FormatPrice';

const FilterSection = () => {

  const { filters: { text, category, color, price, maxPrice, minPrice }, allProducts, updateFilterValue } = useFilterContext();

  //to get the unique data of each field for filter
  const getUniqueData = (data, property) => {
    let newVal = data.map((currentElm) => {
      return currentElm[property];
    });

    if (property === 'colors') {
      // return (newVal = ['all', ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);

  }

  const categoryData = getUniqueData(allProducts, "category");
  const companyData = getUniqueData(allProducts, "company");
  const colorData = getUniqueData(allProducts, 'colors');

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}>
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form action='#'>
          <select name='company'
            id='company'
            className='filter-company--select'
            onClick={updateFilterValue}>
            {
              companyData.map((currentElm, index) => {
                return (
                  <option key={index}
                    name='company'
                    value={currentElm}>
                    {currentElm}
                  </option>
                );
              })
            }
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {
            colorData.map((currentElm, index) => {
              if (currentElm === 'all') {
                return (
                  <button key={index}
                    value={currentElm} name='color' type='button'
                    className='color-all--style' onClick={updateFilterValue}>
                    All
                  </button>
                )
              }
              return (
                <button key={index}
                  type='button'
                  className={color === currentElm ? 'btnStyle active' : 'btnStyle'}
                  name={'color'}
                  value={currentElm}
                  style={{ backgroundColor: currentElm }}
                  onClick={updateFilterValue}>
                  {color === currentElm ? <FaCheck className="checkStyle" /> : null}
                </button>
              );
            })
          }
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input type="range"
          name="price"
          step={500}
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection