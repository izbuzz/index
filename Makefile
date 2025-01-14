NOTES  := $(wildcard notes/*.md)
BLOGS  := $(wildcard blogs/*.md)

NOTES_HTML := $(NOTES:.md=.html)
BLOGS_HTML :=$(BLOGS:.md=.html)

ARCHIVE_INDEX := templates/archive.html
NOTES_INDEX := templates/notes.html
NOTE_HTML := templates/note.html
BLOG_HTML := templates/blog.html

CSS := style.css

# Converts .md files to .html fiels using the given templates
notes/%.html: notes/%.md
	pandoc -s --template=$(NOTE_HTML) --css=../$(CSS) $< -o $@

blogs/%.html: blogs/%.md
	pandoc -s --template=$(BLOG_HTML) --css=../$(CSS) $< -o $@

.Phony: all clean index FORCE

# Creates .html files from .md files, ignoring those which have not changed.
all: $(BLOGS_HTML) $(NOTES_HTML)

# Regenerate the archive.html file using the template, replacing {NOTES} with links.
index: FORCE
	sed 's/{NOTES}/.\/index_dir "blogs"/e' ${ARCHIVE_INDEX} > archive.html
	sed 's/{NOTES}/.\/index_dir "notes"/e' ${NOTES_INDEX} > notes.html

# Remove all notes, keep the indexes however, as they may not need to be regenerated
clean:
	rm -f $(NOTES_HTML) $(BLOGS_HTML)

FORCE:
