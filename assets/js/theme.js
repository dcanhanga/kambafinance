const switchContainer = document.querySelector("#switch-container");
const $body = document.querySelector("body");
const darkTheme = "dark";
const lightTheme = "light";
const events = ["click", "touchstart"];
function toggleTheme(event) {
  event.preventDefault();
  if ($body.classList.contains(darkTheme)) {
    $body.classList.remove(darkTheme);
    $body.classList.add(lightTheme);
    switchContainer.setAttribute(
      "title",
      `alterar o tema para o modo ${darkTheme}`
    );
    localStorage.setItem("theme", lightTheme);
    localStorage.setItem("title", darkTheme);
  } else {
    $body.classList.remove(lightTheme);
    $body.classList.add(darkTheme);
    switchContainer.setAttribute(
      "title",
      `alterar o tema para o modo ${lightTheme}`
    );
    localStorage.setItem("theme", darkTheme);
    localStorage.setItem("title", lightTheme);
  }
}
events.forEach((userEvent) => {
  switchContainer.addEventListener(userEvent, toggleTheme);
});

function setDefaultTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === darkTheme) {
    $body.classList.add(darkTheme);
    switchContainer.setAttribute(
      "title",
      `alterar o tema para o modo ${lightTheme}`
    );
  } else if (savedTheme === lightTheme) {
    $body.classList.add(lightTheme);
    switchContainer.setAttribute(
      "title",
      `alterar o tema para o modo ${darkTheme}`
    );
  } else {
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
      $body.classList.add(darkTheme);
    } else {
      $body.classList.add(lightTheme);
    }
  }
}
setDefaultTheme();
