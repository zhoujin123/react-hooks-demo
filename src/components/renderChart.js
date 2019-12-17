import React, { Component } from 'react';
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'

class Chart extends Component {
    constructor(props) {
        super(props);
        const chartOption = {
            color: props.chart.color,
            grid: {
                width: '85%',
                right: '30px'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: props.chart.color,
                        width: 2
                    }
                },
                axisPointer: {
                    show: true
                },
                data: props.chart.XData
            },
            yAxis: {
                type: 'value',
                axisTick: { show: false },
                axisLine: { show: false }
            },
            series: [{
                data: props.chart.YData,
                type: 'line'
            }]
        }
        this.state = { 
            lineOption: chartOption
        }
    }
    initChart(id){
        let myChart = React.echarts.getInstanceByDom(document.getElementById(id));
        if( myChart === undefined){ 
            myChart = React.echarts.init(document.getElementById(id));
        }
        myChart.setOption(this.state.lineOption)
    }
    componentDidMount(){
        this.initChart(this.props.id)
    }
    componentDidUpdate() {
        this.initChart()
    }
    render() { 
        return ( 
            <div>
                <div id={this.props.id} style={{width: '600px', height: '300px'}}></div>
            </div>
         );
    }
}
export default Chart;