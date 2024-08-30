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
        const response = await axios.get(`${url.REST_API}/allorders`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const orderConfirmation = async (orderID) => {
    try {
        const response = await axios.get(`${url.REST_API}/updateorders/${orderID}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};