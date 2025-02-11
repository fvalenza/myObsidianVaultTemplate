class note_backlinks {
    async getBacklinks(dv) {
        let currentFile = dv.current().file.name;

        function getBacklinks(file, depth = 1, maxDepth = 3) {
            if (depth > maxDepth) return [];
            let backlinks = dv.pages(`[[${file}]]`).map(p => p.file.name);
            return backlinks.map(link => ({
                name: link,
                children: getBacklinks(link, depth + 1, maxDepth)
            }));
        }

        let hierarchy = getBacklinks(currentFile);

        function renderTree(tree, container) {
            let ul = container.createEl("ul");
            tree.forEach(node => {
                let li = ul.createEl("li");
                let link = li.createEl("a", { text: node.name, href: "#" });

                // Open note on click
                link.addEventListener("click", (event) => {
                    event.preventDefault();
                    app.workspace.openLinkText(node.name, node.name, false);
                });

                li.appendChild(link);
                if (node.children.length > 0) renderTree(node.children, li);
            });
        }

        let container = dv.container;
        renderTree(hierarchy, container);
    }
}

