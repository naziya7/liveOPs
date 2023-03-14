const BASE_URL = 'http://localhost:8080';

async function getOffers() {
  const response = await fetch(`${BASE_URL}/offers`);
  const data = await response.json();
  return data;
}

async function createOffer(offer) {
  const response = await fetch(`${BASE_URL}/offers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(offer),
  });
  const data = await response.json();
  return data;
}

async function updateOffer(id, offer) {
  const response = await fetch(`${BASE_URL}/offers/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(offer),
  });
  const data = await response.json();
  return data;
}

async function deleteOffer(id) {
  const response = await fetch(`${BASE_URL}/offers/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

export { getOffers, createOffer, updateOffer, deleteOffer };
