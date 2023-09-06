const usersInner = document.querySelector(".users-inner");

const URL = "https://jsonplaceholder.typicode.com/users";

async function getUser(URL) {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    renderUser(data);
  } catch (error) {
    console.log(error);
  }
}

getUser(URL);

const fragment = document.createDocumentFragment();

function renderUser(arr) {
  arr.slice(0, 9).forEach((element) => {
    const usersWrapper = document.createElement("div");
    usersWrapper.classList.add("users-wrapper");

    const cardTop = document.createElement("div");
    cardTop.classList.add("card-top");

    const cardBottom = document.createElement("div");
    cardBottom.classList.add("card-bottom");

    const cardAvatar = document.createElement("div");
    cardAvatar.classList.add("card-avatar");

    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img");
    cardImg.setAttribute("src", "user.jpg");
    cardImg.setAttribute("alt", "user-image");

    const cardContent = document.createElement("div");
    cardContent.classList.add("class-content");

    const cardName = document.createElement("h2");
    cardName.classList.add("card-name");
    cardName.textContent = element.name;

    const cardNumber = document.createElement("p");
    cardNumber.classList.add("card-number");
    cardNumber.textContent = element.id;

    const cardContact = document.createElement("div");
    cardContact.classList.add("card-contact");

    const email = document.createElement("a");
    email.classList.add("email", "contact-item");
    email.setAttribute("href", `mailto:${element.email}`);

    const phone = document.createElement("a");
    phone.classList.add("phone", "contact-item");
    phone.setAttribute("href", `tel:${element.phone}`);

    const website = document.createElement("a");
    website.classList.add("website", "contact-item");
    website.setAttribute("href", `https://${element.website}`);
    website.setAttribute("target", "_blank");

    const address = document.createElement("a");
    address.classList.add("address", "contact-item");
    address.setAttribute(
      "href",
      `https://www.google.com/maps/place/${element.address.geo.lat},${element.address.geo.lng}`,
    );

    const cardLocation = document.createElement("div");
    cardLocation.classList.add("card-location");

    const cardGeo = document.createElement("p");
    cardGeo.classList.add("card-geo");
    cardGeo.textContent = "Address: ";

    const cardBox = document.createElement("div");
    cardBox.classList.add("card-box");

    const cardStreet = document.createElement("p");
    cardStreet.classList.add("card-street");
    cardStreet.textContent = `Street: ${element.address.street}`;

    const cardSuite = document.createElement("p");
    cardSuite.classList.add("card-suite");
    cardSuite.textContent = `Suite: ${element.address.suite}`;

    const cardCity = document.createElement("p");
    cardCity.classList.add("card-city");
    cardCity.textContent = `City: ${element.address.city}`;

    const cardZipcode = document.createElement("p");
    cardZipcode.classList.add("card-zipcode");
    cardZipcode.textContent = `Zipcode: ${element.address.zipcode}`;

    cardBox.append(cardStreet, cardSuite, cardCity, cardZipcode);
    cardLocation.append(cardGeo, cardBox);
    cardContact.append(email, phone, website, address);
    cardContent.append(cardName, cardNumber);
    cardAvatar.append(cardImg);
    cardBottom.append(cardAvatar, cardContent, cardContact, cardLocation);
    usersWrapper.append(cardTop, cardBottom);
    fragment.append(usersWrapper);
    usersInner.append(fragment);
  });
}
