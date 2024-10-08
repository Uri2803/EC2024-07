import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Avatar, Select, Grid, MenuItem, Typography, FormControl, InputLabel, OutlinedInput ,Alert, CircularProgress } from '@mui/material';
import {voucherApply, getProvince, getDistricts, getWards, getShippingCost, getUserInfor , getShippingDate, createOrder} from '../../service/api';
import { useCart } from '../../context/CartContext'; 
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate, useLocation  } from "react-router-dom";
import VNPay from './VNPay'

const formatDateTimeForInput = (isoDateTime) => {
    const date = new Date(isoDateTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const paypalOptions = {
    "client-id": "AYtH9i-MIFXQKrUj8dIbTnVpXCpRmc6IntqbaIjQLZWHHD6e5-V-4apifhskLmHwVYO4bt5oxLJE7q6b"
  };
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

const BodyBox = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  margin: 10vh 0;
  flex-direction: row;
`;

const ShippingBox = styled.div`
    width: 60%;
`;

const CartBox = styled.div`
    width: 40%;
`;

const TitleStyle = styled.p`
  font-size: 1.5vw;
  font-weight: 500;
  margin: 2vw 0px;
`;

const PaymentBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%; 
  height: 4vw;
  border: 0.5px solid black; 
  padding: 1px; 
  box-sizing: border-box;
  cursor: pointer;
  color: ${(props) => (props.selected ? 'orange' : 'black')}; 
  border-color: ${(props) => (props.selected ? 'orange' : 'black')}; 
`;


const BoxImg =styled.div`
    width: 10vw;
    height: 4vw;
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
`; 
const ImgBox = styled.img`
    height: 3.5vw;
`; 


const TexPayment = styled.p`
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
`;
const BoxCart = styled.div`
    width: 100%;
    border-top: 0.5px solid black;  
    border-bottom: 0.5px solid black;  
    padding: 1px; 
    box-sizing: border-box;
    margin: 0 0 2vw 0;
`;
const CartItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
`;

const ProductName = styled.div`
    flex: 2;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    align-items: center;

`;

const Quantity = styled.div`
    flex: 1;
    text-align: center;
`;

const Price = styled.div`
    flex: 1;
    text-align: right;
    font-size: 1rem;
    font-weight: bold;
`;
const SubmitButton = styled(Box)`
  width: 25%;
  height: 3.5vw;
  padding: 10px;
  background-color: #f48c48;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* Thêm cursor pointer để hiển thị con trỏ khi hover */
  position: relative;
`;

const BoxVoucher = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    margin: 2vw 0;
`;
const PaymentSubmit = styled.div`
  width: 100%;
  height: 3.5vw;
  padding: 10px;
  background-color: #f48c48;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* Thêm cursor pointer để hiển thị con trỏ khi hover */
  position: relative;

`
const PayPalBox = styled.div`
  width: 100%;
  margin: 2vw 0;
`;

const Order = () => {
  const [provinces, setProvinces] = useState([]);
  const [provinceId, setProvinceId] = useState('');
  const [districts, setDistricts] = useState([]);
  const [districtId, setDistrictId] = useState('');
  const [wards, setWards] = useState([]);
  const [wardId, setWardId] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [shippingCost, setShippingCost] = useState(0);
  const [discount, setDiscount] = useState(0)
  const [initShipDate, setInitShipdate] =useState('');
  const { cart} = useCart(); 
  const navigate = useNavigate(); 
  const location = useLocation();
  const [messageVoucher, SetMessageVoucher] =useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [userInfor, setUserInfor] = useState({
    UserFullName: '',
    PhoneNumber: '',
    Email: '',
    Address: '',
    HouseStreet: '',
    Note: '',
    ShippDate: ''
  });
  const [voucher, setVoucher] = useState(null);
  const handleVoucherApply = async (code) => {
    if(code){
      try {
          const result = await voucherApply(code, calculateCartTotal(), shippingCost);
          console.log(result)
          if (result.valid) {
              setVoucher(code);
              setDiscount(result.discount);
              SetMessageVoucher(result.message)
              setIsSuccess(true)
          } else {
                SetMessageVoucher(result.message)
          }
      } catch (error) {
          console.error('Error applying voucher:', error);
            SetMessageVoucher('Lỗi khi áp dụng voucher. Vui lòng thử lại.')
      }
    }
};

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const data = await getProvince();
        setProvinces(data.data);
      } catch (error) {
        console.error('Error fetching province data:', error);
      }
    };
    fetchProvinces();
  }, []);

  useEffect(() => {
    if (provinceId) {
      const fetchDistricts = async () => {
        try {
          const data = await getDistricts(provinceId);
          setDistricts(data.data);
          setDistrictId(''); 
          setWards([]);
          setWardId('');
        } catch (error) {
          console.error('Error fetching districts:', error);
        }
      };
      fetchDistricts();
    }
  }, [provinceId]);

  useEffect(() => {
    if (districtId) {
      const fetchWards = async () => {
        try {
          const data = await getWards(districtId);
          setWards(data.data);
          setWardId(''); 
        } catch (error) {
          console.error('Error fetching wards:', error);
        }
      };
      
      fetchWards();
    }
  }, [districtId]);
  useEffect(() => {
    if (wardId) {
      const ward = wards.find((ward) => ward.id === wardId);
      console.log(ward)
      if (ward) {
        fetchShippingCost(ward.latitude, ward.longitude);
        fetchShippDate(cart, ward) 
        handleVoucherApply (voucher)
       
      }
    }
    
  }, [wardId, wards]); 
  useEffect(() => {

    handleVoucherApply (voucher)
  }, [shippingCost]); 

  const fetchShippingCost = async (lat, long) => {
    try {
      const data = await getShippingCost(lat, long);
      setShippingCost(data.shippingCost);
      setmessNotif('')
    } catch (error) {
        setmessNotif('Không hỗ trợ giao hàng tại địa điểm này')
      console.error('Error fetching shipping cost:', error);
    }
  };
  const handleProvinceChange = (event) => {
    setProvinceId(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrictId(event.target.value);
  };

  const handleWardChange = (event) => {
    setWardId(event.target.value);

  
    
  };
  const [messNotif, setmessNotif] = useState("");
  const handlePaymentSelect = (method) => {
    if(userInfor. UserFullName && userInfor.Email && userInfor.PhoneNumber && selectedWard && userInfor.HouseStreet){
        setmessNotif('')
        setSelectedPayment(method);
        
    }else{
        setmessNotif('Vui lòng điền đủ thông tin')
    } 
  };

  const selectedProvince = provinces.find((province) => province.id === provinceId);
  const selectedDistrict = districts.find((district) => district.id === districtId);
  const selectedWard = wards.find((ward) => ward.id === wardId);
  const calculateCartTotal = () => {
    return cart.reduce((total, item) => total + item.Price * item.CartItemQuantity, 0);
  };
  
  const handleSubmit = async () => {
    
    try {
      const response = await await createOrder( userInfor, cart ,shippingCost, calculateCartTotal())
      console.log(response)
      console.log('ctd', response)
      if (response.status) {
        setmessNotif("Order placed successfully!");
        alert('thanh toán và đặt hàng thành công');
        console.log('thành công')
        handleNavigation(response.orderID);  
        window.location.reload(); 
      } else {
        alert('Lỗi thanh toán vui lòng thử lại');
        setmessNotif("Error placing the order.");
      }
    } catch (error) {
        alert('Lỗi thanh toán vui lòng thử lại');
        setmessNotif("Error placing the order.");
      console.error('Error submitting order:', error);
    }
  };

  const getUser = async () => {
    try {
      const result = await getUserInfor();
      setUserInfor(result.userInfor);
    } catch (err) {
      console.error(err.response?.data?.message || 'Login failed.');
    }
  }
  const fetchShippDate = async (cart, ward) => {
    try {
      const result = await getShippingDate(cart, ward);
      const shipdate = result.estimatedShippingDate;
      console.log('Ship date fetched:', shipdate); // Kiểm tra giá trị shipdate
  
      await setUserInfor(prevState => ({
        ...prevState,
        ShippDate: shipdate
      }));
      setInitShipdate(shipdate)
    } catch (err) {
      console.error(err.response?.data?.message || 'Login failed.');
    }
  };
  
  useEffect(()=>{
    getUser();
    
  }, []);
  const handleNavigation = (orderID) => {
    // Sử dụng navigate để điều hướng
    navigate(`/ordersuccess/${orderID}`);

    // Sau khi điều hướng xong, reload lại trang
    window.location.reload();
  };

  useEffect(() => {
    if (selectedWard || selectedDistrict || selectedProvince) {
      setUserInfor({
        ...userInfor,
        Address: `${selectedWard && selectedWard.full_name ? selectedWard.full_name + ', ' : ''}${selectedDistrict && selectedDistrict.full_name ? selectedDistrict.full_name + ', ' : ''}${selectedProvince && selectedProvince.full_name ? selectedProvince.full_name : ''}`
      });
    }
  }, [selectedWard, selectedDistrict, selectedProvince]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
   if (name === 'ShippDate' && value < initShipDate) {
       alert('Ngày giao hàng không được nhỏ hơn ngày dự kiến giao hàng.');
        return;
    } else {
        setUserInfor({
            ...userInfor,
            [name]: value
        });
    }
};
const VNPayBox = styled.div`
  width: 100%;
  margin: 2vw 0;
`;

  
  return (
    <MainContainer>
      <Header />
      <BodyBox>
        <ShippingBox>
            <TitleStyle>Thông tin vận chuyển</TitleStyle>
            <Grid container spacing={3} sx={{ width: '95%' }}>
                <Grid item xs={6}>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-Ho">Họ Tên</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-Ho"
                            label="Họ Tên"
                            name="UserFullName"
                            value={userInfor.UserFullName}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-SDT">Số điện thoại</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-SDT"
                            label="Số điện thoại"
                            name="PhoneNumber"
                            value={userInfor.PhoneNumber}
                            onChange={handleInputChange}
                            
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-SDT">Email</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-Email"
                            label="Email"
                            name="Email"
                            value={userInfor.Email}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel id="thanh-pho">Thành phố</InputLabel>
                        <Select
                            labelId="thanh-pho"
                            id="thanh-pho"
                            value={provinceId}
                            onChange={handleProvinceChange}
                            input={<OutlinedInput label="Thành phố" />}
                        >
                            {provinces.map((province) => (
                                <MenuItem key={province.id} value={province.id}>
                                    {province.full_name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel id="quan-huyen">Quận/Huyện</InputLabel>
                        <Select
                            labelId="quan-huyen"
                            id="quan-huyen"
                            value={districtId}
                            onChange={handleDistrictChange}
                            input={<OutlinedInput label="Quận/Huyện" />}
                        >
                            {districts.map((district) => (
                                <MenuItem key={district.id} value={district.id}>
                                    {district.full_name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel id="phuong-xa">Phường/Xã</InputLabel>
                        <Select
                            labelId="phuong-xa"
                            id="phuong-xa"
                            value={wardId}
                            onChange={handleWardChange}
                            input={<OutlinedInput label="Phường/Xã" />}
                        >
                            {wards.map((ward) => (
                                <MenuItem key={ward.id} value={ward.id}>
                                    {ward.full_name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-sonha-tenduongct">Số nhà, Tên đường</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-sonha-tenduongct"
                            label="Số nhà, Tên đường"
                            name="HouseStreet"
                            placeholder="(VD: 227 Nguyễn Văn Cừ)"
                          
                            value={userInfor.HouseStreet}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={8}>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-diachi">Địa chỉ</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-Diachi"
                            label="Địa Chỉ"
                            name="Address"
                            value={userInfor.Address}
                            onChange={handleInputChange}
                            placeholder="Xã/Phường, Quận/Huyện, Tỉnh/Thành"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-Ngaygiaobanh" >Ngày giao Bánh</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-ShippDate"
                            label="ShippDate"
                            name="ShippDate"
                            type="datetime-local"
                            value={formatDateTimeForInput(userInfor.ShippDate)}
                            onChange={(event) => handleInputChange(event, userInfor, setUserInfor)}
                            
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={8}>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-ghichu">Ghi chú</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-ghichu"
                            label="Ghi chú"
                            name="Note"
                            value={userInfor.Note}
                            onChange={handleInputChange}
                            placeholder="Ghi chú (ví dụ: giao giờ hành chính)"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                {messNotif ? (
                    <Alert severity="error">{messNotif}</Alert>
                ) : null}

                </Grid>
                

               

                  
               
            </Grid>


            <TitleStyle>Hình thức thanh toán</TitleStyle>
            <Grid container spacing={3} sx={{ width: '95%' }}>
                <Grid item xs={12}>
                    <PaymentBox
                        selected={selectedPayment === 'paypal'}
                        onClick={() => handlePaymentSelect('paypal')}
                    >
                        <BoxImg>
                            <ImgBox src="/public/paypal.png" alt="logo paypal" />
                        </BoxImg>
                        <TexPayment>Thanh toán qua ví điện tử PayPal</TexPayment>
                    </PaymentBox>
                </Grid>
                <Grid item xs={12}>
                    <PaymentBox
                        selected={selectedPayment === 'momo'}
                        onClick={() => handlePaymentSelect('momo')}
                    >
                        <BoxImg>
                            <ImgBox src="/public/momo.png" alt="logo momo" />
                        </BoxImg>
                        <TexPayment>Thanh toán qua ví điện tử MoMo</TexPayment>
                    </PaymentBox>
                </Grid>
                <Grid item xs={12}>
                    <PaymentBox
                        selected={selectedPayment === 'vnpay'}
                        onClick={() => handlePaymentSelect('vnpay')}
                    >
                        <BoxImg>
                            <ImgBox src="/public/Icon-VNPAY-QR.webp" alt="logo vnp" />
                        </BoxImg>
                        <TexPayment>Thanh toán qua ví điện tử VNPay</TexPayment>
                    </PaymentBox>
                </Grid>
            </Grid>


        </ShippingBox>
        <CartBox>
            <TitleStyle>Giỏ hàng</TitleStyle>
            <CartItem>
                    <ProductName></ProductName>
                    <Quantity>Số lượng</Quantity>
                    <Price>Giá</Price>
            </CartItem>
            <BoxCart> 
                {cart.map((item)=>(
                <CartItem key={item.ProductID}>
                    <ProductName> 
                        <Avatar alt=""src={`${item.ImageUrl}/img1.jpg`}sx={{ width: '5vw', height: '5vw', marginRight: '1vw' }}/>
                        <Typography variant='body1'>{item.ProductName}</Typography>
                    </ProductName>
                    <Quantity>{item.CartItemQuantity}</Quantity>
                    <Price>{(item.Price * item.CartItemQuantity).toLocaleString('vi-VN')}đ</Price>
                </CartItem>

                ))}
            </BoxCart>

            <BoxVoucher>
                <FormControl  sx={{ width: '70%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-diachi">Mã giảm giá</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-diachi"
                            label="Mã giảm gái"
                            name="Voucher"
                            value={voucher || ''}
                        onChange={(e) => setVoucher(e.target.value)}
                            placeholder="Nhập mã giảm giá"
                        />
                </FormControl>
                <SubmitButton onClick={() => handleVoucherApply(voucher)}>
                    Kiểm tra

                </SubmitButton>    
                

            </BoxVoucher>
            {messageVoucher ? (
                <Alert severity={isSuccess ? "success" : "error"}>
                    {messageVoucher}
                </Alert>
            ) : null}
            <BoxCart>
                <CartItem>
                    <ProductName>Tạm tính</ProductName>
                    <Quantity></Quantity>
                    <Price>{calculateCartTotal().toLocaleString('vi-VN')}đ</Price>
                </CartItem>
                <CartItem>
                    <ProductName>Giảm giá</ProductName>
                    <Quantity></Quantity>
                    <Price>-{discount.toLocaleString('vi-VN')}đ</Price>
                </CartItem>
                <CartItem>
                    <ProductName>Phí giao hàng</ProductName>
                    <Quantity></Quantity>
                    <Price>{shippingCost.toLocaleString('vi-VN')}đ</Price>
                </CartItem>    
            </BoxCart>
            <CartItem>
                    <ProductName>Tổng thanh toán</ProductName>
                    <Quantity></Quantity>
                    <Price>{(calculateCartTotal() + shippingCost - discount ).toLocaleString('vi-VN') }</Price>
            </CartItem>
        
            {selectedPayment === 'paypal' &&(
                    <PayPalBox>
                    <PayPalScriptProvider options={paypalOptions}>
                        <PayPalButtons
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            value: calculateCartTotal() + shippingCost - discount,
                                        },
                                    }],
                                });
                            }}
                            onApprove={async (data, actions) => {
                                await actions.order.capture();
                                handleSubmit(); // Call your handleSubmit function to complete the order
                            }}
                            onError={(err) => {
                                console.error("PayPal Checkout error:", err);
                                setmessNotif("Payment failed. Please try again.");
                            }}
                        />
                    </PayPalScriptProvider>
                </PayPalBox>
            )}
            {selectedPayment == 'momo' &&(
               
                <BoxVoucher>
                <PaymentSubmit> <Typography variant='h6'> Thanh Toán </Typography> </PaymentSubmit>
                </BoxVoucher>
            )
            }
            {selectedPayment === 'vnpay' && (
              <VNPay totalPayment={calculateCartTotal() + shippingCost - discount} />
            
          )}
            


        </CartBox>
    
      </BodyBox>
      <Footer />
    </MainContainer>
  );
};

export default Order;
