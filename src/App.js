import { useEffect, useMemo, useState } from "react";
import PredictionView from "./component/PredictionView";
import "./App.css";

function App() {
  const year = new Date().getFullYear();
  const month =
    new Date(new Date().setDate(new Date().getDate() + 1)).getMonth() + 1;
  const day1 = new Date(new Date().setDate(new Date().getDate() + 1)).getDate();
  const day2 = new Date(new Date().setDate(new Date().getDate() + 2)).getDate();

  const [data, setData] = useState({});
  const [timeBtn, setTimeBtn] = useState(true);
  const [day, setDay] = useState(`press To see weather`);

  function getData() {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?lat=40.18331&lon=44.5&appid=a1d22ea1d8a4cf80e1a1e6c9c0122d63"
    )
      .then((res) => res.json())
      .then((response) => setData(response));
  }
  function handleChange() {
    setTimeBtn((prev) => !prev);
    console.log(timeBtn);
    timeBtn
      ? setDay(`${year}-${month}-${day1}`)
      : setDay(`${year}-${month}-${day2}`);
  }

  useEffect(() => {
    getData();
  }, []);

  const dataList = useMemo(() => {
    return data.list;
  });

  return (
    <div className="App">
      <h1>Weather in Yerevan</h1>

      <button onClick={handleChange}>{day}</button>
      {dataList !== undefined ? (
        <PredictionView dataList={dataList} day={day} />
      ) : null}
    </div>
  );
}

export default App;
