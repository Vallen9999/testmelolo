function loadProfile(){
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="card p-6 text-center fade-in">
      <img src="https://i.pravatar.cc/100" class="rounded-full mx-auto mb-3">
      <h2 class="font-bold text-lg">DULU</h2>
      <button class="mt-4 bg-pink-500 text-white px-4 py-2 rounded-xl">
        Edit Profil
      </button>
    </div>
  `;
}