const apikey="AIzaSyAW-zQvjJViksupPobdcgFkwAn3uVBW1gM"

async function callApi(searchval){
    
    //const url="https://www.googleapis.com/youtube/v3/search?key="+apikey+"&type=video&part=snippet&maxResults=50&q="+searchval;
    //console.log(url);
    const url="https://udaykumar012.github.io/Advance_Training/DOM_youtube_task/staticJson.txt" //for static Json file
    await fetch(url) 
        .then(response=>response.json())
        .then(d=>{data=d})
        .catch(err=>console.log(err));
        //console.log(data)
    videocontainer=document.createElement('div');
    videocontainer.setAttribute('class','videocontainer')
    Main.appendChild(videocontainer);
    for(var i=0;i<data.items.length;i++){
        video=document.createElement('div');
        video.setAttribute('class','video');
        videocontainer.appendChild(video);
        videoimgdiv=document.createElement("div");
        video.appendChild(videoimgdiv);
        videoimg=document.createElement('img');
        imgurl=data.items[i].snippet.thumbnails.high.url;
        //console.log(imgurl);
        videoimg.setAttribute('src',imgurl);
        videoimg.setAttribute('class',"videosnap")
        videoimgdiv.appendChild(videoimg);
        videodescdiv=document.createElement("div");
        video.appendChild(videodescdiv);

        list_ul=document.createElement("ul");
        videodescdiv.appendChild(list_ul);
        tilte_li=document.createElement('li');
        tilte_li.setAttribute("class","Title");
        videourl=document.createElement("a");
        var youtubeurl="https://www.youtube.com/watch?v="+data.items[i].id.videoId;
        
        videourl.setAttribute("href",youtubeurl);
        videourl.innerHTML=data.items[i].snippet.title;
        publishedtime_li=document.createElement('li');
        publishedtime_li.setAttribute("class","publishTime");
        publishedtime_li.innerHTML=data.items[i].snippet.publishTime;
        tilte_li.appendChild(videourl);
        //console.log(data.items[i].snippet.publishTime)
        channeltitle_li=document.createElement('li');
        channeltitle_li .setAttribute("class","channelTitle");
        channeltitle_li .innerHTML=data.items[i].snippet.channelTitle;
        description_li=document.createElement('li');
        description_li .setAttribute("class","description");
        description_li.innerHTML=data.items[i].snippet.description;
        list_ul.appendChild(tilte_li);
        list_ul.appendChild(publishedtime_li);
        list_ul.appendChild(channeltitle_li);
        list_ul.appendChild(description_li);
    }
    
        
    /*var playlist=document.createElement('div');
        playlist.setAttribute('class','videolist');
        playlist.innerHTML=searchval;
        Main.appendChild(playlist);
    */
       
    
    
}