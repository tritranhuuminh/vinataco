import React from 'react'
import { useSelector } from 'react-redux'
import Chart from "react-apexcharts";

export default function Energy() {
    const optionsRadial = {
        plotOptions: {
            radialBar: {
                startAngle: 0,
                endAngle: 540,
                hollow: {
                    margin: 0,
                    size: "70%",
                    background: "transparent",
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: "front",
                    dropShadow: {
                        enabled: false,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: "#fff",
                    strokeWidth: "100%",
                    margin: 0, // margin is in pixels
                    dropShadow: {
                        enabled: false,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },

                dataLabels: {
                    showOn: "always",
                    name: {
                        offsetY: -20,
                        show: false,
                        color: "#888",
                        fontSize: "13px"
                    },
                    value: {
                        formatter: function (val) {
                            return val + '%';
                        },
                        color: "#FFFFFF",
                        fontSize: "1.5rem",
                        show: true
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: ["#8056F4", "#183351"],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "round"
        }
    }
    const seriesRadial = [76]

    return (
        <div className="mixer element">
            <p>Mixer</p>
            <div className="chartMixer">
                <Chart
                    options={optionsRadial}
                    series={seriesRadial}
                    type="radialBar"
                    width="100%"
                />
            </div>
            <div className="subchartMixer">

                <span>
                    <img src='/packing_temperature-high-solid.svg' />
                    A red paragraph.
                </span>

                <span>
                    <img src='/packing_temperature-high-solid.svg' />
                    A red paragraph.
                </span>
            </div>
        </div>
    )
}

