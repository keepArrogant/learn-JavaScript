window.addEventListener('load', function () {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })

    // 2.鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function (e) {
        // (1) 先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // (2)减去盒子高度300  的 一半150  就是我们mask的最终left 和 top值了
        // (3) 我们 mask 移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // (4) 如果x坐标 小于了0 就让他停在0 的位置

        // 因为遮罩层和装它的盒子都是正方形 所以 最大移动距离的left 和 top 是一样的
        // 遮罩层的最大移动距离
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        // (5) 如果y坐标 小于了0 就让他停在0的位置
        if (maskY <= 0) {
            maskY = 0
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';

        // 1/2 = x /4  求x   x = 1*4 / 2
        // 3. 大图片的移动距离 = 遮罩层移动距离 * 大图片 最大移动距离 / 遮罩层的最大移动距离

        // 大图
        var bigIMg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        // 因为大图片和大盒子都是正方形，所以说 大图片最大移动距离是一样的
        var bigMax = bigIMg.offsetWidth - big.offsetWidth;
        // 大图片移动距离 X Y
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigIMg.style.left = -bigX + 'px';
        bigIMg.style.top = -bigY + 'px';
    })
})