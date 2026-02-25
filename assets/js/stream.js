async function loadStream(id) {
  const app = document.getElementById("app");
  app.innerHTML = "Loading...";

  const detail = await getDetail(id);
  const drama = detail;

  saveHistory(drama);

  app.innerHTML = `
    <div class="fade-in">

      <div class="w-full aspect-video bg-black rounded-xl mb-4">
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          class="w-full h-full rounded-xl"
          allowfullscreen></iframe>
      </div>

      <h2 class="text-xl font-bold mb-2">${drama.book_name}</h2>
      <p class="text-sm text-gray-500 mb-2">Episode: ${drama.serial_count}</p>
      <p class="text-sm">${drama.abstract}</p>

    </div>
  `;
}