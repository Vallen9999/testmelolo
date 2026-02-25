async function fetchAPI(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    if (!res.ok) throw new Error("API Error");
    return await res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return {};
  }
}

function getLatest() {
  return fetchAPI("/latest");
}

function getTrending() {
  return fetchAPI("/trending");
}

function searchDrama(query) {
  return fetchAPI(`/search?query=${encodeURIComponent(query)}`);
}

function getDetail(id) {
  return fetchAPI(`/detail/${id}`);
}

function getStream(id) {
  return fetchAPI(`/stream/${id}`);
}