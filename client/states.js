angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.home', {
        views: {
            app: {
                controller: 'app_home',
                templateProvider: function (app) {
                    return app.templateProvider('app.home');
                }
            }
        }
    }).state('app.boss/bossroutingviewer', {
        views: {
            app: {
                controller: 'app_boss_bossroutingviewer',
                templateProvider: function (app) {
                    return app.templateProvider('app.boss.bossroutingviewer');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    });
});