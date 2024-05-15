document.getElementById("generateBtn").addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 1085); // Generating random number from 0 to 1084
  const apiUrl = `https://picsum.photos/id/${randomNumber}/info`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const pictureContainer = document.getElementById("pictureContainer");
      pictureContainer.innerHTML = "";

      // Creating card
      const card = document.createElement("div");
      card.classList.add("myCard");

      const img = document.createElement("img");
      img.src = data.download_url;
      img.alt = `Image ${data.id}`;
      card.appendChild(img);

      const authorInfo = document.createElement("p");
      authorInfo.textContent = `Author: ${data.author}`;
      card.appendChild(authorInfo);

      // Append card to picture container
      pictureContainer.appendChild(card);
    })
    .catch((error) => console.error("Error fetching image:", error));
});
