document.addEventListener('DOMContentLoaded', function () {
  let options = document.getElementById('feeds');
  options?.addEventListener('click', () => chrome.runtime.openOptionsPage());
});
