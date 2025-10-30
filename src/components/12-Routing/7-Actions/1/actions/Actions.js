
/*

import { redirect } from "react-router-dom";

const SaveSellerInformation= async({request})=>{
    const data = await request.formData()
    const sellerinfo={
        firstName: data.get("firstname"),
        surName: data.get("surname")
    }
    console.log(sellerinfo)
    if(sellerinfo.firstName.length<10 || sellerinfo.surName.length<10){
        const error1={
            error:"the length of any one of them is lest then 10 sharacters"
          
        }
        return error1

    }
            const saveSeller = await fetch("http://localhost:8082/seller", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            //body: JSON.stringify(Object.fromEntries(sellerinfo)),
            body: JSON.stringify(sellerinfo),
        });
        console.log(saveSeller);
        return redirect("/sellers") 
}
export {SaveSellerInformation}; 



*/