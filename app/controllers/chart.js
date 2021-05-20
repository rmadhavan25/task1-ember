import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';


export default class ChartController extends Controller {
    @service userData;
    @tracked myDataSource1 = {
        chart: {
          caption: "Most Searched Keyword",
          subCaption: "DECREASING ORDER",
          xAxisName: "keywords",
          yAxisName: "Number Of Times",
          numberSuffix: "",
          theme: "fusion",
          palettecolors: "f2726f",
          chartLeftMargin: 280,
          chartTopMargin: 20,
          chartRightMargin: 280,
          chartBottomMargin: 20,
          canvasPadding: 80
        },
        // Chart Data
        data: this.userData.chartData1
      };
    @tracked myDataSource2 = {
        chart: {
          caption: "Most Searched Directory Path",
          subCaption: "DECREASING ORDER",
          xAxisName: "Directory-Paths",
          yAxisName: "Number Of Times",
          numberSuffix: "",
          theme: "fusion",
          chartLeftMargin: 280,
          chartTopMargin: 20,
          chartRightMargin: 280,
          chartBottomMargin: 20,
          canvasPadding: 80
        },
        // Chart Data
        data: this.userData.chartData2
      };
    @tracked data1 = {
        title: "Most Searched Keyword",
        // renderAt: "chartContainer",
        width: 1500,
        height: 350,
        type: "column3d",
        dataFormat: "json",
        dataSource: this.myDataSource1};

    @tracked data2 = {
        title: "Most Searched Directory Path",
        // renderAt: "chartContainer",
        width: 1500,
        height: 350,
        type: "column3d",
        dataFormat: "json",
        dataSource: this.myDataSource2};
}