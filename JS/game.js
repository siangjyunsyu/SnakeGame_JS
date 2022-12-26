// TODO：設計遊戲類
class Game {
  constructor(select) {
    // 用來辨識遊戲是否正在執行開關
    this.isInGame = false;
    // TODO：地圖
    this.map = document.querySelector(select);
    // TODO：青蛙
    this.frog = new Frog(select);
    // TODO：蛇
    this.snake = new SnakeHd(select);
    // TODO：定義計時器
    this.timer = 0;
  }
  // TODO：定義遊戲開始的方法
  gameStart() {
    // 如果遊戲已經在進行中，則不得重複執行
    if (this.isInGame) {
      return;
    }
    // 如果通過檢查，代表遊戲並非進行中，接著按開始進行遊戲了，所以把它改true
    this.isInGame = true;

    // TODO：設定監視器(200是指讓蛇動起來的時間花0.2秒)
    this.timer = setInterval(() => {
      // TODO：讓蛇移動起來
      this.snake.snakeMove();
      // TODO：判斷是否吃到青蛙
      if (this.snake.isEat(this.frog.x, this.frog.y)) {
        // TODO：吃到青蛙後蛇要變長，要調用增加蛇頭變長的方法
        this.snake.createHead();
        // TODO：青蛙位置更新
        this.frog.frogPos();
      }
      // TODO：判斷蛇是否死亡
      if (this.snake.isDie()) {
        clearInterval(this.timer);
      }
    }, 150);
  }
  // TODO：暫停
  pause() {
    this.isInGame = false;
    clearInterval(this.timer);
  }
  // TODO：重新開始
  restart() {
    window.location.reload();
  }
  // TODO：改變方向的方法

  change(type) {
    // 方法一：底下四種狀況必須略過，不然會造成蛇折疊
    if (this.snake.direction == 'left' && type == 'right') {
      return;
    } else if (this.snake.direction == 'right' && type == 'left') {
      return;
    } else if (this.snake.direction == 'top' && type == 'bottom') {
      return;
    } else if (this.snake.direction == 'bottom' && type == 'top') {
      return;
    } else {
      this.snake.direction = type;
    }

    // 方法二：底下四種狀況必須略過，不然會造成蛇折疊
    // switch (this.snake.direction) {
    //   case 'left':
    //     if (type != 'right') {
    //       this.snake.direction = type;
    //     }
    //     break;
    //   case 'right':
    //     if (type != 'left') {
    //       this.snake.direction = type;
    //     }
    //     break;
    //   case 'top':
    //     if (type != 'bottom') {
    //       this.snake.direction = type;
    //     }
    //     break;
    //   case 'bottom':
    //     if (type != 'top') {
    //       this.snake.direction = type;
    //     }
    //     break;
    //   default:
    //     break;
    // }
  }
}
