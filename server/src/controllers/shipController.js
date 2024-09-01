const quan7Lat = 10.7375481;
const quan7Lon = 106.7302238;
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Bán kính của Trái Đất theo km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Khoảng cách theo km
    return distance;
  }


  const shippingRates = [
    { maxDistance: 10, cost: 15000 },
    { maxDistance: 20, cost: 20000 }, 
    { maxDistance: 30, cost: 22000 }, 
    { maxDistance: 50, cost: 23000 }, 
    { maxDistance: 70, cost: 24000 },
    { maxDistance: 100, cost: 25000 }, 
    { maxDistance: 150, cost: 27000 }, 
    { maxDistance: 200, cost: 30000 }, 
    { maxDistance: 500, cost: 35000 },
    { maxDistance: 1000, cost: 35000 },
     
  ];
  let calculateShipping = async (req, res) => {
    const { lat, lon } = req.body;

    if(lat&& lon){
        const distance = calculateDistance(quan7Lat,quan7Lon , lat, lon);
        let shippingCost = 0;
        for (const rate of shippingRates) {
        if (distance <= rate.maxDistance) {
            shippingCost = rate.cost;
            break;
        }
        }
    
        if (shippingCost === 0) {
        return res.status(400).json({ error: 'Khoảng cách quá xa' });
        }
    
        return res.json({ shippingCost });

    }
    else {
      return res.status(400).json({ error: 'Thiếu thông tin đầu vào' });
    }
  
   
  };

  const deliveryTimes = [
    { maxDistance: 30, time: 2 },    
    { maxDistance: 50, time: 4 },   
    { maxDistance: 100, time: 6 },    
    { maxDistance: 200, time: 24 }, 
    { maxDistance: 500, time: 36 },
    { maxDistance: 1000, time: 42 }, 
    { maxDistance: 1000, time: 72 } 
];


  let calculateShipDate =(req, res)=>{
    
    const {cart} = req.body;
    const {ward} = req.body;
    const distance = calculateDistance(quan7Lat,quan7Lon , ward.latitude, ward.longitude);
    let timeShipping = 0;
    for (const rate of deliveryTimes) {
      if (distance <= rate.maxDistance) {
        timeShipping = rate.time;
          break;
      }
      }
    const orderDate = new Date(); 
    let totalPreparationTime = 0;
  let totalCookingTime = 0;
  cart.forEach(item => {
    totalPreparationTime = Math.max(item.PrepareTime, totalPreparationTime);
    totalCookingTime = Math.max(item.CookingTime, totalCookingTime);
  });
    const estimatedShippingDate = new Date(orderDate);
    estimatedShippingDate.setHours(
     estimatedShippingDate.getHours() +totalPreparationTime + totalCookingTime + 1 + timeShipping // +1 giờ cho thời gian ship
    );
    if(estimatedShippingDate.getHours()<8 || estimatedShippingDate.getHours() >20){
      estimatedShippingDate.setHours(8)
      estimatedShippingDate.setMinutes(30)
    }
    res.json({
      estimatedShippingDate: estimatedShippingDate.toISOString()
  });
  }


  module.exports = {
    calculateShipping: calculateShipping,
    calculateShipDate:calculateShipDate
    

  };