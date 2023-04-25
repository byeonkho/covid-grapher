import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const LineChart = (props) => {
    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: "basic-line",
            },
            xaxis: {
                categories: [],
                max: 50,
            },
            legend: {
                show: true,
                position: "top",
                horizontalAlign: "right",
                labels: {
                    colors: "#333",
                    useSeriesColors: false,
                },
            },
        },
        series: [
            {
                name: "New Cases",
                data: [],
            },
        ],
    });

    useEffect(() => {
        if (props.countriesData.length === 0) {
            return;
        }

        const countryNames = Array.from(
            new Set(props.countriesData.map((data) => data.Country))
        ); // get an array of unique country names

        const series = countryNames.map((country) => ({
            name: country,
            data: props.countriesData
                .filter((data) => data.Country === country)
                .map((data) => data.Confirmed),
        }));

        const categories = props.countriesData.map((data) => data.Date);

        setChartData({
            options: {
                chart: {
                    id: "basic-line",
                },
                xaxis: {
                    categories: categories,
                },
            },
            series: series,
        });
    }, [props.countriesData]);

    return (
        <div>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="line"
                width={1000}
            />
        </div>
    );
};

export default LineChart;
