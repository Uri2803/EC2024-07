import { url } from "./config";
import axios from 'axios';

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${url.REST_API}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const isAuthenticated = async () => {
    try {
        const response = await axios.get(`${url.REST_API}/check-token`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(response)
        if (response.status === 200) { 
            return response.data.isAuthenticated; // Tùy thuộc vào cấu trúc dữ liệu trả về từ API
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
};
export const getUserInfor = async () => {
    try {
        const response = await axios.get(`${url.REST_API}/userinfor`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (response.status) { 
            return response.data;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
};

export const getAllProducts = async (filters = {}) => {
    try {
      const filterParams = new URLSearchParams(filters).toString();
      const response = await axios.get(`${url.REST_API}/allproducts?${filterParams}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
export const getProductDetail = async (productID) => {
    try {
        
        const response = await axios.get(`${url.REST_API}/productdetail/${productID}`);
        
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const register = async (email, username, password) => {
    try {
        const response = await axios.post(`${url.REST_API}/register`, {
            email,
            password,
            username
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addToCart = async (productID, quantity) => {
    try {
      const response = await axios.post(`${url.REST_API}/cart/add`, {
        productID,
        quantity
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export const getCart = async () => {
    try {
        const response = await axios.get(`${url.REST_API}/cart`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (response.status === 200) {
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        throw error;
    }
};
export const removeFromCart = async (productID) => {
    try {
    console.log(productID)
    const response = await axios.delete(`${url.REST_API}/remove/${productID}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
      console.log('Response Data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
};
export const updateCartQuantity = async (productID, quantity) => {
    try {
        const response = await axios.put(`${url.REST_API}/cart/update`, {
            productID,
            quantity
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getProvince = async () => {
    try {
        const response = axios.get('https://esgoo.net/api-tinhthanh/1/0.htm');
        return (await response).data ;
        
    } catch (error) {
        throw error;
    }
};
export const getDistricts = async (provinceId) => {
    try {
      const response = await axios.get(`https://esgoo.net/api-tinhthanh/2/${provinceId}.htm`);
      return response.data;
    } catch (error) {
      console.error('Error fetching districts data:', error);
      throw error;
    }
  };
  export const getWards = async (districtId) => {
    try {
      const response = await axios.get(`https://esgoo.net/api-tinhthanh/3/${districtId}.htm`);
      return response.data;
    } catch (error) {
      console.error('Error fetching wards data:', error);
      throw error;
    }
  };
  
  export const getshippingCost = async (lat, lon) => {
    try {
        const response = await axios.post(`${url.REST_API}/calculate-shipping`, { lat, lon});
        return response.data;
    } catch (error) {
        throw error;
    }
};