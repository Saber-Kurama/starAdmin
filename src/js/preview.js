var Preview = {
    init: function(){
        this.setUIEvent();
    },
    setUIEvent: function(){
        // table 的展示
        $('.preview-row .panel-heading').on('click', function(){
            if($(this).parent().hasClass('open')){
                // 关闭
                $(this).parent().removeClass('open');
                $(this).next('.panel-body').css('display',"none");
                $(this).children('i').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-right');
            }else{
                // 打开
                $(this).parent().addClass('open');
                $(this).next('.panel-body').css('display',"block");
                $(this).children('i').removeClass('fa-chevron-circle-right').addClass('fa-chevron-circle-down');
            }
        })
    }
}