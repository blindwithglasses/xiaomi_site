// 获取事件源
var bigImg = document.getElementsByClassName("bigImg");
var smallImg = document.getElementsByClassName("smallImag");
for (var i = 0; i < smallImg.length; i++) {
    smallImg[i].onmouseover = function () {
        for(var j=0;j<smallImg.length;j++){
            smallImg[j].parentNode.setAttribute('class','');
        }
        var smallImgSrc =this.getAttribute('src');
        bigImg[0].setAttribute('src',smallImgSrc);
        this.parentNode.classList.add('active');
    }
    
}

// 评论
window.onload = function () {
    $('btn').onclick = function () {
        var content = $('comment').value;
        
        if (content.length === 0) {
            alert('请输入内容');
            return;
        }
        var newLi = document.createElement('li');
        newLi.innerHTML = `${content} <a href="javascript:void(0)">删除</a>`;
        $('comment_content').appendChild(newLi);
        
        $('comment').value='';
        var delBtn=document.getElementsByTagName('a');
        for(var i=0;i<delBtn.length;i++){
            delBtn[i].onclick=function(){
                this.parentNode.remove();
            }
        }
    };

    function $(id) {
        return typeof id === 'string' ? document.getElementById(id) : null;
    }
}
