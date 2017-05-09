/**
 * Created by peidan on 2017/5/9.
 */

;(function () {
    /*
     * 接收参数
     * 1. target 滚动列表的最外层，比如该例子的ul的类名
     * 2. time 每一个列表项停留时间，单位秒
     * 3. hei  每一个列表的高度
     *
     * 注意：该列表项最后一项必须与第一项一致,列表项使用ul，li
     * */
    function Roll(target, time, hei) {
        var dur = time || 3,
            msg = document.querySelector('.' + target),
            num = msg.querySelectorAll('li').length,
            i = 0;

        function animate() {
            var which = i % num, cssText, _dur;
            if (i === num) {
                i = 0;
                _dur = 1;
                cssText = '-webkit-transform: translate3d(0,0,0);';
            }
            else {
                _dur = dur;
                cssText = '-webkit-transition: transform 0.5s ease-in-out;'
                    + '-webkit-transform: translate3d(0,-' + hei * which + 'px,0);';
            }
            msg.style.cssText = cssText;
            i++;
            setTimeout(function () {
                animate();
            }, _dur * 1000);
        }

        animate();
    }

    window.Roll = Roll;
})()