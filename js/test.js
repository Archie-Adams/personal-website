function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function animateIcon() {
  for (let i = 1; i < 4; i++) {
    console.log("potato");
    await delay(1000);
  }
  await delay(5000);
}

window.onload = function () {
  animateIcon();
};