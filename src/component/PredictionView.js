import "./PredictionView.css";

export default function PredictionView({ dataList, day }) {
  let dataArray = [];
  dataList.map((item) => {
    if (day === item["dt_txt"].slice(0, 10)) {
      dataArray.push(item);
    }
  });
  return (
    <div className="container">
      {dataArray.length
        ? dataArray.map((item) => {
            let iconurl = `http://openweathermap.org/img/w/${item["weather"][0]["icon"]}.png`;
            return (
              <div key={item["dt"]} className="weatherWrapper">
                <p>Houer: {item["dt_txt"].slice(11)}</p>
                <div className="temp">
                  <img src={iconurl} />
                  <p>Temprerure: {item["main"]["temp"]}</p>
                </div>
                <p>Fells like: {item["main"]["feels_like"]}</p>
                <p>Humidity: {item["main"]["humidity"]}</p>
                <p>Pressure: {item["main"]["pressure"]}</p>
                <p>Sea level: {item["main"]["sea_level"]}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}
