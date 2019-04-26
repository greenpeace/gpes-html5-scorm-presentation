# About gpes-html5-scorm-presentation

Greenpeace theme and starter files to **create a slideshow** with html using [reveal.js](https://revealjs.com/) and use it as:

1. A boilerplate to create Greenpeace presentations 
2. An e-learning [SCORM](https://en.wikipedia.org/wiki/Sharable_Content_Object_Reference_Model) package.

This repository is also an example on how to convert html5 web apps into elearning SCORM packages. The included presentation was tested in Moodle 3.5.

## How to create a presentation

1. [Download this repo as a zip](https://github.com/greenpeace/gpes-html5-scorm-presentation/archive/master.zip). Unzip and name it with your project folder name.
2. Edit the file `index.html` with a text editor like [Brackets](http://brackets.io/). For more information on how to create slides, check the reveal.js tool.

## How to create an elearning SCORM package

1 - Once you have finished your presentation, uncomment this html line in index.html (line 19):

```html
<script src="js/scormify.js"></script>
```

2 - Create the SCORM package (a zip file):

```bash
cd presentation-folder
zip -r mypresentation.zip *
```

3 - Upload `mypresentation.zip` to [Moodle, as a SCORM package](https://docs.moodle.org/36/en/SCORM_settings). (It should work with any **L**earning **M**anagement **S**ystem that supports SCORM)
