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
        function getTree() {
            // Some logic to retrieve, or generate tree structure


            var data = [{
                text: "p1",
                nodes: [{ text: "p1-1", id: '00001', nodeId: '00001' }, { text: "p1-2", id: '00002' }, { text: "p1-3", id: '00003' }, { text: "p1-4", id: '00004', nodes: [{ text: 'p1-1-1', id: '00005'}]}]

            }]
            return data;
        }
        var obj = {};
        obj.text = "123";
        $('#tree').treeview({
            data: getTree(),         // data is not optional
            levels: 5,
            multiSelect: true

        });
    }
}