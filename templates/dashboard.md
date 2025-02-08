---
notetoolbar: homepageToolbar
cssclasses: []
---


>[!info]+ MOCs
> ```dataview
>  List from "vault"
>  Where type = "moc"
>  ```


>[!info]+ Not MOCed files
> ```dataview
>  List from "vault"
>  Where type != "moc" and !any(filter(file.outlinks, (link) => contains(link.type, "moc")))
>  ```







> [!info]+ Recent Files
> > [!multi-column]
> > > [!info] Last updated  
> > > ```dataview  
> > > List  
> > > From ""  
> > > sort file.mtime Desc  
> > > Limit 5  
> > > ```  
> >
> > > [!info] Last created  
> > > ```dataview  
> > > List  
> > > From ""  
> > > sort file.ctime Desc  
> > > Limit 5  
> > > ```  
> > 
> > > [!info] Last Opened  
> > > `$=dv.list(app.workspace.lastOpenFiles.map(x=>dv.fileLink(x)))`


%%

<!-- TODO Fix Last Opened just above.
Last openFiles inline JS:
`$=dv.list(app.workspace.lastOpenFiles.map(x=>dv.fileLink(x)))`
or
`$=dv.list(app.workspace.lastOpenFiles)`
-->

