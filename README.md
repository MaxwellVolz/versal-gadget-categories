versal-gadget-categories
========================

Widget for the Versal Teaching Platform based on sorting words into banks.

## Basic functions
- Authors can change text and  category assignment
- Learners can view the text, drag and drop elements into their respective banks.

## Tech details
The categories widget has two parts
- Toggle between author view and learner view
- Toggle assignment of category
- jQueryUI for stickiness and addClass/removeClass for category management

Versal Gadget API
[versal-gadget-api](https://github.com/Versal/versal-gadget-api),
which provides some convenience libraries and basic styles.

Types of interactions:
  - Asset uploading
  - setAttributes / onAttributesChanged
  - setLearnerState / onLearnerStateChanged

Please see the [gadget developer
intro](https://github.com/Versal/gadget-dev-intro/) for more information
about gadget development.

## Build Steps

```
bower install
```

## Preview gadget

```
versal preview
```
