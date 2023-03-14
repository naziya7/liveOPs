const BASE_URL = 'http://localhost:8080';

async function login(username, password) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  return data;
}

async function logout() {
  const response = await fetch(`${BASE_URL}/logout`, {
    method: 'POST',
  });
  const data = await response.json();
  return data;
}

export { login, logout };
