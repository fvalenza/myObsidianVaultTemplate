
You start with empty vault.

We are going to setup things in the following order, trying to explain the rational and configuration of each step.
- The folders layout
- The Core Obsidian plugins and their configuration
- The dimensioning plugins (that forces a certain way to use the vault)
- The non dimensioning plugins
- The UI layout




# The folders layout

- assets/ -> Folder to save assets. This will NOT contain the copy-pasted clipboard screenshots (these ones will be directly with the note)
- excalidraw/ -> Put all stuff related to excalidraw drawing (downloaded and user libraries, scripts)
- scripts/ -> All the stuff related to added functionalities through scripts
- templates/ -> Contains the templates. This can include the note templates, or files containing some block of code etc in order to be embedded elsewhere (think like `#include` in C)
- vault -> The actual vault of notes
- vault/0-dailynotes/



# Core Plugins

The core plugins activated are:
- Bookmarks
- Command palette
- Daily notes
- Files
- Outline
- Page preview
- Quick switcher
- (Search) // TODO : replace it with omnisearch ???
- (Slides) for people that like this functionality (could be replaced by excalidraw though)
- Templates
- Word count
- Workspaces
All others are deactivated. Their functionnality can either be emuled in a better way (e.g. tag view) or not necessary (at least for me)


The important setup of these Core plugins (meaning the rest is up to you and your preferences) is:

## Daily notes
Date format --> YYYY-MM-DD
New file location --> vault/0-dailynotes/
template file location --> templates/dailynote
Open daily on startup --> NO


We will setup the daily note template later as it will be easier to do it with excalidraw directly

## Templates
Template folder location --> templates/



# The dimensioning community plugins

First, Turn On Community plugins

Here is the list of dimensioning plugins that we will activate and configure and why i decided to use them
- [Folder notes ](obsidian://show-plugin?id=folder-notes) --> Associates a folder to a note. Will be __really__ useful when managing screenshots assets. Folder note becomes self sufficient. When sharing, just copy the folder
- [Attachment Management](obsidian://show-plugin?id=attachment-management) -> So that attachments are directly put in the folder note
- [Excalidraw](obsidian://show-plugin?id=obsidian-excalidraw-plugin) -> Godmode plugin that allow to sketch easily. We will use its flipside's note feature so that every sketch/drawing that we want in a note is directly within the note. The markdown side can embed drawings of the flipside, and vice-versa
- [Homepage](obsidian://show-plugin?id=homepage) -> A central homepage/dashboard that we can customize to easily access most relevant info/notes
- [Dataview](obsidian://show-plugin?id=dataview) -> 
- [Meta Bind](obsidian://show-plugin?id=obsidian-meta-bind-plugin) -> 



## Folder Note

Keep default settings

## Attachment Management

Two important settings to update:
In Attachment Management settings, the attachment path should be `${notepath}` with root path being `Copy Obsidian settings`
![[IMG-20250208213847832.png]]
And in obsidian settings' "File and link", the default location for new attachments should be `Vault Folder`:
![[IMG-20250208213847892.png]]

## Excalidraw

To setup excalidraw plugin, one can follow this [video](https://www.youtube.com/watch?v=zmgqMZi6QL8&list=PL5qJ4nvurC4s0YZLZhnOlE7JccUMN9gvw)

Following, only the relevant settings changing from the default plugin's one are given + the basis for hybrid template. This will later be used to setup all other templates


Basic > Excalidraw Folder --> `excalidraw` (lower case the first `E`)
Basic > Excalidraw template file or folder --> `templates`
Basic > Excalidraw automate script --> `excalidraw/scripts`
Saving > Filename > .excalidraw.md or .md --> `OFF` to have only .md
Embedding excalidraw > Export Settings > Auto Export Settings > Auto export SVG -> `true`

Hotkey to switch note side between markdown and excalidraw
`Ctrl + Shift + E` to change into Hotkeys > `Excalidraw : toggle between excalidraw and markdown`

For the basic template, see the video.



==> We can now create a new note from a basic-excalinote template, and make it a notefolder <==

We can right clic to vault, create new note `test template excalinote manually made into folder note`
Once in the note, ctrl-p > insert template > basic-excalinote
And you can check that you can switch sides of note.
Then (be sure to have the note actively opened), ctrl-p > `Folder note : Create folder note with a new folder for the active note in the current folder`.
In the file explorer the note.md should become like a "folder" (expandable) and when you click on it it opens the note. The note can be opened with ctrl-o also

> [!warning]
> At this point, we have the initial plugins setup but we need to automatically create a folder note when creating a new note

TODO 

## Homepage

In settings of Homepage plugin:

Homepage should be a file name `Dashboard`
Open on startup -> `true`
Open on empty -> `true`
Opened view > Homepage view -> `Reading view`  or `Editing view (preview)` --> important for the styling and dataview queries (callouts + results of queries directly readable and not source code). The idea of the homepage is nonetheless to be immutable once you have the desired content/queries. So i recommend Reading view

==> Now create the Dashboard file at the root of the vault. Keep it empty for the moment. <==


> [!info]
> We are basically setup for the vault structure. You can either start your own customization from here or follow the next steps. They will require some more plugins to be installed to entirely profit with the Vault we are creating.



You can fill this file with your preferred content if you don't want to follow the rest of this tutorial. But before we do it, we must install other plugins that are necessary for our dashboard / journey

## Dataview

-> Enable Javascript Queries and Javascript inline queries (caveat : be sure to understand what you copy from internet)
Some good content videos:
- [How to search and filter like a pro](https://www.youtube.com/watch?v=vP6tA40_Bcs&list=PL5qJ4nvurC4s0YZLZhnOlE7JccUMN9gvw&index=9)


## Meta Bind

Take a look at:
- [How i use metabind to create interactive buttons](https://www.youtube.com/watch?v=dP33gV_R1wo&list=PL5qJ4nvurC4s0YZLZhnOlE7JccUMN9gvw&index=8)
- and more on youtube/reddit/obsidian forum

We will use them essentially for buttons on the homepage, and tag/search pages


## Modular CSS Layout - Multicolumn

https://efemkay.github.io/obsidian-modular-css-layout/

We will manually install the snippet, but you can follow installation procedure with Snippet Downloader if you prefer

Ensure that in your vault, the folder `.obsidian/snippets` exists.
Then copy the 3 css files from [MCL Github](https://github.com/efemkay/obsidian-modular-css-layout/tree/main) into the snippets folder

See cheatsheet or MCL documentation (and showcase on their github) for usage

## Callout's plugins

### Callout Menu

[Plugin Callout Menu link](obsidian://show-plugin?id=callout-menu)

![[IMG-20250208213847925.png]]

### Callout Manager

[Plugin Callout Manager link](obsidian://show-plugin?id=callout-manager)
Optional Plugin for those who master callouts and/or their configuration.

A welcomed helper for those who don't master them.
In the plugin settings, (CalloutManager> Manage Callout) you can see all the available callouts, and edit them if you want. You can also copy directly the codeblock to create the callout in your document.


<!-- TODO: To remove when 100% sure we don't need this functionnality because dataviewjs queries are sufficient 
## Tasks

One of the feature we want in our Dashboard is to be able to gather the tasks that we may have written in all our daily notes etc..
The plugin [tasks](obsidian://show-plugin?id=obsidian-tasks-plugin) will help us reach our goals
-->

### Calendar


[Calendar plugin](obsidian://show-plugin?id=calendar) So that when we search for dates and week number, we don't struggle.

Start Week on --> `Monday`
Show week number --> `True`


> [!important]
> Let's start the real customization



## Customization / Building the content of the Vault

### Custom theme

Settings > Appearance > Manage Theme > `Catppuccin`


### Windows layout


![[obsidian-vault-windows-layout2.png]]

On the right column, 2 rows -> ,Outline, Calendar + Bookmark+properties(properties is optional, depends on your preferences)


If you can't find bookmark view, ctrl-p > `bookmarks : show bookmarks`
The view should appear on the left column. Drag the icon to the bottom right.


### Vault organization and notes templates
The Vault content will be built around the Map of Content Concept
For each topic of interest, we will have a "Moc". This note will display all the notes that link to it + some helper tag/word search (that will only search into the MoC backlinks)
And if you want to add further customization,  you can too !

See this MoC pages as a specialized dashboard but only for the topic of the MoC

All daily notes will go in the daily-notes folder.

### Homepage






Other settings:

Hotkey `ctrl + E` for reading view / source mode