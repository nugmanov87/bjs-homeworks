// 1 задание

"use strict";
class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
  }
  //  1 метод
  takeDamage(damage) {
    if (damage < this.durability) {
      this.durability -= damage;
    } else if (damage >= this.durability) {
      return (this.durability = 0);
    }
  }
  //  2 метод
  getDamage() {
    if (this.durability >= (30 * this.durability) / 100) {
      return this.attack;
    } else if (this.durability == 0) {
      return 0;
    } else {
      return this.attack / 2;
    }
  }

  //  3 метод
  isBroken() {
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }
}

//  1 проверка
const sword = new Weapon("Старый меч", 20, 10, 1);
sword.takeDamage(5);
 console.log(sword.durability); // 5
sword.takeDamage(110);
console.log(sword.durability); // 0
// 2 проверка

const arm = new Weapon("Рука", 1, Infinity, 1);
arm.takeDamage(20);
console.log(arm.durability); // Infinity

const bow = new Weapon("Лук", 10, 200, 3);
bow.takeDamage(20);
console.log(bow.durability); // 180
bow.takeDamage(180);
console.log(bow.durability);  // 0

 
console.log(bow.getDamage()); // 10
console.log(arm.durability);  // Infinity

// 3 проверка
console.log(arm.isBroken()); // false
console.log(bow.isBroken()); // true

// экземляры оружия 1 таблица
const arm2 = new Weapon({
  name: "Рука",
  attack: 1,
  durability: Infinity,
  range: 1
});

const bow2 = new Weapon({
  name: "Лук",
  attack: 10,
  durability: 200,
  range: 3
});

const sword2 = new Weapon({
  name: "Меч",
  attack: 10,
  durability: 200,
  range: 3
});

const knife = new Weapon({
  name: "Нож",
  attack: 5,
  durability: 300,
  range: 1
});

const staff = new Weapon({
  name: "Посох",
  attack: 8,
  durability: 300,
  range: 20
});

// экземляры оружия 2 таблица

const longBow = new Weapon({
  name: "Длинный лук",
  versionOfWhat: "Лук",
  attack: 15,
  durability: 200,
  range: 4
});

const axe = new Weapon({
  name: "Секира",
  versionOfWhat: "Меч",
  attack: 27,
  durability: 800,
  range: 3
});

const blizzardStaff = new Weapon({
  name: "Посох бури",
  versionOfWhat: "Посох",
  attack: 10,
  durability: 300,
  range: 3
});

// 2 задание

class Bow extends Weapon {
  constructor() {
    super();
    this.name = 'Лук';
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
  }
}

class Arm extends Weapon {
  constructor() {
    super ();
    this.name = 'Рука';
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
  }
}

class Sword extends Weapon {
  constructor() {
    super ();
    this.name = 'Меч';
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
  }
}

class Knife extends Weapon {
  constructor() {
    super ();
    this.name = 'Нож';
    this.attack = 5;
    this.durability = 300;
    this.range = 1;
  }
}

class Staff extends Weapon {
  constructor() {
    super ();
    this.name = 'Посох';
    this.attack = 8;
    this.durability = 300;
    this.range = 20;
  }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = "Длинный лук";
    this.attack = 15;
    this.range = 4;
  }
}

class Axe extends Sword {
  constructor() {
    super();
    this.name = "Cекира";
    this.attack = 27;
    this.durability = 800;
  }
}

class BlizzardStaff extends Staff {
  constructor() {
    super();
    this.name = "Посох бури";
    this.attack = 10;
    this.range = 3;
  }
}
// проверка на примере BlizzardStaff

const bliz = new BlizzardStaff();
bliz.takeDamage(5);
console.log(bliz.durability); // 295 
bliz.takeDamage(500);
console.log(bliz.durability);  // 0

console.log(bliz.getDamage()); // 10

console.log(bliz.isBroken()); // true
