(function() {
    /**************************************************************************************
     * Test data initialization.
     */
    var numCases = 13;
    var note = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
    var actions = ["Case Topic Updated", "Issued Refund (#182737364948437)", "Renewed Services", "Case Topic Updated ", "Changed Address"];
    var ids = ["sep17", "sep23", "sep29", "oct4", "oct15", "oct17", "oct26", "nov1", "nov14", "nov24", "nov25", "dec5", "dec25"];
    var dates = ["Sep 17, 2017", "Sep 23, 2017", "Sep 29, 2017", "Oct 4, 2017", "Oct 15, 2017", "Oct 17, 2017", "Oct 26, 2017", "Nov 1, 2017", "Nov 14, 2017", "Nov 24, 2017", "Nov 25, 2017", "Dec 5, 2017", "Dec 25, 2017"];
    var name = "Kyle Geddes";
    var solutions = "New Solution";
    var timeline = new CaseTimeline();
    var test = new CaseTimeline(actions);
    /**************************************************************************************/
    
    // Initialize AngularJS app
    var app = angular.module('timeline', []);
    
    app.controller('CaseHistoryController', function() {
        this.timeline = timeline;
    });    
    
    // Add Test Data to the Timeline
    // Add number of cases to cases array of CaseItem objects
    for (var i = 0; i < numCases; i++) {
        var historyCase = new CaseItem(note, actions, ids[i], dates[i], name, solutions);
        timeline.addCase(historyCase);
    }
    console.log(timeline);
    //console.log(timeline.toString());
    console.log(timeline.constructor.prototype);
    
})();
