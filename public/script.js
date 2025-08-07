const pinButton = document.getElementById('pinButton');
const panel = document.getElementById('panel');
const apiStatus = document.getElementById('apiStatus');

pinButton.addEventListener('click', () => {
  panel.classList.toggle('unpinned');
});

// Prosta kontrola stanu API (dynamiczny backend)
async function checkApi() {
  try {
    apiStatus.textContent = 'API...';
    const res = await fetch('/api/ping');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    apiStatus.textContent = 'API OK';
    apiStatus.classList.add('ok');
  } catch (e) {
    apiStatus.textContent = 'API ERR';
    apiStatus.classList.add('err');
  }
}

checkApi();
