(function () {
    'use strict';
    define('component',['jquery','knockout'],function ($,ko) {
        return {
            load:function (name, parentRequire, onload, config) {
                parentRequire([name,'text!'+name+'.html'],function (viewModel,view) {
                    ko.components.register(name,{
                        viewModel:viewModel,
                        template:{element:name},
                        synchronous:true,
                    });
                    onload(viewModel);
                },function(err){
                    onload.error(err);
                });
            }
        };
    });
    requirejs.config({
        paths:{
            'jquery':'https://code.jquery.com/jquery-3.3.1.min',
            'knockout': 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.1/knockout-debug',
            'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text'
        }
    });
    require(['app'],function (app) {
        app.init();
    });
}());