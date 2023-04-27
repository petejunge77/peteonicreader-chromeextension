try{
    chrome.tabs.onUpdated.addListener(function(tabId,changeinfo,tab){
        if (changeinfo.status == 'complete'){
            chrome.scripting.executeScript({
                files:["script.js"],
                target: {tabId:tab.id}
            })
        }
    });
}catch(error){
    console.log(error);
}