const inSwitch = document.querySelector("#inSwitch");
const rootElement = document.documentElement;
window.onload = getThemeFromLocaleStorage
const lightTheme = {
  "--bg-header": "var(--green-700)",
  "--bg-color": "var(--gray-200)",
  "--text-color": "var(--gray-700)",
};
const darkTheme = {
  "--bg-header": "var(--gray-800)",
  "--bg-color": "var(--gray-900)",
  "--text-color": "var(--gray-700)",
}
function changeTheme(theme){
  for(let prop in theme){
    changeProperty(prop, theme[prop])
  }
saveThemeToLocaleStorage(theme);
};
function changeProperty(property, value){
  rootElement.style.setProperty(property, value)
}
function saveThemeToLocaleStorage(theme){
  localStorage.setItem("theme", JSON.stringify(theme));
}
function getThemeFromLocaleStorage(){
  const theme = JSON.parse(localStorage.getItem("theme"));
 if (isThemeEqual(theme, darkTheme)) inSwitch.checked = true;
   changeTheme(theme)
 
}
function isThemeEqual(firstTheme, secondTheme){
for (let prop in firstTheme){
if(firstTheme[prop]!== secondTheme[prop]) return
false}
return true
}

inSwitch.addEventListener("change", function () {
  const isChecked = inSwitch.checked;
    isChecked? changeTheme(darkTheme):changeTheme(lightTheme)
})
