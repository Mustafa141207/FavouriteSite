var btnSubmit = document.getElementById("btnSubmit");
var siteName = document.querySelector('#site');
var siteurl = document.querySelector("#url");
var closeBtn = document.querySelector('#closeBtn');
var box = document.querySelector('#alertBox')
var sitesContainer = [];
var visitBtn = document.querySelector('#visit');
var regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
var right=document.querySelector('#right')
siteurl.addEventListener('keyup', function () {
    if (regex.test(siteurl.value) === true) {
         console.log('right')
    }
    else {
        console.log('false')
    }
 })
function addSites() {
    if (regex.test(siteurl.value) === true) {
      
      var sites = {
        Sname: siteName.value,
        Surl: siteurl.value,
      };
      sitesContainer.push(sites);
      localStorage.setItem("sites", JSON.stringify(sitesContainer));
      displaySites(sitesContainer);
      clear();
    }
    else if (regex.test(siteurl.value) ===false) {
        open();
    }
}
btnSubmit.addEventListener('click', function () {
    addSites();
})
function displaySites(arr) {
 cartona = '';
    for (var i = 0; i < sitesContainer.length; i++){
        var cartona;
        cartona += `
          <tr>
          <td> ${i+1}</td>
                    <td>${sitesContainer[i].Sname}</td>        
                    <td>${sitesContainer[i].Surl}</td>
                    <td> <button id="visit" class="btn btn-success text-white"> <a target="blank" href="${sitesContainer[i].Surl}">Visit</a> </button></td>
                    <td> <button id="delete" onclick="delet(${i})" class="btn btn btn-danger">delete</button></td>
                </tr>
        `;
    }
    document.getElementById('tBody').innerHTML = cartona;
}
function clear() {
    siteName.value = '';
    siteurl.value = '';
    
}
function delet(dNumber) {
    sitesContainer.splice(dNumber, 1);
     localStorage.setItem("sites", JSON.stringify(sitesContainer));
    displaySites(sitesContainer);
}
function close() {
  box.classList.replace("d-flex", "d-none");
}
function open() {
    box.classList.replace('d-none','d-flex')
}
closeBtn.addEventListener('click', function () {
    close()
})
document.addEventListener('keydown', function (ex) {
    if (ex.key === 'Escape') {
        close();
    }
})
//   right.classList.replace("d-none", "d-block");
//  