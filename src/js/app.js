/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */

// 整个项目的通用的js
var App = {
    init: function(){
        this.setUIEvent();
    },
    setUIEvent: function(){
        // 绑定左侧菜单的功能
        $('.star-sidebar-menu > li > a').on('click', function(){
            $('.star-sidebar-menu > li').removeClass('open')
            $(this).parent('li').addClass('open')
        })
    }
}