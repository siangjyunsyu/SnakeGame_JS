// TODO：蛇對象
class SnakeHd {
  constructor(select) {
    this.map = document.querySelector(select);
    // console.log(this.map);

    // TODO：蛇的運動方向
    this.direction = 'right';

    // TODO：蛇的陣列(把蛇的頭和身體都會儲存到陣列當中，頭從數組的第0位開始)
    this.snakeList = [];

    // TODO：調用創建蛇
    this.createSnake();
    // this.snakeMove();
  }

  // TODO：創建蛇頭函數
  createHead() {
    // TODO：取得陣列第0位找到蛇頭
    const head = this.snakeList[0];
    // console.log(head)

    // TODO：定義座標
    const pos = { x: 0, y: 0 };
    if (head) {
      // TODO：如果有蛇頭就創建新蛇頭放在原先蛇頭後的座標位置上，新蛇頭座標一定會改變，所以改變方向需要條列
      switch (this.direction) {
        case 'left':
          pos.x = head.offsetLeft - 40;
          pos.y = head.offsetTop;
          break;
        case 'right':
          pos.x = head.offsetLeft + 40;
          pos.y = head.offsetTop;
          break;
        case 'top':
          pos.x = head.offsetLeft;
          pos.y = head.offsetTop - 40;
          break;
        case 'bottom':
          pos.x = head.offsetLeft;
          pos.y = head.offsetTop + 40;
          break;
        default:
          break;
      }
      // console.log(pos.x,pos.y)
      // TODO：把原先的頭蛇變成身體
      head.className = 'body';
    }

    // TODO：創建蛇頭
    const div = document.createElement('div');
    // TODO：定義樣式
    div.className = 'head';
    // TODO：幫蛇頭定義座標
    div.style.left = pos.x + 'px';
    div.style.top = pos.y + 'px';
    // console.log(this.snakeHead);

    // 蛇移動轉向，圖片跟著轉
    switch (this.direction) {
      case 'left':
        div.style.transform = 'rotate(' + 180 + 'deg)';
        break;
      case 'right':
        div.style.transform = 'rotate(' + 0 + 'deg)';
        break;
      case 'top':
        div.style.transform = 'rotate(' + 270 + 'deg)';
        break;
      case 'bottom':
        div.style.transform = 'rotate(' + 90 + 'deg)';
        break;

      default:
        break;
    }

    // TODO：把蛇頭存入陣列最前面
    this.snakeList.unshift(div);
    // TODO：放到地圖當中
    this.map.appendChild(div);
  }

  // TODO：創建一條蛇
  createSnake() {
    for (let i = 0; i < 4; i++) {
      this.createHead();
    }
  }

  // 蛇移動的方法
  snakeMove() {
    // 將原先的蛇頭變為蛇身，蛇尾部刪除，新增一個蛇頭在最前端，來實現視覺上的位移
    // TODO：1.從陣列中移除
    const body = this.snakeList.pop();
    // console.log(body);

    // TODO：2.從頁面刪除
    body.remove();

    // TODO：3.新增一個新的蛇頭
    this.createHead();
  }

  // TODO：判斷蛇有沒有吃到食物
  isEat(frogX, frogY) {
    // TODO：判斷蛇頭和座標是否重合
    const head = this.snakeList[0];
    const headX = head.offsetLeft;
    const headY = head.offsetTop;

    if (frogX === headX && frogY === headY) {
      return true;
    }
    return false;
  }

  // TODO：判斷蛇有沒有死 - 是否撞牆
  isDie() {
    // TODO：判斷蛇頭是否到邊界
    const head = this.snakeList[0];
    const headX = head.offsetLeft;
    const headY = head.offsetTop;
    if (headX < 0 || headY < 0 || headX >= this.map.clientWidth || headY >= this.map.clientHeight) {
      return true;
    } else if (head == headX && head == headY) {
      return true;
    }
    return false;
  }
}
