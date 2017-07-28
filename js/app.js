(function() {
    var app = angular.module('timeline', []);
    
    app.controller('TimelineController', function() {
        this.product = gem;
    });
    
    var gem = {
        name: 'Dode',
        price: 2.95,
        description: 'testing'
    }
    
})();
