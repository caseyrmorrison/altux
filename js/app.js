(function() {
    var app = angular.module('timeline', []);
    
    app.controller('CaseHistoryController', function() {
        this.cases = cases;
    });
    
    /**
     * Case History Timeline Object used to hold all the cases
     * 
     * @param cases: an array of CaseItem objects
     */
    // TODO: add an optional parameter of an initialized array
    function CaseTimeline() {
        this.numOfCases = 0;
        this.cases = [];
    }
    
    CaseTimeline.prototype.addCase = function(caseObj) {
        this.numOfCases += 1;
        this.cases.push(caseObj);
    };
    
    CaseTimeline.prototype.getCases = function() {
        return this.cases;
    }
    
    CaseTimeline.prototype.getLength = function() {
        return this.numOfCases;
    };
    
    CaseTimeline.prototype.toString = function() {
        var output = "The History Timeline:  (Size = " + this.numOfCases + ")\n\n";
        for (var i = 0; i < this.cases.length; i++) {
            output += "|Date: " + this.cases[i].date + " Name: " + this.cases[i].name + " |\n\n" +
                "Note: " + this.cases[i].note + "\n\n" +
                "Actions: " + this.cases[i].actions.join() + "\n\n" +
                "Solution: " + this.cases[i].solution + "\n\n" +
                "****Id: " + this.cases[i].id + "\n\n\n";
        }
        return output;
    };
    
    /**
     * Case Constructor to create sample cases for the timeline.
     *
     * @param note: A string note for this case.
     * @param actions: An array of actions taken on this case.
     * @param id: The id string of the case for scroll feature attached to the <li> element.
     * @param date: The date string of the case.
     * @param name: String name of the (not sure who exactly).
     * @param solution: String solution of the case.
     */
    function CaseItem(note, actions, id, date, name, solution) {
        this.note = note;
        this.actions = actions;
        this.id = id;
        this.date = date;
        this.name = name;
        this.solution = solution;
    }
    
    
    /**************************************************************************************
     * Test data initialization.
     */
    var numCases = 13;
    var note = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
    var actions = ["Case Topic Updated", "Issued Refund (#182737364948437)", "Renewed Services", "Case Topic Updated ", "Changed Address"];
    var ids = ["sept17", "sept23", "sept29", "oct4", "oct15", "oct17", "oct26", "nov1", "nov14", "nov24", "nov25", "dec5", "dec25"];
    var dates = ["Sep 17, 2017", "Sep 23, 2017", "Sep 29, 2017", "Oct 4, 2017", "Oct 15, 2017", "Oct 17, 2017", "Oct 26, 2017", "Nov 1, 2017", "Nov 14, 2017", "Nov 24, 2017", "Nov 25, 2017", "Dec 5, 2017", "Dec 25, 2017"];
    var name = "Kyle Geddes";
    var solutions = "New Solution";
    var cases = new CaseTimeline();
    
    // Add number of cases to cases array of CaseItem objects
    for (var i = 0; i < numCases; i++) {
        var historyCase = new CaseItem(note, actions, ids[i], dates[i], name, solutions);
        cases.addCase(historyCase);
    }
    console.log(cases.toString());
    
})();
