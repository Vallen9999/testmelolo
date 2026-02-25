function loadFavorite(){
  const app = document.getElementById("app");
  const fav = getFavorite();

  app.innerHTML = `
    <h2 class="text-lg font-bold mb-4">Favorit</h2>
    ${fav.map(d=>`
      <div class="card flex gap-3 p-2 mb-3">
        <img src="${d.thumb_url}" class="w-20 rounded-lg">
        <div class="flex-1">
          <h3 class="font-semibold">${d.book_name}</h3>
        </div>
      </div>
    `).join("")}
  `;
}