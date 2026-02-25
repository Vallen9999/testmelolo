function loadHistory(){
  const app = document.getElementById("app");
  const history = getHistory();

  app.innerHTML = `
    <h2 class="text-lg font-bold mb-4">History</h2>
    ${history.map(d=>`
      <div class="card flex gap-3 p-2 mb-3 cursor-pointer"
        onclick="navigate('stream','${d.book_id}')">
        <img src="${d.thumb_url}" class="w-20 rounded-lg">
        <div>
          <h3 class="font-semibold">${d.book_name}</h3>
        </div>
      </div>
    `).join("")}
  `;
}