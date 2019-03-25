define(['knockout'],function (ko) {
    'use strict';

    function Page1(params) {
        this.userName = ko.observable(params.name);
    }

    return Page1;
});
