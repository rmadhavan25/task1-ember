import Service from '@ember/service';

export default class UserKeywordChartService extends Service {
    keywordDataSource = {
        chart: null,
        data: null
      };
    
    keywordChartData = {
        title: null,
        width: null,
        height: null,
        type: null,
        dataFormat: "json",
        dataSource: null
    };

    updateKeywordChart(dataSource,width,height,type){
        this.keywordDataSource.data = dataSource.chartData1;
        this.keywordDataSource.chart = dataSource.chartSetting1;
        this.keywordChartData.dataSource = this.keywordDataSource;
        this.keywordChartData.title = dataSource.chartSetting1.caption;
        this.keywordChartData.width = width;
        this.keywordChartData.height = height;
        this.keywordChartData.type = type;
      }
}