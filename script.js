const URL =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.cards");
let para = document.createElement("p");

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    let business = jsObject.business;
    for (let i = 0; i < business.length; i++) {
      console.log(business[i].name);
      // You must include your javascript below to display the following information:
      // 1. business names, 2.business image,
      // 3. business locations, 4. business descriptions
      // Here is an example for the name to start you off.

      // Creates card and places business name in h2 element
      let card = document.createElement("div");
      let imgContainer = document.createElement("div");
      // Adds a classname to the section element above
      card.className = "card";
      imgContainer.className = "imgContainer";

      let img = document.createElement("img");
      let h2 = document.createElement("h2");
      let pAdd = document.createElement("p");
      let pDisc = document.createElement("p");

      img.src = business[i].imageurl;
      h2.textContent = business[i].name;
      pAdd.textContent = business[i].address;
      pDisc.textContent = business[i].description;

      imgContainer.appendChild(img);

      card.appendChild(imgContainer);
      card.appendChild(h2);
      card.appendChild(pAdd);
      card.appendChild(pDisc);
      document.querySelector("div.cards").appendChild(card);

      // Create the image location, you can look up how to add image using javascript

      // Include a business location

      // Include a business Description
    }
  });