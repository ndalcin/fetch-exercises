document.addEventListener("DOMContentLoaded", () => {
  crawlButton = document.querySelector("#crawlbtn");
  crawlButton.addEventListener("click", getOpeningCrawl);
  planetSelector = document.querySelector("#planetForm");
  planetSelector.addEventListener("submit", getPlanet);
  getDroids();
});

const getOpeningCrawl = () => {
  fetch("https://swapi.co/api/films/1/")
    .then(r => r.json())
    .then(d => {
      crawlDiv = document.getElementById("crawldiv");
      crawlDiv.innerText = d.opening_crawl;
    });
};

const getPlanet = e => {
  e.preventDefault();
  currentPlanet = parseInt(document.querySelector("#planetInput").value);
  planetData = document.getElementById("planetData");

  if (isNaN(currentPlanet)) {
    planetData.innerText = "please enter a number between 1 and 60";
  } else if (currentPlanet < 1 || currentPlanet > 60) {
    planetData.innerText = "please enter a number between 1 and 60";
  } else {
    fetch(`https://swapi.co/api/planets/${currentPlanet}/`)
      .then(r => r.json())
      .then(d => {
        planetData.innerHTML = `<p>Name: ${d.name}</p> <p>Climate: ${
          d.climate
        }`;
      });
  }
};

const getDroids = () => {
  droidIDs = [2, 3];
  droidDiv = document.getElementById("droidData");
  droidIDs.map(droid =>
    fetch(`https://swapi.co/api/people/${droid}/`)
      .then(r => r.json())
      .then(droid =>
        fetch(droid.homeworld)
          .then(r => r.json())
          .then(planet => {
            droidDiv.innerHTML += `<p><strong>Name:</strong> ${droid.name}</p>
          <p><strong>Height:</strong> ${droid.height}</p>
          <p><strong>Mass:</strong> ${droid.mass}</p>
          <p><strong>Home Planet:</strong> ${planet.name}</p></br></br>`;
          })
      )
  );
};
