import React, { useEffect } from "react";
import axios from "axios";

function MyComponent() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = JSON.stringify({
          svc: "app_2003",
          pid: "ListCustomerByPrograms",
          dat: {
            location: "",
            franchiseeid: "117",
            firstname: "",
            lastname: "",
            phoneno: "",
            cityname: "",
            stateid: "",
            countryid: "",
            other1: "",
            other2: "",
            other3: "",
            usertype: "0",
            startuserid: "0",
            limit: "0",
          },
        });

        const config = {
          method: "post",
          url: "https://dev2.4pay.ca/mophonecrm/www/php/Workflows/services.php?output=json",
          headers: {
            "Content-Type": "application/json",
            // 'Cookie': 'PHPSESSID=rvrlpdaj6v419pl7op1p8j1o0t'
            // body: data,
          },
          data: data,
        };

        const response = await axios(config);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return <div>{/* Your component JSX */}</div>;
}

export default MyComponent;
