const pinButton = document.getElementById('pinButton');
const pinState = document.getElementById('pinState');

async function refreshPinLabel() {
  const pinned = await window.api.getPin();
  pinState.textContent = pinned ? 'PINNED' : 'UNPINNED';
  pinState.classList.toggle('unpinned', !pinned);
}

pinButton.addEventListener('click', async () => {
  await window.api.togglePin();
  refreshPinLabel();
});

window.api.onPinState(() => refreshPinLabel());
refreshPinLabel();
