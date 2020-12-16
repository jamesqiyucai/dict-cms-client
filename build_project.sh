#! /bin/bash

node build.js service-source
node build.js service-example-source-book
node build.js service-example-source-journal
node build.js service-example-proposal-source-book
node build.js service-example-proposal-source-journal
node build.js service-example-keyword
node build.js service-example-proposal-keyword
node build.js service-example-translation
node build.js service-example-proposal-translation

node build.js ui-model-editable
node build.js ui-model-source
node build.js ui-model-example-source-book
node build.js ui-model-example-source-journal
node build.js ui-model-example-proposal-source-book
node build.js ui-model-example-proposal-source-journal

node build.js ui-directive-editable
node build.js ui-directive-list-manipulator
