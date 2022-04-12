/*var test="hello";
console.log(test);*/
//loading css dynamically
var head  = document.getElementsByTagName('head')[0];
const linkcss  = document.createElement('link');
    linkcss.setAttribute('rel', 'stylesheet');
    linkcss.setAttribute('type', 'text/css');
    linkcss.setAttribute('href', 'Htmldesignpage.css');
head.appendChild(linkcss)

//header containing logo...
const header=document.createElement("header");
const logo = document.createElement("IMG");
logo.setAttribute("src", "logo.jpg");
logo.setAttribute("id", "logo");
logo.setAttribute("alt", "logo image");
document.body.appendChild(header);
header.appendChild(logo);

//body content
const Main=document.createElement('main');
document.body.appendChild(Main);
const searchform=document.createElement('form');
searchform.setAttribute('name',"searchformbox");
searchform.setAttribute('id',"searchformid");
searchform.setAttribute('method',"post");
searchform.setAttribute('action',"");

const searchbox=document.createElement('input')
searchbox.setAttribute('type','text');
searchbox.setAttribute('name','searchbox');
searchbox.setAttribute('id','search');
searchbox.setAttribute('autocomplete','off');
searchbox.setAttribute('placeholder','Search');
const searchbutton=document.createElement('button');
searchbutton.setAttribute('type','submit');
searchbutton.setAttribute('id','searchbutton');
searchbutton.innerHTML="search";

searchform.addEventListener("submit",SearchVideo);

    function SearchVideo(e){
        //console.log("searching..") //test
        e.preventDefault()
        var searchval=document.searchformbox.searchbox.value.trim();
        if(searchval==""){
            alert("please search....")
        }
        else{
         const data=callApi(searchval);
        }
    }


searchform.appendChild(searchbox);
searchform.appendChild(searchbutton);
Main.appendChild(searchform);

//footer
const footer=document.createElement("footer");
footer.innerHTML="Youtube@2022";
document.body.appendChild(footer);
