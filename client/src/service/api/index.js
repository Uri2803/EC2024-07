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
        console.error('Error checking authentication:', error);
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

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${url.REST_API}/allproducts`);
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
        console.log('data', error)
        throw error;
    }
};

export const getAllOrders = async () => {
    try {
        const response = await axios.get(`${url.REST_API}/getallorders/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
          console.log('Response Data:', response.data);
          return response.data;
    } catch (error) {
        throw error;
    }
};
export const orderConfirmation = async (orderID) => {
    try {
        const response = await axios.put(`${url.REST_API}/updateorders`, {orderID},{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log('Response Data:', response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const orderDelete = async (orderID) => {
    try {
        const response = await axios.delete(`${url.REST_API}/remove/order/${orderID}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log('Response Data:', response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const getAllGrillers = async () => {
    try {
        const response = await axios.get(`${url.REST_API}/getallgrillers/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
          console.log('Response Data:', response.data);
          return response.data;
    } catch (error) {
        throw error;
    }
};
export const removeGriller = async (grillerID) => {
    try {
        const response = await axios.delete(`${url.REST_API}/remove/griller/${grillerID}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log('Response Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error removing griller:', error);
        throw error;
    }
};

export const updateGriller = async (grillerID) => {
    try {
        const response = await axios.put(`${url.REST_API}/update/griller/`, {grillerID}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
          console.log('Response Data:', response.data);
          return response.data;
    } catch (error) {
        throw error;
    }
};