import React from 'react'
import { Line, Bar, Pie } from 'react-chartjs-2'

export default function Chart({ data, options, type, ...props }) {
    switch (type) {
        case "bar":
            return (

                <Bar
                    data={data}
                    width={300}
                    height={100}
                    options={options}
                    {...props}
                />
            )
            break;
        case "pie":
            return (
                <Pie
                    data={data}
                    width={300}
                    height={100}
                    options={options}
                    {...props}
                />
            )
            break;
        case "line":
            return (
                <Line
                    data={data}
                    width={300}
                    height={100}
                    options={options}
                    {...props}
                />
            )
            break;

        default:
            break;
    }
    return (
        <Bar
            data={data}
            width={300}
            height={100}
            options={options}
            {...props}
        />
    )
}

