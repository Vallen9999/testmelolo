async function loadHome() {
  const app = document.getElementById("app");
  app.innerHTML = `<div class="text-center">Loading...</div>`;

  const trending = await getTrending();

  app.innerHTML = `
    <h2 class="text-lg font-bold mb-4">Drama Trending</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 fade-in">
      ${trending.books.map(d=>`
        <div class="card p-2 cursor-pointer"
          onclick="navigate('stream','${d.book_id}')">
          <img src="${d.thumb_url}" class="rounded-lg mb-2">
          <h3 class="text-sm font-semibold">${d.book_name}</h3>
        </div>
      `).join("")}
    </div>
  `;
}