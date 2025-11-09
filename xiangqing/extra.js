
/*购物车滑进滑出*/
const car = document.querySelector('.shoppingcar');
const wrap = document.getElementById('car-wrapper');
document.querySelectorAll('.spcars').forEach(function(carBtn){
  carBtn.addEventListener('click',function() {
    car.classList.add('active');
    wrap.style.visibility = 'visible';
    document.body.classList.add('no-scroll');
  })
})
document.querySelector('.car-header-btn').addEventListener('click',function() {
  car.classList.toggle('active');
  wrap.style.visibility = 'hidden';
  document.body.classList.remove('no-scroll');
})

/* 点赞与收藏效果 */
document.querySelectorAll('.radius-btn.itr').forEach(function(btn) {
    btn.addEventListener('click', function() {
        if (this.classList.contains('like')) {
            document.querySelectorAll('.radius-btn.itr.like').forEach(function(likeBtn){
                likeBtn.classList.toggle('active');
            });
        } else {
            this.classList.toggle('active');
        }
    });
});


/* 分享条悬停显示效果 */
document.querySelector('.radius-btn.share.top').addEventListener('mouseenter',function() {
    document.querySelector('.hover-float.top').style.visibility = 'visible';
})
document.querySelector('.radius-btn.share.top').addEventListener('mouseleave',function() {
    document.querySelector('.hover-float.top').style.visibility = 'hidden';
})

document.querySelector('.radius-btn.share.bot').addEventListener('mouseenter',function() {
    document.querySelector('.hover-float.bot').style.visibility = 'visible';
})
document.querySelector('.radius-btn.share.bot').addEventListener('mouseleave',function() {
    document.querySelector('.hover-float.bot').style.visibility = 'hidden';
})


document.querySelector('.radius-btn.sousuo').addEventListener('mouseenter',function() {
    document.querySelector('.search-float').style.visibility = 'visible';
})
document.querySelector('.radius-btn.sousuo').addEventListener('mouseleave',function() {
    document.querySelector('.search-float').style.visibility = 'hidden';
})


// document.querySelector('.icon-container').addEventListener('mouseenter',function() {
//     document.querySelector('.icon-cover').style.visibility = 'visible';
// });
// document.querySelector('.icon-container').addEventListener('mouseleave',function() {
//     document.querySelector('.icon-cover').style.visibility = 'hidden';
// }) 死因：没有用‘this’专门绑定当前悬停的元素，而使用了全局范围的‘document.’


/* 图标交互功能悬停显示 */
document.querySelectorAll('.icon-container').forEach(function(contain) {
    contain.addEventListener('mouseenter',function() {
        this.querySelector('.icon-cover').style.visibility = 'visible';
    });

    contain.addEventListener('mouseleave',function() {
        this.querySelector('.icon-cover').style.visibility = 'hidden';
    });
});

document.querySelectorAll('.cover-function-icon').forEach(function(icon) {
    icon.addEventListener('mouseenter', function() {
        this.classList.add('active');
    });
    
    icon.addEventListener('mouseleave', function() {
        this.classList.remove('active');
    });
});