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
  
  export const getShippingCost = async (lat, lon) => {
    try {
        const response = await axios.post(`${url.REST_API}/calculate-shipping`, { lat, lon});
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const getShippingDate = async (cart, ward) => {
    try {
        const response = await axios.post(`${url.REST_API}/calculate-shippingdate`, { cart, ward});
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const createOrder = async (userInfor, cart, shippingCost, orderPrice) => {
   
    try {
        const response = await axios.post(`${url.REST_API}/order`, { userInfor, cart, shippingCost, orderPrice }, 
           { headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};
export const getOrder = async (orderID) => {
    try {
        console.log('cvh', orderID)
        const response = await axios.get(`${url.REST_API}/getorder/${orderID}` );
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const getAllOrders = async () => {
    try {
        const response = await axios.get(`${url.REST_API}/allorders/`, {
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


export const getOrderHistory = async () => {

    try {
        const response = await axios.get(`${url.REST_API}/orderhistory`,{
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

export const createPaymentUrl = async (amount, bankCode, orderDescription, orderType, language) => {
    try {
        const response = await axios.post(`${url.REST_API}/create_payment_url`, {
            amount: amount,
            bankCode: bankCode,
            orderDescription: orderDescription,
            orderType: orderType,
            language: language
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error; // Pass the error to be handled by the calling function
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

export const updateGriller = async (griller) => {
    try {
        const response = await axios.put(`${url.REST_API}/update/griller/`, {griller}, {
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

export const newGriller = async (griller) => {
    try {
        const response = await axios.post(`${url.REST_API}/add/griller/`, {griller}, {
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

export const getAllCoupons = async () => {
    try {
        const response = await axios.get(`${url.REST_API}/getallcoupons/`, {
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

export const removeCoupon = async (couponID) => {
    try {
        const response = await axios.delete(`${url.REST_API}/remove/coupon/${couponID}`, {
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

export const updateCoupon = async (coupon) => {
    try {
        const response = await axios.put(`${url.REST_API}/update/coupon/`, {coupon}, {
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

export const newCoupon = async (coupon) => {
    try {
        const response = await axios.post(`${url.REST_API}/add/coupon/`, {coupon}, {
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

export const voucherApply = async (code ,orderValue, shippingCost ) => {
    try {
        const response = await axios.post(`${url.REST_API}/validateVoucher`, { code ,orderValue, shippingCost});
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const vnpaysuccess = async (params ) => {
    try {
        const response = await axios.get(`${url.REST_API}/vnpaysuccess`, { params});
        return response.data;
    } catch (error) {
        throw error;
    }
};