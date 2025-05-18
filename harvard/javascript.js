localStorage.getItem("username")
  ? ""
  : (window.location.href = "../sign-in/");


  document.getElementById("logout").addEventListener("click", ()=>{
    localStorage.removeItem("username")
    window.location.href = "./"
  })


const API =
  "https://api.harvardartmuseums.org/object?apikey=8cf5f98c-55ec-4ed7-83ca-402c334a5697";

fetch(API)
  .then((response) => response.json())
  .then((data) => {
    data.records.forEach((record) => {
        console.log(record);
        
      let container = document.createElement("div");
      container.className =
        "d-flex h-100 text-center justify-content-center my-5";
        console.log(record.primaryimageurl);
        
      container.style.backgroundImage = `url(${record.primaryimageurl})`;
      container.style.backgroundSize = "cover"

      let flexContainer = document.createElement("div");
      flexContainer.className =
        "px-3 vh-100 d-flex flex-column justify-content-center align-items-center w-75";

      let title = document.createElement("h1");
      title.textContent = record.title

      let description = document.createElement("p");
      description.className = "lead";

      let dated = document.createElement("p");
      dated.textContent = record.century
      dated.className = "lead";
      
      let people = document.createElement("p");
      people.textContent = record.people[0].displayname
      dated.className = "lead";

      flexContainer.appendChild(title)
      flexContainer.appendChild(description)
      flexContainer.appendChild(dated)
      flexContainer.appendChild(people)
      container.appendChild(flexContainer)

      document.body.appendChild(container)


      

    });
  });

// <div class="d-flex h-100 text-center justify-content-center text-bg-dark">
//       <div class="px-3 vh-100 d-flex flex-column justify-content-center align-items-center w-75">
//         <h1>Cover your page.</h1>
//         <p class="lead">
//           Cover is a one-page template for building simple and beautiful home
//           pages. Download, edit the text, and add your own fullscreen background
//           photo to make it your own.
//         </p>
//         <p class="lead">
//           <a
//             href="#"
//             class="btn btn-lg btn-secondary fw-bold border-white bg-white"
//             >Learn more</a
//           >
//         </p>
//       </div>
//     </div>
