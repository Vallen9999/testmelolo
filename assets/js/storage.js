function saveHistory(drama){
  let history = JSON.parse(localStorage.getItem("history")) || [];
  history = history.filter(d=>d.book_id!==drama.book_id);
  history.unshift(drama);
  localStorage.setItem("history", JSON.stringify(history));
}

function getHistory(){
  return JSON.parse(localStorage.getItem("history")) || [];
}

function toggleFavorite(drama){
  let fav = JSON.parse(localStorage.getItem("favorite")) || [];
  const exist = fav.find(d=>d.book_id===drama.book_id);
  if(exist) fav = fav.filter(d=>d.book_id!==drama.book_id);
  else fav.push(drama);
  localStorage.setItem("favorite", JSON.stringify(fav));
}

function getFavorite(){
  return JSON.parse(localStorage.getItem("favorite")) || [];
}