import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default class ChartController extends Controller {
    @service userKeywordChart;
    @service userDirectoryChart;
   
}