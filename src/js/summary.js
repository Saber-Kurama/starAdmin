var Summary = {
	init: function() {
		this.setUIEvent();
	},
	setUIEvent: function() {
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
		$('#tree').jstree({
			'core': {
				'data': [
					'Simple root node',
					{
						'text': 'Root node 2',
						'state': {
							'opened': true,
							'selected': true
						},
						'children': [
							{ 'text': 'Child 1' },
							'Child 2'
						]
					}
				]
			}
		});
		initDatetimepicker()

		//初始化日历控件
		function initDatetimepicker() {
			$('#starttime').datetimepicker({
				locale: 'zh-cn',
				format: 'YYYY-MM-DD',
				defaultDate: ''
			});
			$('#endtime').datetimepicker({
				locale: 'zh-cn',
				format: 'YYYY-MM-DD',
				useCurrent: false, //Important! See issue #1075
				defaultDate: ''
			});
			$("#starttime").on("dp.change", function(e) {
				$('#endtime').data("DateTimePicker").minDate(e.date);
			});
			$("#endtime").on("dp.change", function(e) {
				$('#starttime').data("DateTimePicker").maxDate(e.date);
			});
			$('#temptime').datetimepicker({
				locale: 'zh-cn',
				format: 'YYYY-MM-DD'
			})
		};

	}
}