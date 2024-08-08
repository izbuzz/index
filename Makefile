NOTES  = $(wildcard notes/*.md)
OUTPUT = $(NOTES:.md=.html)

HTML_TEMPLATE = template.html
CSS_TEMPLATE  = style.css

notes/%.html: notes/%.md
	pandoc -s --toc --template=templates/$(HTML_TEMPLATE) --css=../$(CSS_TEMPLATE) $< -o $@

.Phony: all clean

all: $(OUTPUT)

clean:
	rm notes/*.html
