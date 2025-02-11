let depth = 1;
let maxDepth = 3;
let processed = new Set();
let renderedTasks = new Set();

let currentFileName = window.searchedFileName;

function getTasks(dv, file = dv.current().file.name, depth = 1, maxDepth = 3) {
    if (depth > maxDepth || processed.has(file)) return [];
    processed.add(file);

    let notes = dv.pages(`[[${file}]]`).map(page => page.file.path);
    let allTasks = [];

    for (let note of notes) {
        let page = dv.page(note);
        if (!page) continue;

        let tasks = page.file.tasks.where(t => !t.completed);
        if (tasks.length > 0) {
            allTasks.push({ file: page.file.name, tasks: tasks });
        }

        // Recursively get backlinks of this note
        let nestedTasks = getTasks(dv, page.file.name, depth + 1, maxDepth, processed);
        allTasks.push(...nestedTasks);
    }

    return allTasks;
}

// Collect all tasks first
let allTasks = getTasks(dv, currentFileName);

// Render tasks only once
for (let entry of allTasks) {
    if (!renderedTasks.has(entry.file)) {
        // dv.header(3, entry.file);
        dv.taskList(entry.tasks);
        renderedTasks.add(entry.file);
    }
}
