$(function () {
    // 鼠标失去焦点
    $('#sou').blur(function () {
            setTimeout(() => {
                $('.mode').css('display', 'none')
                $(this).css({
                    borderRadius: '10px 0 0 10px',
                    borderColor: '#c4c7ce'    
                });
            }, 100)
    
    })
    // 鼠标获得焦点
    $('#sou').focus(function () {
        $(this).css('borderColor', '#4e6ef2')
        if ($(this).val() !== '') {
            $('.mode').css('display', 'block')
            $(this).css({
                borderRadius: '10px 0 0 0',
                borderBottomColor: '#eee'
            })
        }
    })
    // input 事件
    $('#sou').on('input', function () {
        if ($(this).val() !== '') {
            $(this).css({
                borderRadius: '10px 0 0 0',
                borderBottomColor: '#eee'
            })
            $('.mode').css('display', 'block')
            // 获取输入值
            let key = $(this).val()
            // 发送请求
            $.getJSON(`https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=33515,33354,33272,31254,33595,33570,26350,22157&wd=${key}&cb=?`,
                function (data) {
                    lists = data.g
                    if(lists !== undefined) {
                        let str = '';
                        lists.forEach(item => {
                            str += `<li><a href="https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=2&tn=baiduhome_pg&wd=${item.q}&oq=%25E4%25BD%25A0%25E5%25A5%25BD%25E7%259A%2584%25E8%258B%25B1%25E6%2596%2587rsv_pq=99ff9b1600010994rsv_t=346fvKIhpUF3BdnyfVgYRAr%2FcKl4sMWAOaiUs2EnFl5OhUv1eoqpbIvSER1v6f3OWdhx&rqlang=cn&rsv_enter=1rsv_dl=ts_1&rsv_btype=t&inputT=2698&rsv_sug3=10&rsv_sug1=10&rsv_sug7=100&rsv_sug2=1prefixsug=%25E4%25BD%25A0&rsp=1&rsv_sug4=3584" target="_blank">${item.q}</a></li>`
                        })
                        $('ul').html(str)
                    }            
                }
            )
    
        } else {
            $('.mode').css('display', 'none')
            $(this).css({
                borderBottomColor: '#4e6ef2',
                borderRadius: '10px 0 0 10px',
                
            })
        }
    })
    // 点击事件
    $('.btn').click(function () {
        let value = $('#sou').val()
            let url = `https://www.baidu.com/s?word=${value}`
            window.open(url)
    })
    // 键盘事件
    $(window).keydown(function (e) {
        if(e.keyCode == 13) {
            $('.btn').trigger('click')
        }
    })
})


