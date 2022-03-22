var images = [
    "assets/images/purple_bg_move30.png",
    "assets/images/purple_bg_move31.png",
    "assets/images/purple_bg_move32.png",
    "assets/images/purple_bg_move33.png",
    "assets/images/purple_bg_move34.png",
    "assets/images/purple_bg_move34.png",
    "assets/images/purple_bg_move34.png",
    "assets/images/purple_bg_move35.png",
    "assets/images/purple_bg_move36.png",
    "assets/images/purple_bg_move37.png",
    "assets/images/purple_bg_move38.png",
    "assets/images/purple_bg_move39.png",
];

var obj = { curImg: 0 };

var tween = TweenMax.to(obj, 0.5,
    {
        curImg: images.length - 1,
        roundProps: "curImg",
        repeat: 0,
        immediateRender: true,
        ease: Linear.easeNone,
        onUpdate: function () {
            $("#myimg").attr("src", images[obj.curImg]);
        }
    }
);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: 600
})
    .setTween(tween)
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: '#imagesequence',
    duration: 600,
    reverse: true
})
    .setPin('#imagesequence')
    .addTo(controller);

