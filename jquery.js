$(function(){
    //スムーススクロール
    $('a[href^="#"]').on('click',function(){
        //スクロールのスピード
        var speed = 500;
        //リンク元を取得
        var href= $(this).attr("href");
        //リンク先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        //ヘッダーの高さを取得
        var header = $('header').height();
        //ヘッダーの高さを引く
        var position = target.offset().top - header;
        //スムーススクロール
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
    //バーガーメニューボタンクリック
    $('.burger-btn , .burger-list a').on('click',function(){
        $('.burger-menue').fadeToggle();
        $('.burger-btn').toggleClass('burger-btn-fixced');
        $('.bar-top').toggleClass('close-top');
        $('.bar-mid').toggleClass('close-mid');
        $('.bar-bottom').toggleClass('close-bottom');
    })
})
