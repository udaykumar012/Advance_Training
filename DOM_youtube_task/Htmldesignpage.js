
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

   async function SearchVideo(e){
        //console.log("searching..") //test
        e.preventDefault()
        var searchval=document.searchformbox.searchbox.value.trim();
        var deleteDiv = document.getElementById("videosId");
        while(deleteDiv.firstChild){
            deleteDiv.removeChild(deleteDiv.firstChild);
        }
        while(Pagenation.firstChild){
            Pagenation.removeChild(Pagenation.firstChild);
        }
        if(searchval==""){
            alert("please search....")
            return false;
        }
        else{
            console.log("hii");
            fetchingFromAPI("",searchval);
        }
    }
    

searchform.appendChild(searchbox);
searchform.appendChild(searchbutton);
Main.appendChild(searchform);

videocontainer=document.createElement('div');
    videocontainer.setAttribute('class','videocontainer')
    videocontainer.setAttribute('id','videosId')
    Main.appendChild(videocontainer);
    
Pagenation=document.createElement('div');
Pagenation.setAttribute('class','prev-next');
Main.appendChild(Pagenation)

//footer
const footer=document.createElement("footer");
footer.setAttribute("id","youtubefooter")
footer.innerHTML="<div>Youtube@2022</div>";
document.body.appendChild(footer);
