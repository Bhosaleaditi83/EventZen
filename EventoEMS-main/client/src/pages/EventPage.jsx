import React, { useEffect, useState } from 'react'
import SummaryApi from '../common/SummaryApi'
import AxiosToastError from '../utils/AxiosToastError'
import Axios from '../utils/Axios'


const EventPage = () => {
    const [productData,setProductData] = useState([])
    const [page,setPage] = useState(1)
    
    const fetchProductData = async()=>{
      try {
          const response = await Axios({
             ...SummaryApi.getProduct,
             data : {
                page : page,
             }
          })
  
          const { data : responseData } = response 
  
          console.log("Event page ",responseData)
          if(responseData.success){
            
            setProductData(responseData.data)
          }
  
      } catch (error) {
        AxiosToastError(error)
      }
    }
    
    console.log("Event page")
    useEffect(()=>{
      fetchProductData()
    },[])
  
    return (
      <div>
        Event
      </div>
    )
  }
  

export default EventPage

