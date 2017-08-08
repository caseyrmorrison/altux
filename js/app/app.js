(function() {
    /**************************************************************************************
     * Test data initialization.
     */
    var numEntries = 13,
        note = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
        actions = ["Case Topic Updated", "Issued Refund (#182737364948437)", "Renewed Services", "Case Topic Updated ", "Changed Address"],
        ids = ["sep17", "sep23", "sep29", "oct4", "oct15", "oct17", "oct26", "nov1", "nov14", "nov24", "nov25", "dec5", "dec25"],
        dates = ["Sep 17, 2017", "Sep 23, 2017", "Sep 29, 2017", "Oct 4, 2017", "Oct 15, 2017", "Oct 17, 2017", "Oct 26, 2017", "Nov 1, 2017", "Nov 14, 2017", "Nov 24, 2017", "Nov 25, 2017", "Dec 5, 2017", "Dec 25, 2017"],
        name = "Kyle Geddes",
        solutions = "New Solution",
        entries = [],
        labels = [[false,false,false],[false,false,false],[true,false,false],[false,false,false],[false,true,false],[false,false,true],[false,false,false],[false,false,false],[true,false,false],[false,false,true],[false,false,false],[false,false,false],[false,false,false]];    
    
    for (var i = 0; i < numEntries; i++) {
        var historyEntry = new Model.HistoryEntry(note, actions, ids[i], dates[i], name, solutions, labels[i][0], labels[i][1], labels[i][2]);
        entries.push(historyEntry);
    }
    
    var timeline = new Model.CaseTimeline(entries);
    
    var caseId = "867530900",
        product = "Xbox",
        issueCategory = "Sales",
        issue = "Can't make purchase",
        state = "Open",
        status = "Identifying the issue";
    
    var caseObj = new Model.Case(caseId, product, issueCategory, issue, state, timeline, status);
    /**************************************************************************************/
    
    // Initialize AngularJS app
    angular.module('timeline', []).controller('MainController', function() {
        this.caseObj = caseObj;
    });    
    
    console.log(caseObj);
    
    // custom directive
    angular.module('timeline').directive('timelineDate', function() {
        return {
            restrict: 'E',
            templateUrl: 'timeline-date.html'
        };
    });    
    
})();


// Deciding the spacing
    function spacing(href) {
        var ele = $('a[href="'+href+'"]');
        ele = ele.parent().outerHeight(true);
        console.log(ele);
        
        // 100%
        var num = 13;
        
        
    }


