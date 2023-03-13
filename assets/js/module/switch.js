export default function $switch() {
  const $Switch = {
    $header: document.querySelector("[data-header]"),
    createDiv() {
      const div = document.createElement("div");
      div.setAttribute("id", "switch-container");
      $Switch.$header.prepend(div);
      div.innerHTML = $Switch.divContent();
    },
    divContent() {
      const content = `
      <div class="box data-box">
      <span class="circle front">
      </span><span class="circle back"></span></div>`;
      return content;
    },
  };
  $Switch.createDiv();
}
