import axios from "axios";
import { BASE_URL } from "../Constants";
//import { token } from "../helpers/auth";
//import { history } from  "../history"
//axios.defaults.headers.common["Authorization"] = token();

export const getOrders = async (page, startDate, endDate, minPrice, maxPrice) => {

    let queryString = `?page=${page}`
    if (startDate !== null) queryString += `&start_date=${startDate}`
    if (endDate !== null) queryString += `&end_date=${endDate}`
    if (minPrice !== null) queryString += `&min_order_total=${minPrice}`
    if (maxPrice !== null) queryString += `&max_order_total=${maxPrice}`

    // console.log(startDate);
    // console.log(endDate);
    // console.log(queryString)

    try {
        const result = await axios.get(`${BASE_URL()}/restaurant-staff/orders/${queryString}` , {headers:{
          Authorization:token()
        }});
        return result;
    } catch (error) {
        if(error.response.statusText === 'Unauthorized') history.push('/pages/login')
    }
};

export const getOrderDetails = async (order_id) => {

    try {
        const result = await axios.get(`${BASE_URL()}/restaurant-staff/orders/${order_id}/` , {headers:{
          Authorization:token()
        }});
        return result;
    } catch (error) {
        if(error.response.statusText === 'Unauthorized') history.push('/pages/login')
    }
};

