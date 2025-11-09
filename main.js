
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

/*AI工具视频悬停播放*/
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('video.hover-video');
  
  videos.forEach(function(video) {
    video.addEventListener('mouseenter', function() {
      video.play();
    });
    
    video.addEventListener('mouseleave', function() {
      video.pause();
      video.currentTime = 0;
    });
  });
});

/*侧边功能按钮出现时机设置*/
window.addEventListener('scroll',function() {
  const sideBtns = document.querySelectorAll('.side-btn');
  if (window.pageYOffset > 210) {
    sideBtns.forEach(function(BTN){
      BTN.classList.add('show');})
  } else {
    sideBtns.forEach(function(BTN){
      BTN.classList.remove('show');})
  }
})

/*搜索类型按键背景色切换效果*/
function switchTab(clickedTab) {
  document.querySelectorAll('.search-type').forEach(function(item){
    item.classList.remove('active');
  });
    clickedTab.classList.add('active');
}

// /*搜索框覆盖文字去除*/
// document.querySelector('.search-input').addEventListener('click',function() {
//   document.querySelector('.search-input-cover').style.display = 'none';
// })  /*注：后面改用CSS的focus伪类了 */

/*库按钮的悬停效果及悬停切换*/
let btns = document.querySelectorAll('.btn1');
let samples = document.querySelectorAll('.cards-samples');

btns[0].classList.add('hover');

 btns.forEach(function(button,index) {
  button.addEventListener('mouseenter',function() {
    btns.forEach(function(btn) {
      btn.classList.remove('hover');
    });

    this.classList.add('hover');

    samples.forEach(function(sample) {
      sample.classList.remove('active');
    })

    switch (index) {
      case 0:
        document.querySelectorAll('.cards-samples.s').forEach(function(element){
          element.classList.add('active');
        });
        break;
      case 1:
        document.querySelectorAll('.cards-samples.t').forEach(function(element){
          element.classList.add('active');
        });
        break;
      case 2:
        document.querySelectorAll('.cards-samples.u').forEach(function(element){
          element.classList.add('active');
        });
        break;
      case 3:
        document.querySelectorAll('.cards-samples.v').forEach(function(element){
          element.classList.add('active');
        });
        break;
      case 4:
        document.querySelectorAll('.cards-samples.w').forEach(function(element){
          element.classList.add('active');
        });
        break;
      default:
        document.querySelectorAll('.cards-samples.s').forEach(function(element){
          element.classList.add('active');
        });
        break;
    }
  })
 })


 /*AI工具悬停覆盖去除*/
 document.querySelectorAll('.video-container').forEach(function(video) {
  video.addEventListener('mouseenter',function() {
    this.querySelector('.fugai').style.visibility = 'hidden';
    this.querySelector('.floating-text').style.visibility = 'hidden';
  })

  video.addEventListener('mouseleave',function() {
    this.querySelector('.fugai').style.visibility = 'visible';
    this.querySelector('.floating-text').style.visibility = 'visible';
  })
 })


/*依旧效果切换——使用指南&素材资产*/
let introContent = document.querySelectorAll('.intro-content')
const functionTitlesText = document.querySelectorAll('.function-titles-main-text');
const functionTitlesArrow = document.querySelectorAll('.function-titles-main-arrow');
const introText = document.querySelectorAll('.intro-text');

 function chooseTab(clickedTab,index) {
  document.querySelectorAll('.box3').forEach(function(item) {
    item.classList.remove('active');
  });
    clickedTab.classList.add('active');

    introContent.forEach(function(content) {
      content.classList.remove('active');
    });

    functionTitlesText.forEach(function(text) {
      text.classList.remove('active');
    });
    functionTitlesArrow.forEach(function(arrow) {
      arrow.classList.remove('active');
     });
    introText.forEach(function(text) {
      text.classList.remove('active');
    });
    imgs.forEach(function(media) {
      media.classList.remove('active');
    });

    if (index === 1) {
      document.querySelector('.intro-content.tab2').classList.add('active');
      functionTitlesText[5].classList.add('active');
      functionTitlesArrow[5].classList.add('active');
      introText[5].classList.add('active');
      imgs[5].classList.add('active');
    } else {
      document.querySelector('.intro-content.tab1').classList.add('active');
      functionTitlesText[0].classList.add('active');
      functionTitlesArrow[0].classList.add('active');
      introText[0].classList.add('active')
      imgs[0].classList.add('active')
    }
}


/*使用指南介绍栏切换效果*/
const imgs = document.querySelectorAll('.intro-img');
function introTab(clickedTab,imgIndex) {
  
  document.querySelectorAll('.function-titles').forEach(function(item) {
    item.querySelector('.function-titles-main-text').classList.remove('active');
    item.querySelector('.function-titles-main-arrow').classList.remove('active');
    item.querySelector('.intro-text').classList.remove('active');
  });

  imgs.forEach(function(media) {
    media.classList.remove('active');
  });

    clickedTab.querySelector('.function-titles-main-text').classList.add('active');
    clickedTab.querySelector('.function-titles-main-arrow').classList.add('active');
    clickedTab.querySelector('.intro-text').classList.add('active');
    imgs[imgIndex].classList.add('active')
}


/*底部微信二维码悬浮效果*/
document.querySelector('.wechat-hover').addEventListener('mouseenter',function() {
  document.querySelector('.hidden').classList.add('show');
})
document.querySelector('.wechat-hover').addEventListener('mouseleave',function() {
  document.querySelector('.hidden').classList.remove('show');
})


