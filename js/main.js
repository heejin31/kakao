//gnb 서브메뉴 슬라이드
$('.btn_sub').click(function(){
    $(this).find('span').toggleClass('on');
    /* $('.charactor_wrap').toggle();   show/hide가 왔다갔다 */
    $(this).siblings('.list_sub_wrap').slideToggle(300);  /* list_sub_wrap가 두개이기 때문에 클릭한 대상의 자매관계인 list_sub_wrap만 선택  */    
});

//gnb가 왼쪽에서 튀어나옴
$('.top_left').click(function(){
    $('#gnb').animate({left:0},300,'swing'); /*왼쪽으로 0이되게 함 0.3초 */
    $('.dark').css({'display':'block'});
});

//gnb 사라짐
$('.dark').click(function(){
    $('.dark').css({'display':'none'});
    $('#gnb').animate({left:-304},300,'swing');
    $('.login_popup').hide();
});


//로그인 팝업
$('.login_require').click(function(){
    $('.login_popup').show();
    $('#gnb').animate({left:-304},300,'swing');
});

//로그인 팝업 사라짐
$('.btn_close').click(function(){
    $('.login_popup').hide();
    $('.dark').css({'display':'none'});
});