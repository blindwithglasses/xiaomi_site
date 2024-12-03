// 轮换
var flower =document.getElementById('banner');
var nextBtn=document.getElementById('next');
var prevBtn=document.getElementById('prev');
var minIndex=1,maxIndex=5,currentIndex=minIndex;
nextBtn.onclick=function(){
    
    if(currentIndex===maxIndex){
        currentIndex=minIndex;
    }
    else{
        currentIndex++;
    }
    carousel(currentIndex);
}
prevBtn.onclick=function(){
    
    if(currentIndex===minIndex){
        currentIndex=maxIndex;
    }
    else{
        currentIndex--;
    }
    carousel(currentIndex);
}
function carousel(currentIndex){
    let imgSrc =`images/banner${currentIndex}.jpg`;
    document.getElementById("banner").src = imgSrc;
}
const intervalID = setInterval(nextBtn.onclick,2000);


// 关闭广告
var closeBtn=document.getElementById("close");
var img=document.getElementsByClassName("code");
closeBtn.onclick=function(){
    img[0].style.display='none';
}