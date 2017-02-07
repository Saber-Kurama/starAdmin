/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/4/19.
 */

var Common = {
  init:function(){
    this.setFastClick();
  },
  // 设置 FastClick
  setFastClick: function() {
    FastClick.attach(document.body)
  }
};
