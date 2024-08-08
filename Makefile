NOTES  = $(wildcard notes/*.md)
OUTPUT = $(NOTES:.md=.html)

NOTES_TEMPLATE = templates/notes.html
HTML_TEMPLATE  = templates/template.html
CSS_TEMPLATE   = style.css

# Converts .md files to .html fiels using the given templates
notes/%.html: notes/%.md
	pandoc -s --template=$(HTML_TEMPLATE) --css=../$(CSS_TEMPLATE) $< -o $@

.Phony: all clean notes FORCE

# Creates .html files from .md files, ignoring those which have not changed.
all: $(OUTPUT)

# Regenerates the notes.html file using the template, replacing {NOTES} with links.
notes: FORCE
	sed 's/{NOTES}/.\/gen_note_links "notes"/e' ${NOTES_TEMPLATE} > notes.html

clean:
	rm notes/*.html
	rm notes.html

FORCE:
