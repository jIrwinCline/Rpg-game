export class Character {
  constructor (hp, attack){
    this.hp = hp,
    this.attack = attack,
    this.level = 1
    this.life = true;
    this.exp = 0;
  }

  levelUp (exp) {
    this.exp += exp
    if (this.exp >= 50) {
      this.level++
      this.exp -= 50
      while(this.hp < 100){
        this.hp++
      }
    }
    switch(this.level){
      case 2:
      this.hp += 2;
      this.attack += 5;
      break;
      case 3:
      this.hp += 3;
      this.attack += 7;
      break;
      case 4:
      this.hp += 5;
      this.attack += 8;
      break;
      case 5:
      this.hp += 10;
      this.attack += 10;
      break;
    }
  }

  heal (potion) {
    var i = 0;
    while(this.hp < 100 && i < potion){
      this.hp++
      i++
    }
  }

  battle (enemy) {
     enemy.hp -= this.attack
     if (enemy.hp <= 0) {
       enemy.life = false;
       this.levelUp(50)
     }
   }

  gainWeapon (newWeapon) {
    this.attack = newWeapon
  }
};

//----------------------------------
