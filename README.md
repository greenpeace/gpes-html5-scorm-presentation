# About gpes-html5-scorm-presentation

Starter files to **create a slideshow** with html using [reveal.js](https://revealjs.com/) and use it as:

1. A boilerplate to create Greenpeace presentations 
2. An elearning [SCORM](https://en.wikipedia.org/wiki/Sharable_Content_Object_Reference_Model) package with one or more presentations.

This repository is also an **example on how to convert html5 web apps into elearning SCORM packages**. The included presentation was tested in Moodle 3.5 and it displays well. **Please test it yourself** with a demo course before you use it in a real life training.

## Create a presentation

1. [Download this repo as a zip](https://github.com/greenpeace/gpes-html5-scorm-presentation/archive/master.zip). Unzip and name it with your presentation folder name.
2. Edit the file [index.html](index.html) (and/or `index2.html`) with a text editor like [Brackets](http://brackets.io/). For more information on how to create slides, check the reveal.js tool.

You can use this repository just to create your presentations. You don't need to convert your presentation to SCORM. If you need your content in the SCORM format to upload it to a LMS like Moodle, follow the instructions bellow.

## Create an elearning SCORM package with your presentation(s)

1 - Once you have finished your presentation, uncomment this html line in index.html (line 19):

```html
<script src="js/scormify.js"></script>
```

If you use more than one html presentation, you should ensure that you have the previous script tag uncommented in all your html files.

2 - Create the SCORM package (a zip file):

```bash
cd presentation-folder
zip -r mypresentation.zip *
```

3 - Upload `mypresentation.zip` to [Moodle, as a SCORM package](https://docs.moodle.org/36/en/SCORM_settings). (It should work with any **L**earning **M**anagement **S**ystem that supports SCORM)

## Edit the table of contents

You can have multiple html pages (or presentations) in the same SCROM package. This example has two (`index.html` and `index2.html`).

To add or remove them to the table of contents you need to modify [imsmanifest.xml](imsmanifest.xml) with a text editor like [Brackets](http://brackets.io/). **Look at the examples** in the sections `<organizations>` `<item>` and `<resources>` of this xml. And edit it carefully!

## SCORM html5 boilerplate

If you don't want to do presentations and just want the files to **convert your html5 app to SCORM**, you can copy [imsmanifest.xml](imsmanifest.xml) and [scormify.js](js/scormify.js) to your project. Don't forget to edit imsmanifest.xml and link to scormify.js with a script tag. And zip your project as explained above.
