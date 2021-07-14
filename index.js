window.onload=function () {
  let li=document.querySelectorAll("#head-right ul li")
  let xia=document.querySelector("#xia")
  let mainHead=document.querySelector("#mainHead")
  let up=document.querySelectorAll(".up")
  let contentLi=document.querySelectorAll("#head #wai-content>ul>li")
  let waiContent=document.getElementById("wai-content")
  let ul=document.querySelector("#wai-content>ul")
  let work11li=document.querySelectorAll("#wai-content #work11>li")
  let work12li=document.querySelectorAll("#wai-content #work12>li")
  let aa=document.querySelector("#wai-content #work43 #img1 #aa")
  let bb=document.querySelector("#wai-content #work43 #img2 #bb")
  let work43Img1=document.querySelector("#wai-content #work43 #img1")
  let work43Img2=document.querySelector("#wai-content #work43 #img2")
  let work53=document.querySelector("#wai-content #work53")
  let work53Li=document.querySelectorAll("#wai-content #work53 ul>li")
  let li2=document.querySelector("#wai-content .li2>.content")
  let li3=document.querySelector("#wai-content .li3>.content")
  let work51=document.querySelector("#wai-content #work51")
  let work52=document.querySelector("#wai-content #work52")
  let audio1=document.querySelector("#mainHead #audio")
  let audio=document.querySelector("#mainHead #audio audio")
  let audio2=document.querySelector("#mainHead #audio1")
  let kaiJi1=document.querySelector("#head #kaiJi1")
  let kaiJi2=document.querySelector("#head #kaiJi2")
  let xian=document.querySelector("#head #xian")
  let dianLi=document.querySelectorAll("#head #dian>li")
  let num=0
  let timer
  let timer1
  let flag1=0
  let index=0
  let li22=li2.childNodes
  let li33=li3.childNodes
  xia.style.left=li[0].offsetLeft+li[0].offsetWidth/2-xia.offsetWidth/2+"px"
   up[0].style.width="100%"
  waiContent.style.height=document.documentElement.offsetHeight-mainHead.offsetHeight+"px"
  ul.style.top=0
  xia.style.top=77+"px"

  //侧边导航栏
   dianLi[0].style.backgroundColor="black"
  for (let i = 0; i < dianLi.length; i++) {
    dianLi[i].index=i
    dianLi[i].onclick=function () {
      for (let j = 0; j < dianLi.length; j++) {
        dianLi[j].style.backgroundColor=""
      }
      this.style.backgroundColor="black"
      fun1(this.index,this.index)
    }
  }



  //开机动画
    xian.style.width="100%"
    setTimeout(function () {
      if(xian.style.width==="100%"){
        xian.style.opacity=0
        kaiJi1.style.top="-50%"
        kaiJi2.style.top="100%"
      }
    },1000)

  /*音频*/
  audio1.addEventListener("click",function () {
    audio.play()
  })
  audio2.addEventListener("click",function () {
    audio.pause()
  })


  /*出入场*/
  let arr=[
    {},
    {
      ruHua:function(){
        li22[1].style.top="-200px"
        li22[3].style.left="-200px"
        li22[5].style.top="500px"
        li22[1].style.opacity=0
        li22[3].style.opacity=0
        li22[5].style.opacity=0
      },
    chuHua:function () {
      li22[1].style.top=""
      li22[3].style.left=""
      li22[5].style.top=""
      li22[1].style.opacity=1
      li22[3].style.opacity=1
      li22[5].style.opacity=1
    }},
    {
      ruHua:function(){
        li33[1].style.top="-100px"
        li33[3].style.top="350px"
        li33[5].style.top="400px"
        li33[1].style.opacity=0
        li33[3].style.opacity=0
        li33[5].style.opacity=0
      },
      chuHua:function () {
        li33[1].style.top=""
        li33[3].style.top=""
        li33[5].style.top=""
        li33[1].style.opacity=1
        li33[3].style.opacity=1
        li33[5].style.opacity=1
      }
    },
    {
      ruHua:function(){
       work43Img1.style.transform="rotateZ(-45deg)"
       work43Img2.style.transform="rotateZ(-45deg)"
       work43Img1.style.opacity=0
       work43Img2.style.opacity=0
      },
      chuHua:function () {
        work43Img1.style.transform="rotateZ(0)"
        work43Img2.style.transform="rotateZ(0)"
        work43Img1.style.opacity=1
        work43Img2.style.opacity=1
      }
    },
    {
      ruHua:function(){
       work51.style.left="-50px"
       work52.style.right="-100px"
        work51.style.opacity=0
        work52.style.opacity=0
      },
      chuHua:function () {
        work51.style.left=""
        work52.style.right=""
        work51.style.opacity=1
        work52.style.opacity=1
      }
    }
  ]

  function hua2() {
    arr[1].ruHua()
    setTimeout(function () {
      arr[1].chuHua()
    },500)
  }
  function hua3() {
    arr[2].ruHua()
    setTimeout(function () {
      arr[2].chuHua()
    },500)
  }
  function hua4() {
    arr[3].ruHua()
    setTimeout(function () {
      arr[3].chuHua()
    },500)
  }
  function hua5() {
    arr[4].ruHua()
    setTimeout(function () {
      arr[4].chuHua()
    },500)
  }

   //第五屏
  work53.onmouseenter=function () {
    for (let i = 0; i < work53Li.length; i++) {
      work53Li[i].style.opacity=0.2
      work53Li[i].onmouseenter=function () {
        this.style.opacity=1
        work53.addEventListener("click",function () {
        this.className="class5"
        })
        document.onmouseleave=function () {
         work53.className=""
        }
        work53Li[i].onmouseleave=function () {
         this.style.opacity = 0.2
       }
        }
        work53.onmouseleave=function () {
          for (let j = 0; j < work53Li.length; j++) {
          work53Li[j].style.opacity=1
        }
      }
    }
  }

  //第四屏  图片动画
  let img1=aa.childNodes
  let img2=bb.childNodes
  fun4(aa,img1)
  fun4(bb,img2)
  function fun4(obj,img) {
    obj.onmouseenter=function () {
      for (let i = 0; i < img.length; i++) {
        img[1].childNodes[0].style.left="130px"
        img[3].childNodes[0].style.top="100px"
        img[5].childNodes[0].style.top="-200px"
        img[7].childNodes[0].style.left="-260px"
      }
    }
    obj.onmouseleave=function () {
      for (let i = 0; i < img.length; i++) {
        img[1].childNodes[0].style.left="0"
        img[3].childNodes[0].style.top="0"
        img[5].childNodes[0].style.top="-100px"
        img[7].childNodes[0].style.left="-130px"
      }
    }
  }
   work12li[0].style.backgroundColor="black"

   //第一屏

  timer1=setInterval(function () {
    for (let i = 0; i < work12li.length; i++) {
      work12li[i].style.backgroundColor = ""
    }
      work12li[index].style.backgroundColor = "black"
      if (index != flag1) {
        work11li[index].className = "class1right"
        work11li[flag1].className = "class1left"
      }
      flag1 = index
      index++
      if (index === 4) {
        index = 0
      }
  },2000)

  for (let i = 0; i < work12li.length; i++) {
    work12li[i].onclick = function () {
      clearInterval(timer1)
      work12li[i].index=i
      for (let j = 0; j < work12li.length; j++) {
        work12li[j].style.backgroundColor = ""
      }
      work12li[this.index].style.backgroundColor = "black"
      if (this.index===flag1) {
        return false
      } else {
        if (this.index < flag1) {
          work11li[flag1].className = "class2right"
          work11li[this.index].className = "class2left"}
        else {
          work11li[flag1].className = "class1left"
          work11li[this.index].className = "class1right"
        }
        flag1 = this.index
      }

    }
  }

  //导航栏点击事件
  for (let i = 0; i < li.length; i++) {
    li[i].index = i
    li[i].onclick = function () {
           fun1(this.index,i)
    }
  }


  //滚动事件
  if(waiContent.addEventListener){
    waiContent.addEventListener("DOMMouseScroll",function (event) {
      clearTimeout(timer)
     timer=setTimeout(function () {
        fun2(event)
      },200)
    })
  }
  waiContent.onmousewheel=function (event) {
    clearTimeout(timer)
    timer=setTimeout(function () {
      fun2(event)
    },200)
  }
  function fun2(event) {
     event=event||window.event
    if(event.wheelDelta){
      flag=event.wheelDelta>0?"up":"down"
    }else if(event.detail){
      flag=event.detail<0?"up":"down"
    }
    switch (flag){
      case "up":
        num--
        if(num<=0){
          num=0
        }
        for (let i = 0; i < dianLi.length; i++) {
          dianLi[i].style.backgroundColor=""
        }
        dianLi[num].style.backgroundColor="black"
        fun1(num,num)
         if(num===1){
           hua2()
         }
        if(num===2){
          hua3()
        }
        if(num===3){
          hua4()
        }
        if(num===4){
          hua5()
        }
        break
      case  "down":
        num++
        if(num>=4){
          num=4
        }
        for (let i = 0; i < dianLi.length; i++) {
          dianLi[i].style.backgroundColor=""
        }
        dianLi[num].style.backgroundColor="black"
        fun1(num,num)
        if(num===1){
          hua2()
        }
        if(num===2){
          hua3()
        }
        if(num===3){
          hua4()
        }
        if(num===4){
          hua5()
        }
        break
    }

  }


    //设置内容其的高度
  for (let i = 0; i < contentLi.length; i++) {
       contentLi[i].style.height=document.documentElement.offsetHeight-mainHead.offsetHeight+"px"
  }


   //控制页面转动
  function fun1(index,i) {
    for (let i = 0; i < li.length; i++) {
      up[i].style.width=""
    }
    up[index].style.width="100%"
    xia.style.left=li[i].offsetLeft+li[i].offsetWidth/2-xia.offsetWidth/2+"px"
    ul.style.top=-((document.documentElement.offsetHeight-mainHead.offsetHeight)*li[i].index)+"px"
  }
}
