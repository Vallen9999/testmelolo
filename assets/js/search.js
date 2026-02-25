const Search = {
render(){
  const app = document.getElementById('app');
  app.innerHTML = `
  <input id="q" class="w-full p-3 rounded-xl shadow mb-4" placeholder="Search drama..."/>
  <div id="result" class="grid grid-cols-2 md:grid-cols-4 gap-4"></div>`;

  document.getElementById('q').addEventListener('keyup', async(e)=>{
    const data = await API.search(e.target.value);
    const r = document.getElementById('result');
    r.innerHTML='';
    data.data.forEach(item=>{
      r.innerHTML += `
      <div class="card p-2 cursor-pointer" onclick="router.navigate('stream','${item.book_id}')">
        <img src="${item.cover}" class="rounded-lg"/>
        <h3 class="text-sm font-semibold">${item.title}</h3>
      </div>`;
    });
  });
}
};