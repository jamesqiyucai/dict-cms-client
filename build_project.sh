#! /bin/bash
prod=true
ng build service-source --prod=$prod
ng build ui-model-editable --prod=$prod
ng build ui-model-source --prod=$prod
ng build ui-component-source --prod=$prod
ng build ui-directive-editable --prod=$prod
ng build ui-directive-list-manipulator --prod=$prod
