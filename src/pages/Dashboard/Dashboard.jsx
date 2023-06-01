import React from "react";
import "./Dashboard.scss";
import InfoCard from "../../components/InfoCard/InfoCard";
import MainChart from "../../components/MainChart/MainChart";
import Chart from "../../components/Chart/Chart";
import Tables from "../../components/Tables/Tables";
// import { getUsers, callDeviceAuditApi } from "../../util/http";
const Home = () => {
  async function callDeviceAuditApi() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "PHPSESSID=98ciqlc3qf1ptujppsqk58hgtm");

    var raw = JSON.stringify({
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

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "manual",
    };

    fetch(
      "https://dev2.4pay.ca/mophonecrm/www/php/Workflows/services.php?output=json",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  callDeviceAuditApi();
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
