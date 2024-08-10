function handleMessage(request, sender, sendResponse) {
  console.log(`Message from popup: ${JSON.stringify(request)}`);

  // Forward message to content script
  browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
      if (tabs.length > 0) {
          browser.tabs.sendMessage(tabs[0].id, request).then(response => {
              sendResponse(response);
          }).catch(error => {
              sendResponse({ response: "Error in content script" });
          });
      } else {
          sendResponse({ response: "No active tab found" });
      }
  }).catch(error => {
      sendResponse({ response: "Error querying tabs" });
  });
  
  return true; // Indicates that sendResponse will be called asynchronously
}

// Listen for messages from the popup script
browser.runtime.onMessage.addListener(handleMessage);
