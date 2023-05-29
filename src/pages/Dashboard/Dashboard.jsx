import React from "react";
import "./Dashboard.scss";
import InfoCard from "../../components/InfoCard/InfoCard";
import MainChart from "../../components/MainChart/MainChart";
import Chart from "../../components/Chart/Chart";
import Tables from "../../components/Tables/Tables";
// import { getUsers, callDeviceAuditApi } from "../../util/http";
const Home = () => {
  async function callDeviceAuditApi() {
    var raw = JSON.stringify({
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
    });

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "PHPSESSID=rvrlpdaj6v419pl7op1p8j1o0t");

    var formdata = new FormData();
    formdata.append("svc", "app_2003");
    formdata.append("pid", "ListCustomerByPrograms");
    formdata.append("dat", raw);

    var requestOptions = {
      retries: 10,
      retryDelay: 10000,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: formdata,
    };

    fetch(
      "https://dev2.4pay.ca/mophonecrm/www/php/Workflows/services.php?output=json",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  // callDeviceAuditApi()
  return (
    <>
      <div className="home">
        <div className="cardsContainer">
          <InfoCard type="sales" />
          <InfoCard type="earnings" />
          <InfoCard type="balance" />
          <InfoCard type="loans" />
        </div>
      </div>
      <div className="chartsContainer">
        <Chart />
        <MainChart />
      </div>
      <div className="tableContainer">
        <div className="tableTitle">
          <Tables />
        </div>
      </div>
    </>
  );
};

export default Home;
