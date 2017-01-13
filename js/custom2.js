$(document).ready(function(){
    
    
    // tab 메뉴의 슬라이드 처리 
    
    var i = $(".btn_L li").index();
    var wid = $(".m_L_slider").width();
    var len = $(".btn_L li").length;
    
    
    // 메인 슬라이드 처리 //
    
    //슬라이드 버튼에 on 클래스 처리
    
    $(".btn_L li").click(function(){

        $(".btn_L li").removeClass("btn_L_on");
        $(this).addClass("btn_L_on");

    });    

    
    //슬라이드 버튼 누른 화면으로 이동

    $(".btn_L li").click(function(){

        i = $(this).index();

        Sliding();

    });    
    
    
    // 슬라이드 재생

    function Sliding(){

        $(".btn_L li").removeClass("btn_L_on");
        $(".btn_L li").eq(i).addClass("btn_L_on");
        $(".panel_L").animate({"margin-left": -wid * i },500);

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

    },2000); //자동실행 함수(실행 할 내용,몇 초 마다);

    //슬라이더 마우스오버시 정지

    $(".m_L_slider").mouseenter(function(){

        clearInterval(auto); //중지하는 함수(중지 할 변수 이름);

    });


    //슬라이더 마우스리브 시 다시 실행

    $(".m_L_slider").mouseleave(function(){

        auto = setInterval(function(){

            if (i == len - 1) {
                i = 0;
            }
            else {
                i = i + 1;
            }
            Sliding();

        },2000);

    });   

});