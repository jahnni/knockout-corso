require(['knockout-3.5.0.debug','appViewModel'],function (ko,appViewModel) {
    ko.applyBindings(new appViewModel());
});