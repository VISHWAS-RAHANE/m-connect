import React, { useEffect, useState }  from 'react'
import axios from "axios";
import "./Homepage.css";


const accessToken = "00D0l0000002Xeo!AQQAQDbrOnxTloBtxuZS5pndwKcRAt9w_jWBhmyTCr.qxaZTdsFc14oL6M5T.d3sgdwSVc2GxaVMW0Ab4ksWAcQnlbZEzGrE";
function Homepage() {
  
  const fetchAccessToken = async () => {
    const body = {
      grant_type: 'password',
      client_id: '3MVG99S6MzYiT5k9vRKaSrNf2Bw_zKTW6.P65tsDlxB6ZpRO5XFDQfm6zL1NIXlYCnUSi99cOXOZPLRTWbMgb',
      client_secret: '02872F0C8742162C25E099BF7E8CF117ACEC43D9A97C9C0FADDFD5F38FE6E3EB',
      username: 'pidilitemail-plgv@force.com.mconnect',
      password: 'Nano@123'
    };

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    };

    const options = {
      url: 'https://jubilantfoodworksltd--uat.my.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG99S6MzYiT5k9vRKaSrNf2Bw_zKTW6.P65tsDlxB6ZpRO5XFDQfm6zL1NIXlYCnUSi99cOXOZPLRTWbMgb&client_secret=02872F0C8742162C25E099BF7E8CF117ACEC43D9A97C9C0FADDFD5F38FE6E3EB&username=pidilitemail-plgv@force.com.mconnect&password=Nano@123',
      method: 'post',
    };
    const response = await axios(options);
    console.log(response);

  }

  const fetchHomepageData = async () => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${accessToken}`
    };

  
    const resp = await axios.get("https://pidilitecwp--mconnect.my.salesforce.com/services/apexrest/getHomePageDetails/", headers);
    console.log(resp);
  }
  
  useEffect(() => {
    fetchAccessToken();
    fetchHomepageData();
  }, [])
  return (
    <div className='homepage'><h1>This is Landing Page</h1>
     <img className='App-logo' src='logo192.png' /></div>
  )
}

export default Homepage