function navigate(page, param=null) {
  document.querySelectorAll(".nav-btn").forEach(btn=>btn.classList.remove("active"));
  event?.currentTarget?.classList.add("active");

  if(page==="home") loadHome();
  if(page==="search") loadSearch();
  if(page==="history") loadHistory();
  if(page==="favorite") loadFavorite();
  if(page==="profile") loadProfile();
  if(page==="stream") loadStream(param);
}

window.onload = () => loadHome();