
function bulidSaveArray(){
    var saveArray = [];
    saveOptions(saveArray)

}
// Saves options to chrome.storage
function saveOptions(saveArray){


  chrome.storage.sync.set({
    keywordsArray: saveArray
    }, function() {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions(){
    chrome.storage.sync.get({
        keywordsArray: []
    }, function(item){
        bulidoptsDisplay(items.keywordsArray);
    });

};

function bulidoptsDisplay(items){
    for(var i = 0; i < items.length; i++){
        
    }
}

function createRowwithoptions(obj){
    var keywords = document.querySelector('.keyword-row').innerHTML;
    // document.querySelector('.keyword-holder').innerHTML += keywords;
    var newrow = document.createElement('div');
    newrow.className = 'keyword-row';
    newrow.dataset.id = Date.now();
    newrow.innerHTML = keywords;
    document.querySelector('.keyword-holder').appendChild(newrow);

    var newele = document.querySelector('.keyword-holder .keyword-row[data-id="'+timestamp+'"]')
    newele.querySelector('.keyword input').value = obj.keyword;
    newele.querySelector('type select').value = obj.type;
    if (obj.type == '1'){
        newele.querySelector('.replace').style.display='block';
        newele.querySelector('.replace input').style.display= obj.replace;
    }
    newele.querySelector('.type').style.
}

document.querySelector('.Bionic').addEventListener('click', function())

//add more listener to the keyword adder 
document.querySelector('.add-keyword').addEventListener('click', function(){
    var obj ={};
    obj.keywords = 'example';
    obj.type = '1';
    obj.replace = 'string';
    createRowwithoptions(obj)
});


document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', bulidSaveArray);