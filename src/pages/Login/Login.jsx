import React, { useEffect } from "react";
import axios from "axios";
import { getUsers } from "../../util/http";

function MyComponent() {
  useEffect(() => {
    getUsers();
  }, []);

  return <div>{/* Your component JSX */}</div>;
}

export default MyComponent;
