chrome.runtime.onInstalled.addListener(() => {
  // chrome.storage.sync.set({ color: '#3aa757' });

  // chrome.webRequest.onHeadersReceived.addListener(
  //   (details) => {
  //     console.log('hre')
  //     return ({
  //       responseHeaders: [
  //         ...(details.responseHeaders ?? []),
  //         { name: 'access-control-allow-methods', value: 'GET' },
  //         { name: 'access-control-allow-origin', value: details.url },
  //       ],
  //     })
  //   },
  //   {
  //     urls: ['https://*/*'],
  //   },
  //   ['blocking', 'responseHeaders', 'extraHeaders']
  // );
});
