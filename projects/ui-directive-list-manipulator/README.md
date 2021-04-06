# UiDirectiveListManipulator

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.14.

The ListManipulatorDirective, with the [libListManipulator] should be applied to the element tag. Element tag means the component that is *ngFor-ed and used to form a list.

The model that should be given to the directive should be the model of the whole list manipulator directive, not the model for a single element.

The interface ListManipulatorModel shall be implemented by the model for list management such as the model for keywords or the model for translations.

It is recommended that the user use a component as the holder of the list model as well as a wrapper of the element tag. The wrapper then passes the model to this directive.
