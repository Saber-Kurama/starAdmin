var Idea = {
    init: function(){
        this.setUIEvent();
    },
    setUIEvent: function(){
        // table 的展示
        $('.idea-table-label-js').on('click', function(){
            if($(this).parent().hasClass('open')){
                // 关闭
                $(this).parent().removeClass('open');
                $(this).parent().next('.idea-table-body').css('display',"none");
                $(this).children('i').removeClass('fa-caret-down').addClass('fa-caret-right');
            }else{
                // 打开
                $(this).parent().addClass('open');
                $(this).parent().next('.idea-table-body').css('display',"block");
                $(this).children('i').removeClass('fa-caret-right').addClass('fa-caret-down');
            }
        })
    }
}