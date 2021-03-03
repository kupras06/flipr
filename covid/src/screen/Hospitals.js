import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import Table from './Table'

function Hospitals() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: "State Name",
        accessor: "state",
      },
      {
        Header: "Rural Hospitals",
        accessor: "ruralHospitals",
      },
      { Header: "Rural Beds", accessor: "ruralBeds" },
      {
        Header: "Urban Hospitals",
        accessor: "urbanHospitals",
      },
      {
        Header: "Urban Beds",
        accessor: "urbanBeds",
      },
      { Header: "Total Hospitals", accessor: "totalHospitals" },

      { Header: "Total Beds", accessor: "totalBeds" },
    ],
    []
  );
  
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:9090/hospital-beds")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div >Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div style={{ marginLeft: "7%" }}>Loading...</div>;
  } else {
    return (
      <><h1> availability of beds in hospitals</h1>
         <Table data={items} columns={columns} pagination={true}/>
      </>
    );
  }
  // return }
}

export default Hospitals;
