
/**
 * Case History Timeline Object used to hold all the cases
 * 
 * @param cases: an array of CaseItem objects
 */
// TODO: add an optional parameter of an initialized array
function CaseTimeline(cases) {
    this.numOfCases = cases ? cases.length : 0;
    this.cases = cases || [];
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


