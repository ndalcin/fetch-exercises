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

This is similar to attaching an event handler to handle a DOM event! When the result 'happens' - when Open Notify responds to the HTTP request with some data - we want to do something with that data. `then` is the way we specify what should happen when the promise resolves.

In this case, we want to parse the body of the response as JSON, so we call the `.json()` method. `then()` returns a promise, and _that_ promise's handler will get the parsed JSON as input.

```
promiseForData
  .then(response => response.json())
  .then(json => console.log(json)
```

## Tasks

_SWAPI_

API Documentation for the ISS API is at [https://swapi.co/documentation](https://swapi.co/documentation)

1.  Star Wars Episode 4 (Film #1)

* Add a button "Opening Crawl for Episode 4".
* When the user clicks the button, the 'opening crawl' should be appear on the page.
  _NOTE: The ID for Episode 4 is 1_

2.  Star Wars Planets

* Add a number input that takes in a number (only the numbers 1 through 60 are valid planet ids, so think about some way of validating the number)
* Fetch that vehicle's data from the correct url
* Show the name and climate of the planet on the screen

3.  These Are The Droids You're Looking For

* When the page loads, fetch the data for C-3P0 (id: 2) and R2-D2 (id: 3)
* Show each droid's name, height, and mass on the screen
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

* Build a button that fetches a piece of trivia about the number `1`
* and adds the fact to the DOM.

2.  Pick a Number, Any Number.

* Add an number input
* On change, fetch a math fact about that number
* Show it on the screen

3.  Those who fail to study history are doomed to repeat it

* When the page loads, set an interval
* Every 5 seconds, get a fact about a year and show it on the screen
* Start with this year
* Every 5 seconds, get the fact about the previous year
* So, after 50 seconds, it should be 2008 or so

4.  All the numbers

* Add a button 'All the Numbers'
* When clicked, it should fetch facts for one hundred random numbers
* And show them on the screen

🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓
🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓
🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓
🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓
