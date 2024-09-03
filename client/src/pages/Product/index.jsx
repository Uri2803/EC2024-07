import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Pagination } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Filter from './Filter';
import Data from './Data';
import FilterPrice from './FilterPrice';
import ProductItem from './Product';
import { getAllProducts } from '../../service/api';
import { useLocation, useNavigate } from 'react-router-dom'; 

const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
`;

const BodyBox = styled(Box)`
    min-height: 80vh;
    width: 100vw;
    margin: 0 0;
    padding: 0 1vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

const Category = styled(Box)`
    width: 20vw;
    margin: 2vw 0;
    padding-top: 3vw;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 15vw;
        margin: 3vw;
    }
   @media (max-width: 480px) {
        width: 29vw;
        margin: 1vw;
  }
`;

const BoxProduct = styled(Box)`
    display: flex;
    width: 55vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    padding: 2vw;
    margin-left: 1vw;
    @media (max-width: 768px) {
        width: 60vw;
        margin-left: 3vw;
    }
    @media (max-width: 480px) {
        width: 65vw;
        margin-left: 2vw;
    }
`;

const CategoryTile = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.3vw;
`;

const StyledPagination = styled(Pagination)`
  .MuiPaginationItem-root {
    color: #000; 
    &:hover {
      color: #F48C48; 
    }
  }
  .Mui-selected {
    color: #fff; 
    background-color: #F48C48 !important;
  }
`;
const NoProductsMessage = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.2vw;
  color: ${(props) => props.theme.colors.text};
  margin-top: 2vw;
`;


export default function Product({ filter }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [priceRange, setPriceRange] = useState([1000, 500000]); // Added priceRange state
    const productsPerPage = 6;
    const location = useLocation();
    const navigate = useNavigate(); 
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('search')
    console.log(searchTerm)
    const getProducts = async () => {
        try {
            const query = new URLSearchParams({
                ...selectedFilters,
                minPrice: priceRange[0],
                maxPrice: priceRange[1],
                search: searchTerm || ''
            }).toString();
            const response = await getAllProducts(query);
            setProducts(response.products);
             // Xóa tham số tìm kiếm nếu có sản phẩm
             if (response.products.length <= 0) {
               
            }

           
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, [selectedFilters, priceRange, currentPage, searchTerm]);

    useEffect(() => {
        filterProducts();
    }, [products, selectedFilters, priceRange]);

    const filterProducts = () => {
        let result = [...products];
        
        if (selectedFilters) {
            const { typePoduct, flavor } = selectedFilters;
    
            // Kiểm tra nếu typePoduct là chuỗi trước khi gọi .split()
            if (typeof typePoduct === 'string' && typePoduct) {
                const typeProductNames = typePoduct.split(',');
                result = result.filter(product =>
                    typeProductNames.includes(product.TypeProductName)
                );
            }
    
            if (typeof flavor === 'string' && flavor) {
                const flavors = flavor.split(',').map(f => f.trim());
                result = result.filter(product =>
                    flavors.some(flavor => product.ProductName.includes(flavor))
                );
            }
        }
    
        const [minPrice, maxPrice] = priceRange;
        result = result.filter(product => product.Price >= minPrice && product.Price <= maxPrice);
    
        setFilteredProducts(result);
    };

    const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
    const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <MainContainer>
            <Header />
            <BodyBox>
                <Category>
                    <CategoryTile>
                        <FilterAltIcon sx={{ fontSize: '2.5vw' }} />
                        BỘ LỌC TÌM KIẾM
                    </CategoryTile>
                    <Filter filter={Data.filter_1} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                    <Filter filter={Data.filter_2} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                    <FilterPrice onChange={setPriceRange} />
                </Category>
                <BoxProduct>
                    {currentProducts.length > 0 ? (
                        currentProducts.map((product, index) => (
                        <ProductItem product={product} key={index} />
                        ))
                    ) : (
                        <NoProductsMessage>Không có sản phẩm nào được tìm thấy.</NoProductsMessage>
                    )}
                </BoxProduct>
            </BodyBox>
            <StyledPagination
                count={pageCount}
                page={currentPage}
                onChange={handleChangePage}
                shape="rounded"
                sx={{ fontSize: '5vw' }}
            />
            <Footer />
        </MainContainer>
    );
}
