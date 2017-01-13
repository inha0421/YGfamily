$(document).ready(function(){

    var i = $(".btn li").index();
    var wid = $(".slider").width();
    var len = $(".btn li").length;
    
    
    
///////////////////////////////////////////////////////////  
    
    // 메인 슬라이드 처리 //
    
    //슬라이드 버튼에 on 클래스 처리
    
    $(".btn li").click(function(){

        $(".btn li").removeClass("on");
        $(this).addClass("on");

    });    

    
    //슬라이드 버튼 누른 화면으로 이동

    $(".btn li").click(function(){

        i = $(this).index();

        Sliding();

    });    
    
    
    // 슬라이드 재생

    function Sliding(){

        $(".btn li").removeClass("on");
        $(".btn li").eq(i).addClass("on");
        $(".panel").animate({"margin-left": -wid * i },500);

    }    

    
    //슬라이드 자동실행

    var auto = setInterval(function(){


        if (i == len - 1) {
            i = 0;
        }
        else {
            i = i + 1;
        }
        Sliding();

    },1500); //자동실행 함수(실행 할 내용,몇 초 마다);



    //슬라이더 마우스오버시 정지

    $(".slider").mouseenter(function(){

        clearInterval(auto); //중지하는 함수(중지 할 변수 이름);

    });


    //슬라이더 마우스리브 시 다시 실행

    $(".slider").mouseleave(function(){

        auto = setInterval(function(){

            if (i == len - 1) {
                i = 0;
            }
            else {
                i = i + 1;
            }
            Sliding();

        },1500);

    });    
    
    /////////////////////////////////////////////////////////////////
    
    // tab_menu , tab_box처리
    
    $(".tab_li li").click(function(){
        
        var list = $(this).index();
        
        $(".tab_li li").removeClass("tab_li_on");
        $(this).addClass("tab_li_on");
        
        if(list ==0){
            $(this).css({"background-position": "left bottom"});
        }
        
        else if(list==1){
            $(this).css({"background-position": "right bottom"});
        }
        
        $(".tab_box> div").stop().hide();
        $(".tab_box> div").eq(list).stop().show();

    });
    
    
//////////////////////////////////////////////////////////////
    
    //footer 에서 familt 구현

    $(".family").mouseenter(function(){
        $(".family ul").stop().show();
    });

    $(".family").mouseleave(function(){
        $(".family ul").stop().hide();
    });
    
});
