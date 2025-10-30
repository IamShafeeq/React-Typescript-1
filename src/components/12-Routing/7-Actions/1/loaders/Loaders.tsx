


// const propertyLoaders= async({params})=>{
//     console.log(params)
//     const response = await fetch("http://localhost:8082/property")
//     const properties =  await response.json()
//     if(params.type==="sold"){
//         return  properties.filter((property)=>property.status==="SOLD")
//     }
//     else if(params.type==="notsold"){
//         return  properties.filter((property)=>property.status==="FOR SALE")
//     }
//    // console.log(properties)
//     return properties

// }

// const Sellers = async () => {
    
//     const response = await fetch("http://localhost:8082/seller")
//     const sellers =  await response.json()

//     return sellers
//   };

//   const Buyers = async () => {
    
//     const response = await fetch("http://localhost:8082/buyer")
//     const Buyers =  await response.json()

//     return Buyers
//   };
// export {propertyLoaders,Sellers,Buyers}