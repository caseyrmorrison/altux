var Model = Model || {};

Model.Case = (function() {
    function Case(caseId, product, issueCategory, issue, state, timeline, status) {
        this.caseId = caseId;
        this.product = product;
        this.issueCategory = issueCategory;
        this.issue = issue;
        this.state = state;
        this.timeline = timeline;
        this.status = status;
    }
    
    return Case;
})();

Model.CaseTimeline = (function() {
    function CaseTimeline(entries) {
        this.numOfCases = entries ? entries.length : 0,
        this.entries = entries || [];
    }
    
    return CaseTimeline;
})();

Model.HistoryEntry = (function() {
    function HistoryEntry(note, actions, id, date, name, solution, slaExp, reOpen, closed) {
        this.note = note || "";
        this.actions = actions || [];
        this.id = id || "";
        this.date = date || "";
        this.name = name || "";
        this.solution = solution || "";
        this.slaExp = slaExp || false;
        this.reOpen = reOpen || false;
        this.closed = closed || false;
    }
    
    return HistoryEntry;
})();

