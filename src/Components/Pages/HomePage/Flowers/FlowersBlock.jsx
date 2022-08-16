import React,{useState,useEffect} from 'react';
import axios from 'axios';



const FlowersBlock = () => {
    const [flowers,setFlowers] = useState([]);
   
    useEffect(()=>{
      axios.get('http://localhost:3500/flowers')
      .then(res=>setFlowers(res.data))
      .catch(err=>console.log(err))
    },[]);



  return (
    <div>
      
       {
        flowers.map((item)=>{
          return(
            <div key = {item.id}>
              {item.img_url}
            </div>
          )
        })
       }
    </div>
  )
}

export default FlowersBlock