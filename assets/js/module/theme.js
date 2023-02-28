export default function theme(){
    const inSwitch = document.querySelector("#inSwitch")
    const rootElement = document.documentElement
    window.onload = getThemeFromLocaleStorage
    const lightTheme = {
      "--bg-header": "var(--green-700)",
      "--bg-body": "var(--gray-200)",
      "--text-color": "var(--blue-700)",
      "--card-bg": "var(--white)",
      "--card-bg-total": "var(--green-400)",
      "--bg-table-content": "var(--white)",
    }
    const darkTheme = {
      "--bg-header": "var(--gray-800)",
      "--bg-body": "var(--gray-600)",
      "--text-color": "var(--gray-100)",
      "--card-bg": "var(--gray-900)",
      "--card-bg-total": "var(--green-200)",
      "--bg-table-content": "var(--gray-900)",
    }
    function changeTheme(theme) {
      for (let prop in theme) {
        changeProperty(prop, theme[prop])
      }
      saveThemeToLocaleStorage(theme)
    }
    function changeProperty(property, value) {
      rootElement.style.setProperty(property, value)
    }
    function saveThemeToLocaleStorage(theme) {
      localStorage.setItem("theme", JSON.stringify(theme))
    }
    function getThemeFromLocaleStorage() {
      const theme = JSON.parse(localStorage.getItem("theme"))
      if (isThemeEqual(theme, darkTheme)) inSwitch.checked = true
      changeTheme(theme)
    }
    function isThemeEqual(firstTheme, secondTheme) {
      for (let prop in firstTheme) {
        if (firstTheme[prop] !== secondTheme[prop]) return
        false
      }
      return true
    }
    inSwitch.addEventListener("change", function () {
      const isChecked = inSwitch.checked
      isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
    })
}
