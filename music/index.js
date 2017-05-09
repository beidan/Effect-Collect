/**
 * Created by peidan on 2017/5/9.
 */
;
(function () {
    /*
     参数说明
     src: 音频url，
     id: 模拟audio，
     contain: 控制音乐暂停的按钮
     * */
    function Music(opt) {
        this.src = opt.src;
        this.id = opt.id;
        this.contain = opt.contain;
    }

    Music.prototype = {
        init: function () {
            this.play(this.id);
            this.pause(this.id, this.contain);
        },
        play: function (id) {
            console.log(id)
            var audio = document.getElementById(id),
                play = function () {
                    audio.play();
                    document.removeEventListener("touchstart", play, false);
                };
            audio.play();
            document.addEventListener("WeixinJSBridgeReady", function () {
                play();
            }, false);
            document.addEventListener("touchstart", play, false);
        },
        pause: function (id, contain) {
            var music = document.getElementById(contain);
            music.addEventListener('touchend', function () {
                console.log('我被点击');
                var audio = document.getElementById(id);
                if (audio !== null) {
                    //audio.paused  false--播放器播放时 true--播放器暂停时
                    if (!audio.paused) {
                        music.classList.add('cur');
                        audio.pause();  //暂停
                    } else {
                        music.classList.remove('cur');
                        audio.play();  //播放
                    }
                }
            });
        }
    }
    window.Music = Music;
})()