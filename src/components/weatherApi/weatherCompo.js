import React from "react";
import styled from "styled-components";

export const WeatherCompo = ({
  data: { temp, country, city, desc, deg, speed, icon }
}) => {
  return (
    <WthrCompo>
      <div className="currentInfo">
        <p>
          현재위치: {country},{city}
        </p>
        <p>현재기온: {temp} °C</p>
        <p>현재날씨: {desc}</p>
        <p>현재풍속: {speed} m/s</p>
        <p>현재풍향: {deg} °</p>
      </div>
      <div className="infoIcon">
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="weather_icon"
        />
      </div>
    </WthrCompo>
  );
};

const WthrCompo = styled.div`
  margin: 0;
  padding: 0;
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  & .currentInfo {
    margin-left: 5px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  & .infoIcon {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80px;
      height: 80px;
    }
  }
  & p {
    margin: 0;
    margin-top: 5px;
    margin-bottom: 5px;
    letter-spacing: 2px;
  }
`;
