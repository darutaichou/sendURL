let Data = {"Title": "", "URL": ""}

// 引数=>{...関数の本体...}
chrome.tabs.getSelected(tab=>{
    Data.Title = tab.title;
    Data.URL = tab.url;
    console.log(`Title: ${Data.Title}`);
    console.log(`URL: ${Data.URL}`);
})

let handle;

window.addEventListener('load', () => {
    try {
        fileHandle = await window.chooseFileSystemEntries();
    } catch (err) {
        console.error(err.message);
    }
})