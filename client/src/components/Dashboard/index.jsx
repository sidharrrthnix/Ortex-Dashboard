import React, { Component, useEffect, useRef, useState } from "react";
import Stats from "./stats";
import { w3cwebsocket as webSocket } from "websocket";
import { usePrevPrice } from "../../lib/hooks/usePrice";
import { timeConverter } from "../../lib/functions/timeConverter";

//Dashboard component renders the list of cards for displaying the
// exchange values of different currencies
// Dashboard renders a child components "Stat" which is responsible
// for showing the current price and time values
const Dashboard = () => {
  const [price, setPrice] = useState(0);
  const [currentTime, setCurrentTime] = useState(null);
  let client = useRef();

  // This use effect is responsible for making websocket connection to
  // the tradingeconomics server and fetches the live exchange values
  // when unmounting the component the webScoket connection will be removed
  // and the connection terminates. it starts again when you visit the
  // home page
  useEffect(() => {
    client.current = new webSocket(
      "ws://stream.tradingeconomics.com/?client=guest:guest"
    );
    client.current.onopen = (e: MessageEvent) => {
      console.log("Connected!");
      client.current.send(`{"topic": "subscribe", "to": "EURUSD:CUR"}`);
      client.current.onmessage = function (e) {
        let result = JSON.parse(e.data);
        console.log(JSON.parse(e.data));
        setPrice(result.price);
        setCurrentTime(timeConverter(result.dt));
      };
    };
    return () => {
      client.current.close();
    };
  }, []);

  return (
    <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-1xl mx-auto py-20">
        <div>
          <Stats price={price} time={currentTime} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
