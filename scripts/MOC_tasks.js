let currentFilePath = dv.current().file.path;
let notes = dv.pages(`[[${currentFilePath}]]`).map(page => page.file.path);

for (let note of notes) {
    let page = dv.page(note);
    if (page && page.file.tasks.where(t => !t.completed).length > 0) {
        dv.taskList(page.file.tasks.where(t => !t.completed));
    }
}
