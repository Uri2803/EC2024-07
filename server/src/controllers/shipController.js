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
    console.log(req.body)
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
  module.exports = {
    calculateShipping: calculateShipping

  };