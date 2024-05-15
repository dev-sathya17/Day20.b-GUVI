# Day 20-GUVI

> **Image Gaallery**  
> [Source Code](./index.html)  
> Explanation:
>
> First, we create an _index.html_ file to which we add our _script.js_ and _style.css_ files using _script_ and _link_ tags respectively.
> The page is styled using raw CSS and BootstrapCSS.
> Now, in our JavaScript code, first we declare the API Key and URL as a **const** variable.
> Let's get into the Code flow:
>
> - Fetch API is used to make a GET request to the URL of [picsum](https://picsum.photos/v2/list).
> - The gallery container is selected using `document.getElementById()`
> - The data is received from the API which is parsed to json using `then()` method.
> - Then the data is iterated using `forEach()` method.
>   -The data is passed to a helper function named as `displayData()`
> - Necessary elements such as div and img tags are created using `document.createElement()`.
> - All necessary bootstrap classes are added to the elements by selecting its classList.
> - In the [Home page](index.html), we render a navbar using BootstrapCSS.
> - A second page is created in a folder, **pages** to make the code base look clean.
> - This page is a module, where we generate a random image, based on the image id, that we get from the API.
> - The resultant image is then displayed, below the button.
> - Thus, using the Fetch API, we are able to retrieve images and also get a particular image via its ID as well.

---
