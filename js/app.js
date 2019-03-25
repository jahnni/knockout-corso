define(['knockout','component!page1'],function (ko,Page1) {
    function App() {
        var args = {name:'Giovanni'};
        this.sampleComponent = ko.observable({
            name:'page1',
            params: args
        });

        this.init = function () {
            ko.applyBindings(this);
        }
    }
    return new App();

});