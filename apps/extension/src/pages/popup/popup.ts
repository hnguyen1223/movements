document.addEventListener('DOMContentLoaded', function () {
  let options = document.getElementById('feeds');
  options?.addEventListener('click', () => chrome.runtime.openOptionsPage());
  let mapping = document.getElementById('mapping');
  mapping?.addEventListener('click', () => {
    chrome.tabs
      .query({ active: true, currentWindow: true })
      .then(([tab]) =>
        tab.id
          ? chrome.tabs.sendMessage(tab.id, 'Create Custom Mapping')
          : undefined
      )
      .then((_) => window.close());
  });
});
