$(document).ready(function(){
    
    
    // tab 메뉴의 슬라이드 처리 
    
    var i = $(".btn_R li").index();
    var wid = $(".m_R_slider").width();
    var len = $(".btn_R li").length;
    
    
    
    //슬라이드 버튼에 on 클래스 처리
    
    $(".btn_R li").click(function(){

        $(".btn_R li").removeClass("btn_R_on");
        $(this).addClass("btn_R_on");

    });    

    
    //슬라이드 버튼 누른 화면으로 이동

    $(".btn_R li").click(function(){

        i = $(this).index();

        Sliding();

    });    
    
    
    // 슬라이드 재생

    function Sliding(){

        $(".btn_R li").removeClass(".tn_R_on");
        $(".btn_R li").eq(i).addClass("btn_R_on");
        $(".panel_R").animate({"margin-left": -wid * i},500);

    }    

    
    //슬라이드 자동실행

    var auto = setInterval(function(){

        if (i == len - i) {
            i = 0;
        }
        else {
            i = i + 1;
        }
        Sliding();

    },2000); //자동실행 함수(실행 할 내용,몇 초 마다);

    //슬라이더 마우스오버시 정지

    $(".m_R_slider").mouseenter(function(){

        clearInterval(auto); //중지하는 함수(중지 할 변수 이름);

    });


    //슬라이더 마우스리브 시 다시 실행

    $(".m_R_slider").mouseleave(function(){

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