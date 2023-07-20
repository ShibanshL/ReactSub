import { useState } from "react";
import Left from "../assets/SVG/Left.svg";
import Dollar from "../assets/SVG/Dollar.svg";
import BitCoin from "../assets/SVG/BitCoin.svg";
import EThereum from "../assets/SVG/Ethereum.svg";
import Binance from "../assets/SVG/Binance.svg";
import LiteCoin from "../assets/SVG/Lite.svg";
import { Tooltip, Area, AreaChart } from "recharts";
import "./Animate.js";
import { data, data1, data2, data3 } from "./AllData.js";

function MainBody() {
  const [metaData, setMetaData] = useState({
    imgSRC: "BitCoin",
    tickName: "Bitcoin",
    tickSymbol: "BTC",
    BTC_price: "3.529020 BTC",
    price_USD: 19.153,
    profitnLoss: -2.32,
    chartData: data,
    stroke: "#f9aa4b",
    oneCoin: 1.5462,
    Lower: 4.896,
    Higher: 5.743,
  });

  const buttonName = [
    {
      id: 0,
      name: "Day",
    },
    {
      id: 1,
      name: "Week",
    },
    {
      id: 2,
      name: "Month",
    },
    {
      id: 3,
      name: "Year",
    },
  ];

  const dynamicTickerData = (e: string) => {
    if (e == "BitCoin") {
      return <img src={BitCoin} alt="" />;
    }
    if (e == "Ethereum") {
      return <img src={EThereum} alt="" />;
    }
    if (e == "Lite Coin") {
      return <img src={LiteCoin} alt="" />;
    }
    if (e == "Binance Coin") {
      return <img src={Binance} alt="" />;
    }
  };

  const changeTickerData = (e: string) => {
    if (e == "Day") {
      setMetaData({
        imgSRC: "BitCoin",
        tickName: "Bitcoin",
        tickSymbol: "BTC",
        BTC_price: "3.529020 BTC",
        price_USD: 19.153,
        profitnLoss: -2.32,
        chartData: data,
        stroke: "#f9aa4b",
        oneCoin: 1.5462,
        Lower: 4.896,
        Higher: 5.743,
      });
    }

    if (e == "Week") {
      setMetaData({
        imgSRC: "Ethereum",
        tickName: "Ethereum",
        tickSymbol: "ETH",
        BTC_price: "1.457256 BTC",
        price_USD: 25.678,
        profitnLoss: 4.23,
        chartData: data1,
        stroke: "#4d8de7",
        oneCoin: 2.354,
        Lower: 3.286,
        Higher: 6.759,
      });
    }

    if (e == "Month") {
      setMetaData({
        imgSRC: "Lite Coin",
        tickName: "Lite Coin",
        tickSymbol: "LTC",
        BTC_price: "1.498520 LTC",
        price_USD: 34.893,
        profitnLoss: -3.78,
        chartData: data2,
        stroke: "#8bcef5",
        oneCoin: 1.532,
        Lower: 2.578,
        Higher: 3.098,
      });
    }

    if (e == "Year") {
      setMetaData({
        imgSRC: "Binance Coin",
        tickName: "Binance Coin",
        tickSymbol: "BNB",
        BTC_price: "4.573482 BNB",
        price_USD: 23.293,
        profitnLoss: 2.97,
        chartData: data3,
        stroke: "#e6b02c",
        oneCoin: 3.456,
        Lower: 1.364,
        Higher: 2.324,
      });
    }
  };

  return (
    <>
      <div className="MainBody">
        <div className="TickerInfo">
          <div className="TickerTop">
            <div>
              {dynamicTickerData(metaData.imgSRC)}
              <label htmlFor="">{metaData.tickName}</label>
            </div>
            <label htmlFor="">{metaData.tickSymbol}</label>
          </div>
          <div className="TickerBottom">
            <label htmlFor="">{metaData.BTC_price}</label>
            <div className="TickerBottomBadge">
              <label htmlFor="">${metaData.price_USD}USD</label>
              <div
                style={
                  metaData.profitnLoss < 0
                    ? { background: "#ee225d" }
                    : { background: "#1ec070" }
                }
              >
                {metaData.profitnLoss}%
              </div>
            </div>
          </div>
          <button>
            <img src={Left} />
          </button>
        </div>
        <div className="TickerTimeFrame">
          {buttonName.map((e: any) => {
            return (
              <>
                <button
                  key={e.id}
                  className="timeFrame"
                  value={e.name}
                  onClick={(e: any) => changeTickerData(e.target.value)}
                >
                  {e.name}
                </button>
              </>
            );
          })}
        </div>
        <div className="TickerChart">
          <div className="ChartData">
            <div className="TopData">
              <div className="Lower">
                <div></div>
                <label>Lower : ${metaData.Lower}</label>
              </div>
              <div className="Higher">
                <div></div>
                <label>Higher : ${metaData.Higher}</label>
              </div>
            </div>
            <div className="BottomData">
              <div></div>
              <label>
                1 {metaData.tickSymbol} = ${metaData.oneCoin}
              </label>
            </div>
          </div>
          <AreaChart
            width={730}
            height={250}
            data={metaData.chartData}
            margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="1%"
                  stopColor={metaData.stroke}
                  stopOpacity={0.8}
                />
                <stop
                  offset="99%"
                  stopColor={metaData.stroke}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              isAnimationActive={false}
              type="monotone"
              dataKey="uv"
              stroke={metaData.stroke}
              strokeWidth={5}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </div>
        <div className="TickerOptions">
          <div className="buySellOptions">
            <img src={Dollar} alt="" />
            <label>Buy BTC</label>
          </div>
          <div className="buySellOPtions">
            <img src={Dollar} alt="" />
            <label>Sell BTC</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBody;
