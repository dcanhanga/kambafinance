export default function $Switch() {
  const $Switch = {
    $header: document.querySelector("#header"),
    createDiv() {
      const div = document.createElement("div")
      div.setAttribute("id", "switch-container")
      $Switch.$header.prepend(div)
      div.innerHTML = $Switch.divContent()
    },
    divContent() {
      const content = `
      <input type="checkbox"  id="inSwitch">
        <label for="inSwitch"><span class="circle"></span></label>
      `
      return content
    },
  }
  $Switch.createDiv()
}
  