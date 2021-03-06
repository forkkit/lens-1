import * as React from "react";
import * as d3 from "d3";

// @ts-ignore
import { withSize } from "react-sizeme";

interface IChartProps {
    size: any;
    csv: string;
}

interface IState {
    data: any[] | null;
}

class Chart extends React.Component<IChartProps, IState> {
    private width: number;
    private height: number;
    private x: any;
    private y: any;
    private area: any;
    private valueline: any;

    private gridline = React.createRef<any>();
    private yAxis = React.createRef<any>();

    private margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
    };

    constructor(props: IChartProps) {
        super(props);
        this.state = {
            data: null
        };
    }

    public componentDidMount() {
        this.width =
            this.props.size.width - this.margin.left - this.margin.right;
        this.height = 400 - this.margin.top - this.margin.bottom;
        this.x = d3.scaleTime().range([0, this.width]);
        this.y = d3.scaleLinear().range([this.height, 0]);

        const parseDate = d3.timeParse("%Y%m");
        this.area = d3
            .area()
            .x((d: any) => this.x(d.date))
            .y0(this.height)
            .y1((d: any) => this.y(d.temperature));

        this.valueline = d3
            .line()
            .x((d: any) => this.x(d.date))
            .y((d: any) => this.y(d.temperature));

        const rawData = d3.csvParse(this.props.csv);
        rawData.forEach((d: any) => {
            d.date = parseDate(d.date.replace(/\s/g, ""));
            d.temperature = +d.temperature;
        });
        this.x.domain([rawData[0].date, rawData[rawData.length - 1].date]);
        this.y.domain([-10, 50]);

        this.setState({
            data: rawData
        });

        d3.select(this.gridline.current).call(
            d3
                .axisBottom(this.x)
                .ticks(10)
                .tickSize(-this.height)
        );
        d3.select(this.yAxis.current).call(d3.axisLeft(this.y));
    }

    public render() {
        return (
            <svg
                width={this.width + this.margin.left + this.margin.right}
                height={this.height + this.margin.top + this.margin.bottom}
                style={{ backgroundColor: "#151b35" }}
            >
                <defs>
                    <linearGradient id="gradient" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#9D92FD" />
                        <stop offset="50%" stopColor="#151b35" />
                    </linearGradient>
                </defs>
                <g
                    transform={`translate(${this.margin.left}, ${
                        this.margin.top
                    })`}
                >
                    {this.state.data ? (
                        <path
                            style={{
                                fill: "none",
                                strokeWidth: "3px",
                                stroke: "#5A4DFF"
                            }}
                            d={this.valueline(this.state.data)}
                        />
                    ) : null}
                    {this.state.data ? (
                        <path
                            fill="url(#gradient)"
                            style={{ strokeWidth: "5px" }}
                            d={this.area(this.state.data)}
                        />
                    ) : null}
                    <g ref={this.yAxis} style={{ opacity: 0.15 }}>
                        <text>Temperature</text>
                    </g>
                    <g
                        transform={`translate(0, ${this.height})`}
                        ref={this.gridline}
                        style={{ opacity: 0.15 }}
                    />
                </g>
            </svg>
        );
    }
}

const ValidatorChart = withSize()(Chart);

export { ValidatorChart };
