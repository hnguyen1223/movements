chrome.runtime.onMessage.addListener(async (message, sender, _) => {
  if (
    sender.id === 'jfdabaghnemjmlfomcebphkbmnfpmbbi' &&
    !document.querySelector('me-mapping-creator')
  )
    insertCustomElement();
});

function insertCustomElement() {
  let mappingCreator = document.createElement('script');
  mappingCreator.type = 'text/javascript';
  mappingCreator.src = chrome.runtime.getURL('mappingCreator.js');
  mappingCreator.onload = function () {
    mappingCreator.parentNode?.removeChild(mappingCreator);
  };
  try {
    (document.head || document.documentElement).appendChild(mappingCreator);
    let customElement = document.createElement('me-mapping-creator');
    document.body.appendChild(customElement);
    document.body.style.marginTop = '84px';
  } catch (e) {
    console.log(e);
  }
}
