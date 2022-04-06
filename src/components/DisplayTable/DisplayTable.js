import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplayTable() {
  const URL = "https://1783-89-236-217-170.ngrok.io/api/active";
  const [product, setProduct] = useState(null);

  let content = null;

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  useEffect(() => {
    fetch("https://1783-89-236-217-170.ngrok.io/api/active", {
      mode: "no-cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, [URL]);

  if (product) {
    content = (
      <div>
        <h1>{product.id}</h1>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default DisplayTable;
