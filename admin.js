let categories = [];

function addCategory() {
  const name = document.getElementById("catName").value.trim();
  const desc = document.getElementById("catDesc").value.trim();
  const image = document.getElementById("catImage").value.trim();

  if (!name || !desc || !image) {
    alert("املأ كل الحقول");
    return;
  }

  categories.push({
    id: Date.now(),
    name: name,
    description: desc,
    image: image
  });

  document.getElementById("catName").value = "";
  document.getElementById("catDesc").value = "";
  document.getElementById("catImage").value = "";

  renderPreview();
  generateJson();
}

function renderPreview() {
  const preview = document.getElementById("preview");
  preview.innerHTML = "";

  categories.forEach(cat => {
    preview.innerHTML += `
      <div class="cat-card">
        <img src="${cat.image}" alt="${cat.name}">
        <div>
          <h3>${cat.name}</h3>
          <p>${cat.description}</p>
        </div>
      </div>
    `;
  });
}

function generateJson() {
  document.getElementById("jsonOutput").value =
    JSON.stringify(categories, null, 2);
}