---
excalidraw-plugin: parsed
tags:
  - excalidraw
cssclasses:
  - dashboard
excalidraw-open-md: true
---
# MOCs

```dataview
TABLE WITHOUT ID
file.link AS "Note Name", file.mtime AS " Last Updated", length(file.inlinks) AS "LINKS"
FROM "vault/1-MOCs"
WHERE type = "moc"
SORT file.mtime desc
limit 10
```



# TODOs

## Dailies

> [!NOTE|no-icon|no-title] 
> ```dataviewjs 
> let notes = dv.pages('"vault/0-dailynotes"').map(p => p.file.path);
> for (let note of notes) {
> 	let page = dv.page(note);
> 	let tasks = page.file.tasks.where(t => !t.completed);
> 	if (tasks.length > 0) {
> 		dv.taskList(tasks);
> 	}
> }
> ```  




## Sport


> [!NOTE|no-icon|no-title] 
> ```dataviewjs
> window.searchedFileName = "Sport.md";
> dv.view("scripts/MOC_tasks_generic")
> ```


# Last updated files

```dataview
TABLE WITHOUT ID
file.link AS "Note Name", file.mtime AS " Last Updated", length(file.inlinks) AS "LINKS"
FROM ""
SORT file.mtime desc
limit 10
```

# Last created files

```dataview
TABLE WITHOUT ID
file.link AS "Note Name", file.ctime AS " Last Created", length(file.inlinks) AS "LINKS"
FROM ""
SORT file.ctime desc
limit 10
```






# Not MOCed files

```dataview
TABLE WITHOUT ID
file.link AS "Note Name", file.ctime AS " Last Created", length(file.inlinks) AS "LINKS"
FROM "vault/2-notes"
WHERE type != "moc" and !any(filter(file.outlinks, (link) => contains(link.type, "moc")))
SORT file.ctime desc
limit 10
```

%%
# Excalidraw Data

## Text Elements

## Drawing
```compressed-json
N4KAkARALgngDgUwgLgAQQQDwMYEMA2AlgCYBOuA7hADTgQBuCpAzoQPYB2KqATLZMzYBXUtiRoIACyhQ4zZAHoFAc0JRJQgEYA6bGwC2CgF7N6hbEcK4OCtptbErHALRY8RMpWdx8Q1TdIEfARcZgRmBShcZQUebQB2bQBWGjoghH0EDihmbgBtcDBQMBKIEm4IACUOAA59AHUAM2YAGTYAYWZ49paANQBNACkAfQBZACtB1JLIWEQKwOwojmVg

6dLMbmcATiTk/lKYLYBGABZE454kg8gKEnVuU75CyEkEQmVpbmPt/ZeIayrcSoAAMNwgzCgpDYAGsEO02Pg2KQKgBiY4IDEY9aQTS4bAw5TQoQcYgIpEoiRQ6zMOC4QLZHEQRqEfD4ADKsDWEkEHiZkOhcPq90k3GeMwhUNhCE5MG56F55XBxM+HHCuTQx3BbDp2DUR01ILB/yJwjgAEliBrUHkALrgxrkTKW7gcIRs8GEUlYCq4EFM4mktXMa3F

CVzYEAZheAF9wWEEMRvkkeMcjacajxTuDGCx2Fw0Fmc0xWJwAHKcMTfSPxWtp441bP/QjMAAi6Sgie4UKECHBmmEpIAosFMtlrW6Pf8hHBiLhO0nNfFIwA2Gog45JJLbbY1GrgogcGGu934A9sAldtCNAhhQox8D2ui4OBwTnz4Fh6BvTIVIifKB1gYQgEAoAAhfFCUDMlEWRNFGgQxCgOwEQGSgc1O30TlBXhWDKXQdFMSI5DUKydDMIgglTRJG

CKQqakOFpekyJI0g0IwjIADFWQ5LlgQhRElUKCAULYsiOKwqUhRFMUDhE0jsgk7DpVleUBL5OTRPYzDKmEVV1W+TSFPIjIAHldX1b4jSMsTFMwzjOCgTjcH0VkDVQa5hK08T7Mc9lCCMYEeGNUpvLsjIABUsCgABBf8C3QYJGkAmztIyd9SFiti2AoN5cEXVBJzPLzjIkodSRi7LcpCAqASq1i0v0SroQoCL4H46CgOYbBoTZAANbhI22SM/lKbr

evwfoxRTbQa080ojDYAxuDDSB6AIXsxXvVKfIyXSaODa0IE6uSiRIfzArFELIDO4hOQQOBuHmm7SBIUY2GIBBytwTRggKm98DCU7XtouC0FWiAwMRWrSGUPEAApU3iaheGOZHUfRkFkgASiZSoEGUd16QWOHcERyMwV4CmUZ4anQRxiBtpK2yoGUuFzKgfMJ1POTHRchB8e9V6VhW/4sh+v7u1IXtwWwIhHrQHs+3+Dh+almX/mEKBD2BJWmdKOx

xgQJZmHZVW4Hez7vt+q9UABoHhPxTnGAipb8FF8N2oqMJgiWfMmRQyEDDa+Y0CK89L3+29lYlfBQliv2Xbdk82XvcA4zoFlglDB8YyAA
```
%%