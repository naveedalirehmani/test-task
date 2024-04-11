document.getElementById("all-pages").addEventListener("change", function () {
  const checkboxes = document.querySelectorAll(".page");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = this.checked;
  }
});

const individualCheckboxes = document.querySelectorAll(".page");
for (let i = 0; i < individualCheckboxes.length; i++) {
  individualCheckboxes[i].addEventListener("change", function () {
    let allChecked = true;
    for (let i = 0; i < individualCheckboxes.length; i++) {
      if (!individualCheckboxes[i].checked) {
        allChecked = false;
        break;
      }
    }
    document.getElementById("all-pages").checked = allChecked;
  });
}

document.getElementById("done-button").addEventListener("click", function () {
  alert("Done button clicked!");
});
