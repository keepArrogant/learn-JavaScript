// 简单动画函数封装  obj目标对象 target 目标位置
// 给不同的元素指定不同的定时器
function animate(obj, target, callback) {
    // 当我们不断的点击按钮，这个元素的速度会越来越快，因为开启了太多的定时器
    // 解决方案就是 让我们元素只有一个定时器
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {

        //缓动动画就是让元素运动速度有所变化，最常见的是让速度慢慢停下来
        // 思路：
        // 1. 让盒子每次移动的距离慢慢变小，速度就会慢慢落下来
        // 2. 核心算法： (目标值-现在的位置) / 10 作为每次移动的距离 步长
        // 3. 停止的条件是：让当前盒子位置等于目标位置就停止定时器
        // obj.offsetLeft 现在盒子与左侧的距离   +   (target - obj.offsetLeft) / 10 目前要移动的距离(步长)
        // obj.offsetLeft + (target - obj.offsetLeft) / 10
        // 步长值写到定时器里面 
        // 把步长值改为整数并且要向上取整，这样最后到达的目标点就不会成小数和达不到的情况，
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        // 往后退，因为步长是负值，所以要向下取整 不然就会出现走不到目标位置就停下

        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质上是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            if (callback) {
                // 调用函数
                callback();
            }
        }

        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}