// 分类
function openTab(event, categoryName) {
    var i, tabcontent, tablinks;
  
    // 隐藏所有分类的商品列表
    tabcontent = document.getElementsByClassName("content-main");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // 移除所有选项卡链接的激活状态
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  
    // 显示点击分类对应的商品列表并标记选项卡为激活状态
    document.getElementById(categoryName).style.display = "block";
    event.currentTarget.classList.add("active");
}



