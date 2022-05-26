function setFavicons(number) {
  var favicons = document.getElementsByClassName("animate-icon-href");
  const reg = /images\/favicon-\d+/;
  for (let element of favicons) {
    let newHref = element.href.replace(reg, "images/favicon-" + number);
    var newElement = element.cloneNode(true);
    newElement.setAttribute("href", newHref);
    element.parentNode.replaceChild(newElement, element);
  }
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function animateIcon() {
  for (let i = 1; i < 3; i++) {
    await delay(1000);
    setFavicons(i);
  }
  await delay(5000);
}

window.onload = function () {
  animateIcon();
};