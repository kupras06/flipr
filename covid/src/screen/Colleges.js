import React, { useEffect, useState } from "react";
import Table from './TablePage';

function Colleges() {
  const columns = React.useMemo(
    () => [
      {
        Header: "State Name",
        accessor: "state",
      },
      {
        Header: "Institue Name",
        accessor: "name",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Type",
        accessor: "ownership",
      },
      {
        Header: "Admission Capacity",
        accessor: "admissionCapacity",
      },
      {
        Header: "Hospital Beds",
        accessor: "hospitalBeds",
      },
    ],
    []
  );
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:9090/college-beds")
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
  const data = items;

  return (
      <><h1>List of Medical Colleges and Availability of Beds</h1>
      <Table columns={columns} data={data} pagination={true}/></>
  );
}

export default Colleges;
