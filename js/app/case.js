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