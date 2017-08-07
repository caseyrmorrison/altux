/**
 * HistoryEntry Constructor to create sample entry for the case timeline.
 *
 * @param note: A string note for this entry.
 * @param actions: An array of actions taken on this entry.
 * @param id: The id string of the entry for scroll feature attached to the <li> element.
 * @param date: The date string of the entry.
 * @param name: String name of the (not sure who exactly).
 * @param solution: String solution of the entry.
 */
function HistoryEntry(note, actions, id, date, name, solution) {
    this.note = note;
    this.actions = actions;
    this.id = id;
    this.date = date;
    this.name = name;
    this.solution = solution;
}