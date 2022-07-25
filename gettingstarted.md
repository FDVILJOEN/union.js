---
title: Getting Started with union.js
layout: Cayman
filename: gettingstarted.md
---

Follow these easy steps to get union.js hooked up and building web content using only javascript:

## 1. Create a basic empty html file

The primary hook into the browser is still an html file, so we need a basic, empty file such as this (default.html in that case) :

```
<!DOCTYPE html>
<html>
    <head>        
    </head>
    <body>
    </body>
</html>
```

## 2. Create a link to the union.js script

This is done using a script tag that links to a copy of union.js.  In this case, we are using the online, minified version:

```
<script src='https://fdviljoen.github.io/union.js/src/union.min.js'></script>
```

## 3.  Create your javascript file that will host all other web content

For this example, we will create a file called 'script.js' next to the html page.  Within the script file, we will define a javascript object that will be passed to union.js:

```
var myPageObject = {
    
}
```

We then link the script.js file into the html using a script tag.

## 4. Call the buildPage function.

We typically do this in the opnload event of the page body so that the complete page has been loaded before we start adding more objects to the DOM.  This is done by adding the following to your body tag in your html file:

```
onload="buildPage(myPageObject);"
```

# To Recap
After you completed these steps, you should now have two files.  Firstly, an html file with the following code:

```
<!DOCTYPE html>
<html>
    <head>   
        <script src='https://fdviljoen.github.io/union.js/src/union.min.js'></script>
        <script src='script.js'></script>
    </head>
    <body onload="buildPage(myPageObject);">
    </body>
</html>
```
At this point, all of the elements required is hooked up, and now we will focus on the javascript file only.

## 5. Add basic elements to the javascript object.

Similar to a web page, the javascript object has the following optional attributes that union.js looks for:

### head
Here is a sample of the head object:

```
head: {
        title: 'union.js - getting started sample'
    },
```
Any attributes of the head object, gets applied to the document oibject in html directly, so this is an object that allows you to change aspects of the page such as the title.

### body

This object is typically made up of attributes that are applied to the html body, together with sub objects that are emited to html as tags withi the body.

For example, adding this body to your javascript object:

```
body: {
    SectionA: {},
    SectionB: {}
}
```
Will lead to this resulting html code:

<img width="301" alt="Screenshot 2022-07-25 at 17 20 16" src="https://user-images.githubusercontent.com/43622111/180826831-cc441458-022e-4bbd-b23b-db5531aff0ff.png">

You will notice that objects get created in html as div objects by default.  To alter the tag, simply add a tag attribute to the javascript object:

```
var myPageObject = {
    body: {
        SectionA: {
            tag: 'h4'
        },
        SectionB: {}
    }
}
```

<img width="288" alt="Screenshot 2022-07-25 at 17 23 07" src="https://user-images.githubusercontent.com/43622111/180827280-b1b18c1c-b882-423c-985e-f2b349215d1a.png">

You can now add a value to SectionA, and you should see the following code being rendered:

```
var myPageObject = {
    body: {
        SectionA: {
            tag: 'h4',
            value: 'Hello World'
        },
        SectionB: {}
    }
}
```
<img width="585" alt="Screenshot 2022-07-25 at 17 25 20" src="https://user-images.githubusercontent.com/43622111/180827684-174be52d-5523-4502-86d4-c88f562c2c3b.png">

Over here, we add a few items to sectionB, so we have:

```
var myPageObject = {
    body: {
        SectionA: {
            tag: 'h4',
            value: 'Hello World'
        },
        SectionB: {
            sampleLabel: {
                tag: 'label',
                value: 'This is a sample label'
            },
            inputBox: {
                tag: 'input',
                value: 'Change this text'
            },
            inputButton: {
                tag: 'button',
                value: 'then click here.',
                onclick: function() {
                    alert('You changed the value to ' + this.SectionB.inputBox.value)
                }
            }
        }
    }
}
```

which then gives you the following web page:

<img width="796" alt="Screenshot 2022-07-25 at 17 32 01" src="https://user-images.githubusercontent.com/43622111/180828914-a976f1ac-6f1d-4592-be8a-7c3b15f71a68.png">

The script in the javascript object works as expected:

<img width="456" alt="Screenshot 2022-07-25 at 17 33 51" src="https://user-images.githubusercontent.com/43622111/180829283-817878fe-6b5a-423b-8037-64ad75afe4d4.png">



### style
Here is an example of how the style object can be used to define global styles within your DOM:

```
style: {
        body: {"font-family": "Verdana"},
        label: {width: '170px', display: 'inline-block'},
        input: { width: '200px', 'border-radius': '5px', 'border': '1px solid black'}
    }
```



