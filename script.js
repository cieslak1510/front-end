let html_text = document.getElementById("html_p");
let html_b_t = document.getElementById("h_b_r");
let html_b_i = document.getElementById("h_b_l");
let css_b_c = document.getElementById("c_b_l");
let css_b_f = document.getElementById("c_b_r");


function button_listen(){
    html_b_t.addEventListener("click", function(){
        html_text.innerHTML = "Udało ci się zamienić tekst!";
    })
    
    html_b_i.addEventListener("click", function(){
        $('#html').css('background-image', 'url(img/css.png)');
    })
    
    css_b_c.addEventListener('click', function(){
        $('#css').css('background-color', '#101010');
        $('#css').css('color', '#F8F8F8');
    })
    
    css_b_f.addEventListener("click", function(){
        $('#css').css('font-size', '.5rem');
    })
}

window.onload = button_listen();