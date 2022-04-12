const apikey="AIzaSyBp4aqwVyI9jZ8oVPUxW3KTCWpEL7nYkLE";

async function callApi(searchval){
    
    const url="https://www.googleapis.com/youtube/v3/search?key="+apikey+"&type=video&part=snippet&maxResults=15&q="+searchval;
    //console.log(url);
    await fetch(url) 
        .then(response=>response.json())
        .then(d=>{data=d})
        .catch(err=>console.log(err));
        //console.log(data)
    for(var i=0;i<data.items.length;i++){
        var playlistimg=document.createElement('img');
        var playlistimgsrc=data.items[i].snippet.thumbnails.high.url;
        console.log(playlistimgsrc);
        playlistimg.setAttribute('src',playlistimgsrc);
        playlistimg.setAttribute('class','images');
       Main.appendChild(playlistimg);
    }
    
        
    /*var playlist=document.createElement('div');
        playlist.setAttribute('class','videolist');
        playlist.innerHTML=searchval;
        Main.appendChild(playlist);
    */
       
    
    
}