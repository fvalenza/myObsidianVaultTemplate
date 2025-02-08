Get all tasks not completed in files that link to currentfile

```dataviewjs
let notes = dv.pages(`[[${this.currentFilePath}]]`).map(page => page.file.path);

for (let note of notes) {
	if(dv.page(note).file.tasks.where(t => !t.completed).length > 0) {
		dv.taskList(dv.page(note).file.tasks .where(t => !t.completed));
	}
}
```
