import Service from '@ember/service';

export default class UserDirectoryChartService extends Service {
    directoryDataSource = {
        chart: null,
        data: null
      };
    
    directoryChartData = {
        title: null,
        width: null,
        height: null,
        type: null,
        dataFormat: "json",
        dataSource: null
    };

    updateDirectoryChart(dataSource,width,height,type){
        this.directoryDataSource.data = dataSource.chartData2;
        this.directoryDataSource.chart = dataSource.chartSetting2;
        this.directoryChartData.dataSource = this.directoryDataSource;
        this.directoryChartData.title = dataSource.chartSetting2.caption;
        this.directoryChartData.width = width;
        this.directoryChartData.height = height;
        this.directoryChartData.type = type;
    }
}