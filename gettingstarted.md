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

For this example, we will create a file called 'script.js' next to the html page.  Within the script file, we will define one javascript object:

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



