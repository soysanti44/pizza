var menulista= [
    "tres-carnes",
    "peperoni",
    "extraqueso",
    "hawuayana",
    "italiana",
    "mexicana"]


function obtener_menu() {
    var html_data="";
    menulista.sort();

    for (let index = 0; index < menulista.length; index++) {
     html_data =html_data + menulista[index]+ "<br>"
        
    }
document.getElementById("display_menu").innerHTML=html_data;
}
function añadir() {
    var html_data;
    var img ='<img src="https://niciaspizza.com/wp-content/uploads/2021/04/pizzeria_14.png" id="im1">'
    var item =document.getElementById("añadir").value
    menulista.sort();
    html_data="";
    for (let i = 0; i < menulista.length; i++) {
    html_data =html_data+img+menulista[i]+"<br>"
        
    }
document.getElementById("display-add-menu").innerHTML=html_data;
}
function añadir_top() {
    var item =document.getElementById("añadir").value
    menulista.push(item);
    añadir();
    
}