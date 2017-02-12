var Summary = {
    init: function(){
        this.setUIEvent();
    },
    setUIEvent: function(){
        // table 的展示
        // $('.preview-row .panel-heading').on('click', function(){
        //     if($(this).parent().hasClass('open')){
        //         // 关闭
        //         $(this).parent().removeClass('open');
        //         $(this).next('.panel-body').css('display',"none");
        //         $(this).children('i').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-right');
        //     }else{
        //         // 打开
        //         $(this).parent().addClass('open');
        //         $(this).next('.panel-body').css('display',"block");
        //         $(this).children('i').removeClass('fa-chevron-circle-right').addClass('fa-chevron-circle-down');
        //     }
        // })

        // jstree
        $('#tree').jstree({ 'core' : {
            'data' : [
            'Simple root node',
            {
             'text' : 'Root node 2',
             'state' : {
               'opened' : true,
               'selected' : true
             },
             'children' : [
               { 'text' : 'Child 1' },
               'Child 2'
             ]
            }
            ]
        } });
        var locale = {
            "format": 'YYYY-MM-DD',
            "separator": " -222 ",
            "applyLabel": "确定",
            "cancelLabel": "取消",
            "fromLabel": "起始时间",
            "toLabel": "结束时间'",
            "customRangeLabel": "自定义",
            "weekLabel": "W",
            "daysOfWeek": ["日", "一", "二", "三", "四", "五", "六"],
            "monthNames": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            "firstDay": 1
        };


        $(function() {
            $('input[name="daterange"]').daterangepicker({
                'locale': locale
            });
            $('input[name="birthdate"]').daterangepicker({
                 'locale': locale,
                 'singleDatePicker': true,
            });
       });

    }
}