const crypto = require('crypto');
const querystring = require('qs');
const { format } = require('date-fns');

const tmnCode = 'TYI7O97Z';
const secretKey = 'PA9LMWSQV35BAZX4TE4OEDRXDUZ2WGHG';
const vnpUrl = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
const returnUrl = 'https://ec07backery.hmquang.info.vn/vnpaysuccess';
const vnpApi = 'https://sandbox.vnpayment.vn/merchant_webapi/api/transaction';

const sortObject = (obj) => {
    const sorted = {};
    Object.keys(obj).sort().forEach(key => {
        sorted[key] = obj[key];
    });
    return sorted;
};

const createVNPAy = async (req, res) => {
    process.env.TZ = "Asia/Ho_Chi_Minh";
    
    try {
        const ipAddr = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;

        const date = new Date();
        
        const createDate = format(date, 'yyyyMMddHHmmss');
        const orderId = format(date, 'HHmmss');
        const amount = req.body.amount;
        const bankCode = req.body.bankCode;
        const orderInfo = req.body.orderDescription;
        const orderType = req.body.orderType;
        let locale = req.body.language;
        if (locale === null || locale === "") {
            locale = "vn";
        }
        const currCode = 'VND';

        if (!amount || !orderInfo || !orderType) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        let vnp_Params = {
            'vnp_Version': '2.1.0',
            'vnp_Command': 'pay',
            'vnp_TmnCode': tmnCode,
            'vnp_Locale': locale,
            'vnp_CurrCode': currCode,
            'vnp_TxnRef': orderId,
            'vnp_OrderInfo': orderInfo,
            'vnp_OrderType': orderType,
            'vnp_Amount': amount * 100,
            'vnp_ReturnUrl': returnUrl,
            'vnp_IpAddr': ipAddr,
            'vnp_CreateDate': createDate
        };
        console.log(vnp_Params);
        
        if (bankCode) {
            vnp_Params['vnp_BankCode'] = bankCode;
        }
        
        vnp_Params = sortObject(vnp_Params);
        const sortedParams = sortObject(vnp_Params);
        
        // Create a URL object
        const url = new URL(vnpUrl);
        
        // Add parameters to the URL
        for (let [key, value] of Object.entries(sortedParams)) {
            url.searchParams.append(key, value);
        }
        
        const signData = url.searchParams.toString();
        console.log('Sign Data:', signData); // Debug: check the sign data
        
        const hmac = crypto.createHmac("sha512", secretKey);
        const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex");
        console.log('Signed Hash:', signed); // Debug: check the signed hash
        
        url.searchParams.append('vnp_SecureHash', signed);
        
        const finalUrl = url.toString();

        return res.status(200).json({ status: true, finalUrl });
    } catch (error) {
        console.error('Error in createVNPAy:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const queryVNPAy = async (req, res) => {
    process.env.TZ = "Asia/Ho_Chi_Minh";
  let date = new Date();

  let config = require("config");
  let crypto = require("crypto");

  let vnp_TmnCode = config.get("vnp_TmnCode");
  let secretKey = config.get("vnp_HashSecret");
  let vnp_Api = config.get("vnp_Api");

  let vnp_TxnRef = req.body.orderId;
  let vnp_TransactionDate = req.body.transDate;

  let vnp_RequestId = moment(date).format("HHmmss");
  let vnp_Version = "2.1.0";
  let vnp_Command = "querydr";
  let vnp_OrderInfo = "Truy van GD ma:" + vnp_TxnRef;

  let vnp_IpAddr =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  let currCode = "VND";
  let vnp_CreateDate = moment(date).format("YYYYMMDDHHmmss");

  let data =
    vnp_RequestId +
    "|" +
    vnp_Version +
    "|" +
    vnp_Command +
    "|" +
    vnp_TmnCode +
    "|" +
    vnp_TxnRef +
    "|" +
    vnp_TransactionDate +
    "|" +
    vnp_CreateDate +
    "|" +
    vnp_IpAddr +
    "|" +
    vnp_OrderInfo;

  let hmac = crypto.createHmac("sha512", secretKey);
  let vnp_SecureHash = hmac.update(new Buffer(data, "utf-8")).digest("hex");

  let dataObj = {
    vnp_RequestId: vnp_RequestId,
    vnp_Version: vnp_Version,
    vnp_Command: vnp_Command,
    vnp_TmnCode: vnp_TmnCode,
    vnp_TxnRef: vnp_TxnRef,
    vnp_OrderInfo: vnp_OrderInfo,
    vnp_TransactionDate: vnp_TransactionDate,
    vnp_CreateDate: vnp_CreateDate,
    vnp_IpAddr: vnp_IpAddr,
    vnp_SecureHash: vnp_SecureHash,
  };
  request(
    {
      url: vnpApi,
      method: "POST",
      json: true,
      body: dataObj,
    },
    function (error, response, body) {
      console.log(response);
    }
  );

}



const verifyPayment = (params) => { 
    const secureHash = params.vnp_SecureHash;
    delete params.vnp_SecureHash; // Xóa tham số secure hash khỏi đối tượng params

    // Sắp xếp tham số theo thứ tự và tạo chuỗi ký
    const sortedParams = Object.keys(params).sort().map(key => `${key}=${params[key]}`).join('&');
    const hashString = `${sortedParams}&vnp_secret_key=${secretKey}`;

    // Tính toán chữ ký bảo mật
    const calculatedHash = crypto.createHash('sha512').update(hashString, 'utf-8').digest('hex');

    return secureHash === calculatedHash;
};
  const handlePaymentResult = (req, res) => {
    const params = req.body;
    
    if (verifyPayment(params)) {
        console.log('hợp lệ ')
        return res.status(200).json({ status: true, message: 'Thanh toán thành công' });
    } else {
        console.log('k hợp lệ ')
        res.status(500).json({ error: 'Internal Server Error, thanh toán thất bại' });
    }
};

module.exports = {
    createVNPAy, queryVNPAy,
    handlePaymentResult: handlePaymentResult
};
