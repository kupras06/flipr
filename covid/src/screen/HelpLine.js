import React, { useMemo ,useState ,useEffect} from "react";
import Table from './Table'

function Hospital() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const columns = useMemo(
     () => [
       {
         Header: "State Name",
         accessor: "loc",
       },
       {
         Header: "HelpLine Number",
         accessor: "number",
       },
     ],
     []
   );

  useEffect(() => {
    fetch("http://localhost:9090/help-line/")
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
    return <div style={{marginLeft:"7%"}}>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div style={{ marginLeft: "7%" }}>Loading...</div>;
  } else {
   
      return (
        <>
          <h1>Available HelpLine Numbers in different areas</h1>
          <Table data={items} columns={columns} pagination={true} />
        </>
      );
  }
}


export default Hospital
