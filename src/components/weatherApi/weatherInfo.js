import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fcstUrl, currnetUrl, Key } from "./lib";
import { WeatherCompo } from "./weatherCompo";

export const WeatherInfo = () => {
  const [wthrInfo, setWthrInfo] = useState({
    temp: undefined,
    country: undefined,
    city: undefined,
    desc: undefined,
    speed: undefined,
    deg: undefined,
    icon: undefined
  });
  //const [fcst, setFcst] = useState();

  useEffect(() => {
    const option = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 15000
    };
    //HTML5 API 위치정보 수신
    navigator.geolocation.getCurrentPosition(
      position => {
        //lat, lon value getFcst()에 입력
        getFcst(position.coords, position.coords);
      },
      error => {
        console.log("Not Finde Position", error);
        alert("Not Finde Position");
      },
      option
    );
  }, []);

  const getFcst = async ({ latitude, longitude }) => {
    const fcstResponse = await fetch(
      `${fcstUrl}lat=${latitude}&lon=${longitude}&appid=${Key}&units=metric`
    );
    if (!fcstResponse.ok) {
      console.log("Load Fail");
    }
    const response = await fetch(
      `${currnetUrl}lat=${latitude}&lon=${longitude}&appid=${Key}&units=metric`
    );
    if (!response.ok) {
      console.log("Load Fail");
    }
    console.log(await fcstResponse.json());
    const { main, sys, name, weather, wind } = await response.json();
    setWthrInfo({
      temp: main.temp,
      country: sys.country,
      city: name,
      desc: weather[0].main,
      speed: wind.speed,
      deg: wind.deg,
      icon: weather[0].icon
    });
  };
  console.log(wthrInfo);
  return (
    <Styles>
      <h4>날씨정보</h4>
      {wthrInfo.temp ? (
        <WeatherCompo data={wthrInfo} />
      ) : (
        <p>No Weather Display</p>
      )}
    </Styles>
  );
};

const Styles = styled.div`
  margin: 0;
  margin-bottom: 5px;
  padding: 0;
  padding-bottom: 5px;
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid gray;
  & h4 {
    margin: 0;
    margin-left: 12px;
    padding: 5px;
    align-self: flex-start;
    letter-spacing: 2px;
  }
`;
