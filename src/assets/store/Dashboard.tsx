import { useState } from "react";
import Chart from "react-apexcharts";

import { inventory } from "../../resources/Store";
import { Inventory } from "../../types/store";

const Dashboard = () => {
  const [sold, setSold] = useState<number>(0);
  const [pending, setPending] = useState<number>(0);
  const [available, setAvailable] = useState<number>(0);

  inventory().then(
    ({
      sold: newSold,
      pending: newPending,
      available: newAvailable,
    }: Inventory) => {
      setSold(newSold);
      setPending(newPending);
      setAvailable(newAvailable);
    }
  );

  const options = {
    labels: ["Sold", "Pending", "Available"],
    colors: ["#58949C", "#DF9881", "#9A91AC"],
  };

  return (
    <>
      <h1>Inventory</h1>
      <Chart
        series={[sold, pending, available]}
        options={options}
        type="pie"
        width="580px"
      />
    </>
  );
};

export default Dashboard;
