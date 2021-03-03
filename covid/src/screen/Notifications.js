import React, { useEffect, useState } from "react";
import Table from './TablePage'

function Notifications() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Notification Title",
        accessor: "title",
      },
      {
        Header: "Link",
        accessor: "link",
        Cell: (e) => <a href={e.value}> {e.value} </a>,
        // className:'no-links',
        width:20
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
     fetch("http://localhost:9090/advises")
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
    <>
      <h1> Recent Government Notifications on covid Norms</h1>
      <div className="notification">
        <Table columns={columns} data={data} pagination={true} />
      </div>
    </>
  );
}

export default Notifications;
