const body = document.querySelector(".profile-picture-display-button");

let profilePictureActive = false;

const monkeyPictures = [
  "images/baby monkey.jpeg",
  "images/angry monkey.jpeg",
  "images/blowing kiss.jpg",
  "images/monkey lying.jpg",
  "images/monkey picture.jpg",
  "images/naughty monkey.jpeg",
];

const arrayOfUsedIndexes = [];

const profilePictureDisplayButton = document.querySelector(".profile-picture-display-button");
body.addEventListener('click', (event) => {
  function randomizedIndex() {
    const tempIndex = Math.floor(Math.random() * monkeyPictures.length);
    if (!arrayOfUsedIndexes.includes(tempIndex)) {
      arrayOfUsedIndexes.push(tempIndex);
      return tempIndex;
    }
    return randomizedIndex();
  }
  const randomIndex = randomizedIndex();

  // const randomIndex = Math.floor(Math.random() * monkeyPictures.length);
  const profilePicture = document.createElement("img");
  profilePicture.src = monkeyPictures[randomIndex];
  profilePicture.classList.add("profile-picture");
  if (!profilePictureActive) {
    profilePictureActive = true;
    profilePictureDisplayButton.after(profilePicture);
  } else {
    const currentPicture = document.querySelector(".profile-picture");
    currentPicture.remove();
    profilePictureDisplayButton.after(profilePicture);
  }

  if (arrayOfUsedIndexes.length === monkeyPictures.length) {
    arrayOfUsedIndexes.length = 0;
  }
});
