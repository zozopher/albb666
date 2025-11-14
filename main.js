
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

/*导航底色保持及搜索框input事件捕捉条件限制*/
document.querySelector('.sucaiku').addEventListener('mouseenter',function() {
  document.querySelector('.box.two').style.backgroundColor = '#FFFFFF1A';
  document.querySelector('.search-input').style.pointerEvents = 'none';
})
document.querySelector('.sucaiku').addEventListener('mouseleave',function() {
  document.querySelector('.box.two').style.backgroundColor = 'transparent';
  document.querySelector('.search-input').style.pointerEvents = 'auto';
})

document.querySelector('.ziyuanguanli').addEventListener('mouseenter',function() {
  document.querySelector('.box.three').style.backgroundColor = '#FFFFFF1A';
  document.querySelector('.search-input').style.pointerEvents = 'none';
})
document.querySelector('.ziyuanguanli').addEventListener('mouseleave',function() {
  document.querySelector('.box.three').style.backgroundColor = 'transparent';
  document.querySelector('.search-input').style.pointerEvents = 'auto';
})

document.querySelector('.aigongju').addEventListener('mouseenter',function() {
  document.querySelector('.box.five').style.backgroundColor = '#FFFFFF1A';
  document.querySelector('.search-input').style.pointerEvents = 'none';
})
document.querySelector('.aigongju').addEventListener('mouseleave',function() {
  document.querySelector('.box.five').style.backgroundColor = 'transparent';
  document.querySelector('.search-input').style.pointerEvents = 'auto';
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
    this.querySelector('.fugai').style.display = 'none';
    this.querySelector('.floating-text').style.display = 'none';
    this.querySelector('.start-trying').style.display = 'block';
  })

  video.addEventListener('mouseleave',function() {
    this.querySelector('.fugai').style.display = 'block';
    this.querySelector('.floating-text').style.display = 'block';
    this.querySelector('.start-trying').style.display = 'none';
  })
 })


/*依旧效果切换——使用指南&素材资产*/
let introContent = document.querySelectorAll('.intro-content')  //主体内容（包括两个不同板块下的内容）
const functionTitlesText = document.querySelectorAll('.function-titles-main-text');  //主标题
const functionTitlesArrow = document.querySelectorAll('.function-titles-main-arrow');  //主标题旁展开箭头
const introText = document.querySelectorAll('.intro-text');  //主标题下小字介绍
const imgs = document.querySelectorAll('.intro-img');  //主体内容右侧图片or视频

/*1. 两个板块间的内容切换*/
 function chooseTab(clickedTab,index) {
  document.querySelectorAll('.box3').forEach(function(item) {
    item.classList.remove('active');  //点击事件触发时先清除所有被选中效果
  });
    clickedTab.classList.add('active');  //为所点击的按钮赋予被选中效果

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

    //同理，以上都是在清除默认效果

    if (index === 1) {  //选中第二板块时展示第二板块的第一栏内容
      document.querySelector('.intro-content.tab2').classList.add('active');
      functionTitlesText[5].classList.add('active');  //主标题字体样式
      functionTitlesArrow[5].classList.add('active');  //箭头旋转
      introText[5].classList.add('active');  //第一栏小字介绍展示
      imgs[5].classList.add('active');  //第一栏右侧媒体内容
    } else {  //初始状态下默认展示第一板块下的第一栏内容
      document.querySelector('.intro-content.tab1').classList.add('active');
      functionTitlesText[0].classList.add('active');
      functionTitlesArrow[0].classList.add('active');
      introText[0].classList.add('active')
      imgs[0].classList.add('active')
    }
}

/*2. 介绍栏切换效果*/
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
    imgs[imgIndex].classList.add('active')  //相应媒体内容展示
}


/*瀑布流效果实现*/
window.onload=function() {
  var gap = 18;  //添加边距变量

  //1.获取主容器宽度
  var content = document.querySelector('.sucaiimg-container')
  var contentWidth = content.offsetWidth

  //2.获取单个图片的宽度
  var imgs = content.children
  var imgsWidth = imgs[0].offsetWidth

  //3.第一行可以排列多少张图片
  var nums = Math.floor((contentWidth+gap)/(imgsWidth+gap))

  //4.收集第一行所有元素的高度
  var arrHeight = []

  for(var i=0;i<imgs.length;i++){
    if(i<nums){  //这里都是第一行的元素
      // 设置第一行元素位置
      imgs[i].style.position = 'absolute'
      imgs[i].style.left = (i * (imgsWidth + gap)) + 'px'
      imgs[i].style.top = '0px'
      arrHeight.push(imgs[i].offsetHeight)
    } else{
      //创建第一个元素的对象
      var obj = {
        minH:arrHeight[0],
        minI:0
      }
      for(var j=0;j<arrHeight.length;j++){
        if(arrHeight[j]<obj.minH){
          obj.minH = arrHeight[j],
          obj.minI = j
        }
      }
      imgs[i].style.position = 'absolute'
      imgs[i].style.left = (obj.minI * (imgsWidth + gap)) + 'px'
      imgs[i].style.top = (obj.minH + gap) + 'px'
      arrHeight[obj.minI] = arrHeight[obj.minI] + imgs[i].offsetHeight + gap
    }
  }

  // 设置容器高度（包含间距）
  var maxHeight = Math.max.apply(null, arrHeight)
  content.style.height = maxHeight + 'px'
}

/*瀑布流导航切换*/
let sucaiSub = document.querySelectorAll('.sucai-sub');
let sucaiBox = document.querySelectorAll('.sucaiimg-container');

function subChoose(Sub,index) {
  sucaiSub.forEach(function(item) {
    item.classList.remove('active');  //点击事件触发时先清除所有被选中效果
  });

  sucaiBox.forEach(function(box) {
    box.classList.remove('active');  //点击事件触发时先清除所有被选中效果
  });

  Sub.classList.add('active');
  sucaiBox[index].classList.add('active')
}

/*瀑布流素材图遮罩*/
let sucaiImg = document.querySelectorAll('.sucaiimg');
//1. 遮罩悬停变化
sucaiImg.forEach(function(item) {
  item.addEventListener('mouseenter',function() {
    this.querySelector('.fugai').classList.add('active');
    this.querySelector('.interact-btns').style.display = 'flex';
  })
  item.addEventListener('mouseleave',function() {
    this.querySelector('.fugai').classList.remove('active');
    this.querySelector('.interact-btns').style.display = 'none';
  })
})
//2. 交互图标变化
let interactBox = document.querySelectorAll('.interact-box');

interactBox.forEach(function(item) {
    item.addEventListener('click', function() {
        // 切换图标active状态
        this.querySelectorAll('.icon').forEach(function(ICON) {
            ICON.classList.toggle('active');
        });
        
        // 处理点赞
        if (item.classList.contains('like')) {
            const fillIcon = this.querySelector('.fill');
            const cancelElement = document.getElementById('like-cancel');
            
            if (!fillIcon.classList.contains('active')) {
                // 点赞状态 - 显示取消提示，2秒后自动隐藏
                cancelElement.classList.add('show');
                setTimeout(() => {
                    cancelElement.classList.remove('show');
                }, 2000);
            } else {
                // 取消点赞状态 - 立即隐藏取消提示
                cancelElement.classList.remove('show');
            }
        }
        
        // 处理收藏
        if (item.classList.contains('collect')) {
            const fillIcon = this.querySelector('.fill');
            const cancelElement = document.getElementById('collect-cancel');
            
            if (!fillIcon.classList.contains('active')) {
                cancelElement.classList.add('show');
                setTimeout(() => {
                    cancelElement.classList.remove('show');
                }, 2000);
            } else {
                cancelElement.classList.remove('show');
            }
        }
    });
});




// let likeBtn = document.


/*底部微信二维码悬浮效果*/
document.querySelector('.wechat-hover').addEventListener('mouseenter',function() {
  document.querySelector('.hidden').classList.add('show');
})
document.querySelector('.wechat-hover').addEventListener('mouseleave',function() {
  document.querySelector('.hidden').classList.remove('show');
})


