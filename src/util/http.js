// import axios from "axios";

// const BACKEND_URL =
//   "https://dev2.4pay.ca/mophonecrm/www/php/Workflows/services.php";

// const getUserRequest = {
//   svc: "app_2003",
//   pid: "ListCustomerByPrograms",
//   dat: {
//     location: "",
//     franchiseeid: "117",
//     firstname: "",
//     lastname: "",
//     phoneno: "",
//     cityname: "",
//     stateid: "",
//     countryid: "",
//     other1: "",
//     other2: "",
//     other3: "",
//     usertype: "0",
//     startuserid: "0",
//     limit: "0",
//   },
// };

// export async function getUsers() {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append("Cookie", "PHPSESSID=rvrlpdaj6v419pl7op1p8j1o0t");

//   var raw = JSON.stringify({
//     svc: "app_2003",
//     pid: "ListCustomerByPrograms",
//     dat: {
//       location: "",
//       franchiseeid: "117",
//       firstname: "",
//       lastname: "",
//       phoneno: "",
//       cityname: "",
//       stateid: "",
//       countryid: "",
//       other1: "",
//       other2: "",
//       other3: "",
//       usertype: "0",
//       startuserid: "0",
//       limit: "0",
//     },
//   });

//   var requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "manual",
//   };

//   fetch(
//     "https://dev2.4pay.ca/mophonecrm/www/php/Workflows/services.php",
//     requestOptions
//   )
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// }

// export async function callDeviceAuditApi() {
//   var raw = JSON.stringify({
//     location: "",
//     franchiseeid: "117",
//     firstname: "",
//     lastname: "",
//     phoneno: "",
//     cityname: "",
//     stateid: "",
//     countryid: "",
//     other1: "",
//     other2: "",
//     other3: "",
//     usertype: "0",
//     startuserid: "0",
//     limit: "0",
//   });

//   var myHeaders = new Headers();
//   myHeaders.append("Cookie", "PHPSESSID=rvrlpdaj6v419pl7op1p8j1o0t");

//   var formdata = new FormData();
//   formdata.append("svc", "app_2003");
//   formdata.append("pid", "ListCustomerByPrograms");
//   formdata.append("dat", raw);

//   var requestOptions = {
//     retries: 10,
//     retryDelay: 10000,
//     method: "POST",
//     headers: { "Content-Type": "multipart/form-data" },
//     body: formdata,
//   };

//   fetch(
//     "https://dev2.4pay.ca/mophonecrm/www/php/Workflows/services.php?output=json",
//     requestOptions
//   )
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// }
