import { useState } from "react";
import Chart from "react-apexcharts";
import axios from "../../axios";
import { Inventory } from "../../types/store";
import { Card } from "react-bootstrap";

const Dashboard = () => {
  const [sold, setSold] = useState<number>(0);
  const [pending, setPending] = useState<number>(0);
  const [available, setAvailable] = useState<number>(0);

  axios
    .get<Inventory>(`store/inventory`)
    .then(({ data }) => data)
    .then(({ sold: newSold, pending: newPending, available: newAvailable }) => {
      setSold(newSold);
      setPending(newPending);
      setAvailable(newAvailable);
    });

  const options = {
    labels: ["Sold", "Pending", "Available"],
    colors: ["#58949C", "#DF9881", "#9A91AC"],
  };

  return (
    <>
      <h1>Inventory</h1>
      <Card style={{ background: "white" }}>
        <Chart
          series={[sold, pending, available]}
          options={options}
          type="pie"
          width="580px"
        />
      </Card>
    </>
  );
};

export default Dashboard;
