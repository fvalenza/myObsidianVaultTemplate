[[moc1]]


- [ ] mask1
- [ ] mask2



> [!error] Title
> hello



```dataviewjs
 const button = dv.el('button', 'Open Tags'); button.style.background = "white"; button.style.color = "black"; button.onclick = () => { app.workspace.openLinkText("Tags.md", "", false); }; dv.span(button)
```

```dataviewjs
 const button = dv.el('button', 'Open Search'); button.style.background = "white"; button.style.color = "black"; button.onclick = () => { app.workspace.openLinkText("Search.md", "", true); }; dv.span(button)
```


```dataviewjs
 const button = dv.el('button', 'Open Search2');
 const tFile = "Search.md"
 button.style.background = "white";
 button.style.color = "black"; button.onclick = () => {
 app.workspace.openLinkText(tFile, "", true); 
};
dv.span(button)
```


OpenSearch3 not working ??

```dataviewjs
 const button = dv.el('button', 'Open Search3');
 const tFile = "Search.md";
 button.style.background = "white";
 button.style.color = "black"; button.onclick = () => {
 this.app.workspace.getLeaf(true).openFile(tFile);
};
dv.span(button)
```


```dataviewjs
 const button = dv.el('button', 'Open outlook');
 button.style.background = "white";
 button.style.color = "black"; button.onclick = () => {
 window.open("https://outlook.office365.com/mail/")
};
dv.span(button)
```
