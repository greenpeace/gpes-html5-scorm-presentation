# About gpes-html5-scorm-presentation

- [About gpes-html5-scorm-presentation](#about-gpes-html5-scorm-presentation)
  - [Create a presentation](#create-a-presentation)
  - [Create an elearning SCORM package with your presentation(s)](#create-an-elearning-scorm-package-with-your-presentations)
    - [1 - Link and configure](#1---link-and-configure)
    - [2 - Edit the table of contents](#2---edit-the-table-of-contents)
    - [3 - Package and upload](#3---package-and-upload)
  - [Create SCORM packages with your own html5 project](#create-scorm-packages-with-your-own-html5-project)

Tool and template to **create presentations** using html and [reveal.js](https://revealjs.com/).

1. Create presentations for Greenpeace, like [this example](https://greenpeace.github.io/gpes-html5-scorm-presentation/).
2. Share your presentations as a [SCORM](https://en.wikipedia.org/wiki/Sharable_Content_Object_Reference_Model) package in [Moodle](https://en.wikipedia.org/wiki/Moodle) or any other [LMS](https://en.wikipedia.org/wiki/List_of_learning_management_systems) that supports them.

This repository is also an **example on how to convert html5 web apps into elearning SCORM packages**. 

The included presentations were tested in Moodle 3.5 and it displays well. **Please test your own work** with a demo course before you use it in real training.

## Create a presentation

1. [Download this repo as a zip](https://github.com/greenpeace/gpes-html5-scorm-presentation/archive/master.zip). Unzip and name it with your presentation folder name.
2. Edit the file [index.html](index.html) with a text editor like [Brackets](http://brackets.io/). For more information on how to create slides, check the reveal.js tool. If you want to create a questions presentation you can edit `questions.html` and `js/questions.js` as an example.

You can use this repository just to create your presentations and in that case you don't need to convert your presentation to SCORM. But if you need your content in the SCORM format, to upload it to a LMS like Moodle, follow the instructions bellow.

## Create an elearning SCORM package with your presentation(s)

### 1 - Link and configure

Once you have finished your presentation, uncomment this html line in index.html (line 25):

```html
<script src="js/scormfunctions.js"></script>
```

You should also customise the score for opening the presentation and the minimum time to be considered complete. Just change the variables in lines 22 and 23.

- The score is added when the user leaves the page or finishes the lesson and should be between 0 and 100.
- The minCompletedTime is the minimum ammount of time (in seconds) for the presentation to be considered complete.

```html
<script>
    var pageScore = 1;
    var minCompletedTime = 30;
</script>
```

If you create more than one html presentation, you should do this step in all your html files.

### 2 - Edit the table of contents

You can have multiple html pages in the same SCROM package. This example has two, `index.html` and `questions.html`.

To add or remove them to the table of contents you need to modify [imsmanifest.xml](imsmanifest.xml) with a text editor like [Brackets](http://brackets.io/). **Look at the examples** in the sections `<organizations>` `<item>` and `<resources>` of this xml. And edit it carefully!


### 3 - Package and upload

Create the SCORM package (a zip file):

```bash
cd presentation-folder
zip -r mypresentation.zip *
```

Upload `mypresentation.zip` to [Moodle, as a SCORM package](https://docs.moodle.org/36/en/SCORM_settings). (It should work with any **L**earning **M**anagement **S**ystem that supports SCORM)

## Create SCORM packages with your own html5 project

If, instead of using the presentations, you just want to **convert your html5 app to SCORM**:

1. Copy [imsmanifest.xml](imsmanifest.xml) and [scormfunctions.js](js/scormfunctions.js) to your project. imsmanifest.xml has to be placed in the project root.
2. Edit imsmanifest.xml 
3. Define the page score and link to scormfunctions.js with a script tag in each html file: `<script> var pageScore = 1; var minCompletedTime = 30; </script> <script src="js/scormfunctions.js"></script>`
4. Create your SCORM package by ziping your project as explained above.
