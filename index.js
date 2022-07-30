function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const toTopButton = document.querySelector("#totop");

toTopButton.addEventListener("click", () => {
  document.documentElement.scrollTop = document.body.scrollTop = 0;
});

function scrollListener(e) {
  const appearWhenScrolledThisMuch = convertRemToPixels(7);

  const scrollAmount =
    document.documentElement.scrollTop || document.body.scrollTop;

  console.log(scrollAmount, appearWhenScrolledThisMuch);

  if (scrollAmount > appearWhenScrolledThisMuch) {
    toTopButton.classList.add("appear");
  } else {
    toTopButton.classList.remove("appear");
  }
}

document.addEventListener("scroll", scrollListener);
