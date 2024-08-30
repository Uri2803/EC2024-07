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