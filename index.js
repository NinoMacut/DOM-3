function check(){
    if (document.getElementById("cb1").checked == true) {
        document.getElementById("prvi").innerHTML = window.innerHeight;
    }
    else if (document.getElementById("cb1").checked == false) {
        document.getElementById("prvi").innerHTML = 'Inner Height'
    }
    if (document.getElementById("cb2").checked == true) {
        document.getElementById("drugi").innerHTML = window.innerWidth;
    }
    else if (document.getElementById("cb2").checked == false) {
        document.getElementById("drugi").innerHTML = 'Inner Width'
    }
}

function openW3S(){
    var x = window.open("https://www.skole.hr/","_blank","width = 200, height = 200")
}

function closeW3S(){
    x.close()
}

function checkScreen(){
    if (document.getElementById("cb3").checked == true) {
        document.getElementById("treci").innerHTML = screen.width;
    }
    if (document.getElementById("cb4").checked == true) {
        document.getElementById("cetvrti").innerHTML = screen.height;
    }
    if (document.getElementById("cb5").checked == true) {
        document.getElementById("peti").innerHTML = screen.availWidth;
    }
    if (document.getElementById("cb6").checked == true) {
        document.getElementById("sesti").innerHTML = screen.availHeight;
    }
}
var prozor = {
    urlic:window.location.href,
    imehosta:window.location.hostname,
    imeputanje:window.location.pathname,
    protokol:window.location.protocol,
}

function ispis(){
    var stringic = 'URL: ' + prozor.urlic + '<br>Ime Hosta: ' + prozor.imehosta + '<br>Ime Putanje: ' + prozor.imeputanje + '<br>Protokol: ' + prozor.protokol;
    document.getElementById("sedmi").innerHTML = stringic;
}

document.getElementById("submit").addEventListener("click", check);
document.getElementById("open").addEventListener("click", openW3S);
document.getElementById("close").addEventListener("click", closeW3S);
document.getElementById("submit2").addEventListener("click", checkScreen);
document.getElementById("submit3").addEventListener("click", ispis);