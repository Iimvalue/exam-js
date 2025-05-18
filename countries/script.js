localStorage.getItem("username")
  ? (document.getElementById(
      "welcome-user"
    ).innerText = `Welcome ${localStorage.getItem("username")}`)
  : (window.location.href = "../sign-in/");


  document.getElementById("logout").addEventListener("click", ()=>{
    localStorage.removeItem("username")
    window.location.href = "./"
  })

let cardContainer = document.getElementById("grid-cards");
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {

      let col = document.createElement("div");
      let card = document.createElement("div");
      let image = document.createElement("img");
      let cardBody = document.createElement("div");
      let title = document.createElement("h5");
      let wholeNameOfCountry = document.createElement("p");
      let population = document.createElement("p");
      let region = document.createElement("p");
      let languages = document.createElement("p");
      let location = document.createElement("a");

      col.className = "col d-flex justify-content-center";
      card.style = "width: 23rem;";
      card.className = "card shadow-sm h-100 p-3";
      title.textContent = country.name.common;
      title.className = "card-title";
      wholeNameOfCountry.textContent = `Full Name: ${country.name.official}`;
      wholeNameOfCountry.className = "card-text";
      population.textContent = `Population: ${country.population}`;
      population.className = "card-text";

      image.src = country.flags.png;
      image.style = "width:100%; height:225px";
      image.className = "card-img-top";

      region.textContent = `Region: ${country.region}`;
      region.className = "card-text";

       Object.values(languages).forEach(item => console.log(item))
      
      languages.textContent = `Languages: ${country.languages}`;
      languages.className = "card-text";
      location.text = "Google Map location";
      location.className = "btn btn-dark text-white";
      location.href = country.maps.googleMaps;

      cardBody.appendChild(title);
      cardBody.appendChild(wholeNameOfCountry);
      cardBody.appendChild(population);
      cardBody.appendChild(region);
      cardBody.appendChild(languages);
      cardBody.appendChild(location);
      card.appendChild(image);
      card.appendChild(cardBody);
      col.appendChild(card);
      cardContainer.appendChild(col);
    });
  });

{
  /* <div class="col">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>

                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div> */
}
