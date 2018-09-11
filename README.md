# Javascript `fetch` GET requests lab

## Overview

In this lab, you'll use `fetch` to send GET requests to the Star Wars API and the Numbers API and handle the data.

## Introduction

First we're going to use `fetch` to get data about Star Wars 🛰👾🚀. Then, we'll check out the Numbers API and handle info for some nerdy number facts 🔢🤓📐.

Getting data from SWAPI is simple! We pass the url into `fetch`, then add the handling behavior for the response with `.then`:

```
fetch('https://swapi.co/api/films/1/')
  .then(res => res.json())
  .then(json => console.log(json));
```

The call to fetch returns a _Promise_ right away.

```
let promiseForData = fetch('https://swapi.co/api/films/1/')
// evaluates immediately
```

We add a handler for the data with `then`.

```
promiseForData.then(response => response.json())
```

This is similar to attaching an event handler to handle a DOM event! When the result 'happens' - when SWAPI responds to the HTTP request with some data - we want to do something with that data. `then` is the way we specify what should happen when the promise resolves.

In this case, we want to parse the body of the response as JSON, so we call the `.json()` method. `then()` returns a promise, and _that_ promise's handler will get the parsed JSON as input.

```
promiseForData
  .then(response => response.json())
  .then(json => console.log(json)
```

## Tasks

_SWAPI_

API Documentation for SWAPI is at [https://swapi.co/documentation](https://swapi.co/documentation)

1.  Opening Crawl - Star Wars Episode 4 (Film #1)

* When the user clicks the button "Get Opening Crawl", you should fetch the data from the correct URL
  _NOTE: The ID for Episode 4 is 1_
 * When the promise is resolved, the 'opening crawl' should appear on the page in the `#crawlDiv`

2.  Star Wars Planets

* Using the input form, a user should choose a number corresponding a some planet id (only the numbers 1 through 60 are valid planet ids, so think about some way of validating the number)
* Fetch that planet's data from the correct url
* Display the name and climate of the planet in the `#planetData`

3.  These Are The Droids You're Looking For

* When the page loads, fetch the data for the characters C-3P0 (id: 2) and R2-D2 (id: 3)
* Show each droid's name, height, and mass on the screen in the `#droidData`
* Display a button for each droid that reads 'Show Homeworld Details'
* On click, this button should fetch to the api _again_ to get information about the planet

  * Things to consider:

    * What information do you need from the first fetch to make the second?
    * How can you store this data on the page (without the user seeing it)?
    * When should you add the event listener for these two buttons?

_NERDY NUMBERS_

The [Numbers API](http://numbersapi.com/) is, in their words

> An API for interesting facts about numbers

Let's nerd out.

1.  Number One.

* When a user clicks on the button 'Facts About 1':
  * fetch a random fact about the number 1
  * Add the fact to the DOM in the `#one-facts` div

2.  Pick a Number, Any Number.

* When a user enters a number in the input:
  * On change, fetch a math fact about that number
  * Try adding a validation so that a user can't submit a non-number
  * Show it on the screen in the `#random-math-fact` div

3.  Those who fail to study history are doomed to repeat it

* When the page loads, start an interval:
  * Every 5 seconds, fetch a fact about a year and show it on the screen in the `#year-history` div
  * Start with this year
  * Every 5 seconds, get the fact about the previous year

4.  All the numbers

* When a user clicks the 'All of the Numbers' button
  * fetch facts for one hundred random numbers
  * append a div to `"#all-the-numbers"` to display all numbers and their fact

🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓
🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓
🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓
🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓
