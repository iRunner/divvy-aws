import angular from 'angular';
import angularRoute from 'angular-route';
import uiBootstrap from 'angular-ui-bootstrap';
import uiGrid from 'angular-ui-grid';
import config from './config';
import homeController from './controllers/homeController';
import 'babel-polyfill';
//

import 'angular-ui-grid/ui-grid.css';
import 'angular-ui-grid/ui-grid.js';

//configuration could be updated and seperated into different files if needed

var moduleName = "app";
var app = angular.module(moduleName, [
 'ngRoute', 'ui.bootstrap', 'ui.grid',
]).config(config)
  .controller('homeController', homeController);

export default moduleName;
