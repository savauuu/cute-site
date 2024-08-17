function picSwitch(){
    x=document.getElementById('res').value;
    if (x=='1080p'){
        picPath='url(pics/'+x+'.jpeg)';
        document.getElementById('pic').style.backgroundImage=picPath;
        document.getElementById('pic').style.backgroundSize='cover';    
        document.getElementById('pic').style.height='350px';    
        document.getElementById('pic').style.width='350px';
        document.body.style.backgroundColor='#F5CABF'   

    }else{
        picPath='url(pics/'+x+'.png)';
        document.getElementById('pic').style.backgroundImage=picPath;
        document.getElementById('pic').style.backgroundSize='cover';
        document.getElementById('pic').style.height='200px';    
        document.getElementById('pic').style.width='200px';
        document.body.style.backgroundColor='black'   

    }
}