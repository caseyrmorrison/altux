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
function Case(caseId, product, issueCategory, issue, state, timeline, status) {
    this.caseId = caseId;
    this.product = product;
    this.issueCategory = issueCategory;
    this.issue = issue;
    this.state = state;
    this.timeline = timeline;
    this.status = status;
}