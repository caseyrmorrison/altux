var Model = Model || {};

/**
 * Case Constructor to create sample entry for the case timeline.
 *
 * @param caseId: String id of the current case.
 * @param product: String title of the product this case is involved with.
 * @param issueCategory: String category the issue falls into.
 * @param issue: String summary of the issue
 * @param state: String status of the issue: open, closed
 * @param timeline: String: Timeline object that has all the entries tied to the case.
 * @param status: String stating the status of the case.
 */
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

/**
 * CaseTimeline Constructor 
 *
 * @param entries: An Array of history entry objects
 */
Model.CaseTimeline = (function() {
    function CaseTimeline(entries) {
        this.numOfCases = entries ? entries.length : 0,
        this.entries = entries || [];
    }
    
    return CaseTimeline;
})();


/**
 * HistoryEntry Constructor to create sample entry for the case timeline.
 *
 * @param note: A string note for this entry.
 * @param actions: An array of actions taken on this entry.
 * @param id: The id string of the entry for scroll feature attached to the <li> element.
 * @param date: The date string of the entry.
 * @param name: String name of the (not sure who exactly).
 * @param solution: String solution of the entry.
 * @param slaExp: Boolean if the Sla is expired
 * @param reOpen: Boolean if the case was reopened
 * @param closed: Boolean if the case was closed
 */
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

