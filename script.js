let Data = {"Title": "", "URL": ""}

// 引数=>{...関数の本体...}
chrome.tabs.getSelected(tab=>{
    Data.Title = tab.title;
    Data.URL = tab.url;
    console.log(`Title: ${Data.Title}`);
    console.log(`URL: ${Data.URL}`);
})

document.getElementById("send").onclick = function() {
    // ファイルを選択する
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const fileContents = await file.text();
    
    // ファイルへの書き込み
    const writable = await fileHandle.createWritable();
    await writable.write(content);
    await writable.close();
}