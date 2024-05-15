const API_URL = "https://picsum.photos/v2/list";
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    const gallery = document.getElementById("gallery");

    data.forEach((image) => {
      // card element
      const card = document.createElement("div");
      card.classList.add("myCard");

      // image element
      const img = document.createElement("img");
      img.src = image.download_url;
      img.alt = `Image ${image.id}`;
      card.appendChild(img);

      // author name
      const authorInfo = document.createElement("p");
      authorInfo.textContent = `Author: ${image.author}`;
      card.appendChild(authorInfo);

      gallery.appendChild(card);
    });
  })
  .catch((error) => console.error("Error fetching images:", error));
