const crypto = require('crypto');
const querystring = require('qs');
const { format } = require('date-fns');

const tmnCode = 'TYI7O97Z';
const secretKey = 'PA9LMWSQV35BAZX4TE4OEDRXDUZ2WGHG';
const vnpUrl = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
const returnUrl = 'http://localhost:5173/order/';

const sortObject = (obj) => {
    const sorted = {};
    Object.keys(obj).sort().forEach(key => {
        sorted[key] = obj[key];
    });
    return sorted;
};

const createVNPAy = async (req, res) => {
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
        let locale = req.body.language || 'vn';
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
        console.log(vnp_Params)

        if (bankCode) {
            vnp_Params['vnp_BankCode'] = bankCode;
        }

        vnp_Params = sortObject(vnp_Params);
        const sortedParams = sortObject(vnp_Params);

        const signData = querystring.stringify(sortedParams, { encode: false });
        console.log('Sign Data:', signData); // Debug: check the sign data
        const hmac = crypto.createHmac("sha512", secretKey);
        const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex");
        console.log('Signed Hash:', signed); // Debug: check the signed hash

        vnp_Params['vnp_SecureHash'] = signed;

        const finalUrl = `${vnpUrl}?${querystring.stringify(vnp_Params, { encode: false })}`;
        console.log('Redirecting to:', finalUrl);
        res.redirect(finalUrl);
    } catch (error) {
        console.error('Error in createVNPAy:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createVNPAy
};
