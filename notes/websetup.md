---
title: Web Setup
date: 2024 Aug 08
tags:
---

## Notes

Notes for how to setup this website. Unfortunately or fortunately, no static
site generators (ssg) are used. Maybe in the future hugo, 11ty, or even zola
might be used. But for now, since the notes are minimal and I do not see myself
churning out 10 bajillion notes, this setup is simple and should suffice.

### Components

There are four dependencies:

*   sed (GNU)
*   make
*   pandoc
*   bash

And three places of interest

*   Makefile: this is where the .md to .html conversion takes place
*   templates dir: directory for templates used by pandoc and notes file
*   gen_note_links: a script which generates hrefs for the notes based on the front matter

### Variables

Inside the Makefile there are these variables
```make
NOTES  = $(wildcard notes/*.md)
OUTPUT = $(NOTES:.md=.html)

NOTES_TEMPLATE = templates/notes.html
HTML_TEMPLATE  = templates/template.html
CSS_TEMPLATE   = style.css
```

`NOTES` is where the directory of where .md file should be searched. Currently
the `OUTPUT` is in the same directory and converts the markdown in to html
files.

The templates files are self explanatory. Html template and css templates for
the notes, and the `NOTES_TEMPLATE` for the landing page.

Note the `NOTES_TEMPLATE` is actually not a pandoc template but a custom
template defined specifically for inserting hrefs. It has an element `{NOTES}`
which is then sed'ed with the appropriate links.

### Targets

The Makefile only has three targets

1.  all
2.  notes
3.  clean

Calling `all` converts any changed .md files into .html files. `notes`
regenerates the links for the notes landing page. `clean`, well, cleans... the
files.

### Process

So the steps for publishing are

1.  Write a .md file in the notes directory, including the front matter (title and date)
2.  Run `make`
3.  Run `make notes` if the links got deleted, added, or changed
4.  Profit?

## End

That is about it... fairly simple... let us see how long this lasts.
