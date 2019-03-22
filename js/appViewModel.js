define(['knockout-3.5.0.debug'],function (ko) {
    return function appViewModel() {
        this.nome = ko.observable('stocazzzo');
        this.nameCaps = ko.pureComputed(function () {
            return this.nome().toUpperCase();
        },this)
    }
})