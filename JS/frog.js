// food類的定義
// 食物的操作
// 1.座標位置
// 2.生成位置
// 3.更新

class Frog {
  constructor(select) {
    this.map = document.querySelector(select);
    // console.log(this.map);
    // TODO：創建食物
    this.frog = document.createElement('div');
    // TODO：定義樣式
    this.frog.className = 'frog';
    // TODO：放到地圖當中
    this.map.appendChild(this.frog);
    // TODO：定義座標
    this.x = 0;
    this.y = 0;
    // TODO：調用生成食物的方法
    this.frogPos();
  }
  // TODO：隨機座標點
  frogPos() {
    // TODO：1.拿到地圖範圍
    // console.log(this.map.clientWidth / 40); //30
    // console.log(this.map.clientHeight / 40); //14
    const w_num = this.map.clientWidth / 40;
    const h_num = this.map.clientHeight / 40;
    // TODO：2.隨機生成數字
    let wNum = Math.floor(Math.random() * w_num);
    let hNum = Math.floor(Math.random() * h_num);
    console.log(wNum, hNum);
    // TODO：3.根據隨機數進行座標位置的計算
    this.x = wNum * 40;
    this.y = hNum * 40;
    // console.log(this.x, this.y);
    // TODO：4.進行複製
    this.frog.style.left = this.x + 'px';
    this.frog.style.top = this.y + 'px';
  }
}
