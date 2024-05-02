import React, { useEffect, useState } from 'react'
import './style.css'

function GetData() {
   const [product,setProduct] = useState([]);

   useEffect(()=>{
    showData()
   })

   const showData = async ()=>{
    let data = await fetch('http://localhost:3309/getData');
    let result = await data.json();
    setProduct(result)
   }

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Course name</th>
                    <th>Course price</th>
                    <th>Course Duration</th>
                    <th>Action</th>
                </tr>
            </thead>
        { product.map((item,index)=>{
            return(
                <>
                    <tbody>
              <tr>
                <td key={index+1}>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.duration}</td>
        <td><button>Delete</button></td>
        </tr>
        </tbody>
                </>
            )
        })}

          </table>
    </div>
  )
}

export default GetData
