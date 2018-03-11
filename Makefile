PATH        := ./node_modules/.bin:${PATH}

NPM_PACKAGE := $(shell node -e 'process.stdout.write(require("./package.json").name.replace(/^.*?\//, ""))')
NPM_VERSION := $(shell node -e 'process.stdout.write(require("./package.json").version)')

TMP_PATH    := /tmp/${NPM_PACKAGE}-$(shell date +%s)

REMOTE_NAME ?= origin
REMOTE_REPO ?= $(shell git config --get remote.${REMOTE_NAME}.url)

CURR_HEAD   := $(firstword $(shell git show-ref --hash HEAD | cut -b -6) master)
GITHUB_PROJ := https://github.com//GerHobbelt/${NPM_PACKAGE}

all: update build

update:
	node support/update.js

build: lint browserify doc test coverage todo 

lint:
	eslint .

test: lint
	mocha

coverage:
	-rm -rf coverage
	istanbul cover node_modules/mocha/bin/_mocha

report-coverage: coverage

doc:
	#rm -rf ./apidoc
	#ndoc --link-format "https://github.com/{package.repository}/blob/${CURR_HEAD}/{file}#L{line}"

browserify:
	-rm -rf ./dist
	mkdir dist
	# Browserify
	( printf "/*! ${NPM_PACKAGE} ${NPM_VERSION} ${GITHUB_PROJ} @license MIT */" ; \
		browserify ./ -s markdownitEmoji \
		) > dist/${NPM_PACKAGE}.js
	# Browserify light version
	( printf "/*! ${NPM_PACKAGE} ${NPM_VERSION} ${GITHUB_PROJ} @license MIT */" ; \
		browserify ./light.js -s markdownitEmoji \
		) > dist/${NPM_PACKAGE}-light.js

minify: browserify
	# Minify
	uglifyjs dist/${NPM_PACKAGE}.js -b beautify=false,ascii_only=true -c -m \
		--preamble "/*! ${NPM_PACKAGE} ${NPM_VERSION} ${GITHUB_PROJ} @license MIT */" \
		> dist/${NPM_PACKAGE}.min.js
	# Minify light version
	uglifyjs dist/${NPM_PACKAGE}-light.js -b beautify=false,ascii-only=true -c -m \
		--preamble "/*! ${NPM_PACKAGE} ${NPM_VERSION} ${GITHUB_PROJ} @license MIT */" \
		> dist/${NPM_PACKAGE}-light.min.js

todo:
	@echo ""
	@echo "TODO list"
	@echo "---------"
	@echo ""
	grep 'TODO' -n -r ./lib 2>/dev/null || test true

clean:
	-rm -rf ./coverage/
	-rm -rf ./dist/

superclean: clean
	-rm -rf ./node_modules/
	-rm -f ./package-lock.json

prep: superclean
	-ncu -a --packageFile=package.json
	-npm install


.PHONY: doc clean lint test todo coverage report-coverage build browserify minify superclean prep
.SILENT: help lint test todo
