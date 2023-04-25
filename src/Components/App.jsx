import React, { useEffect, useState } from "react";
import "../App.css";
import Cal from "./Calendar";
import LineChart from "./Chart";
import { countryNames } from "../countries";
import Navbar from "./NavBar";

function App() {
    const [countriesData, setCountriesData] = useState([]);
    const [date, setDate] = useState(new Date());

    //temp for debugging
    const [country, setCountry] = useState("singapore");

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    useEffect(() => {
        if (date[0] && date[1]) {
            const localStartDate = new Date(
                date[0].getTime() -
                    date[0].getTimezoneOffset() * 60000 -
                    8 * 60 * 60 * 1000
            );
            const isoStartDate = localStartDate.toISOString();
            setStartDate(isoStartDate.substr(0, 10) + "T00:00:00Z");

            const localEndDate = new Date(
                date[1].getTime() -
                    date[1].getTimezoneOffset() * 60000 -
                    8 * 60 * 60 * 1000
            );
            const isoEndDate = localEndDate.toISOString();
            setEndDate(isoEndDate.substr(0, 10) + "T00:00:00Z");

            console.log("start", startDate, "end", endDate);
        }
    }, [date]);

    const requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    useEffect(() => {
        console.log(countriesData);
    }, [countriesData]);

    const getData = async () => {
        const countries = ["japan"]; // Add more countries as needed
        const dataPromises = countries.map((country) =>
            fetch(
                `https://api.covid19api.com/country/${country}?from=${startDate}&to=${endDate}`,
                requestOptions
            )
                .then((res) => res.json())
                .then((data) =>
                    data
                        .map(({ Country, Date, Confirmed }, i, arr) => ({
                            Country,
                            Date: Date.substring(0, 10),
                            Confirmed:
                                i > 0
                                    ? Confirmed - arr[i - 1].Confirmed
                                    : Confirmed,
                        }))
                        .slice(1)
                )
        );
        const allData = await Promise.all(dataPromises);
        const combinedData = allData.flat();
        setCountriesData(combinedData);
    };

    return (
        <div className="App">
            <Navbar />
            {countryNames}
            <Cal date={date} setDate={setDate} />
            <button onClick={getData}>submit</button>
            <LineChart countriesData={countriesData} />
        </div>
    );
}

export default App;
