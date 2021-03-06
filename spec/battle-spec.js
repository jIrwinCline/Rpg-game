import { Character } from './../src/battleMaster.js';

describe('Character', function () {

  // it('should correctly determine whether a character has a new Id', function () {
  //   let radMan = new Character(3, 4);
  //   radMan.assignId()
  //   console.log(radMan.currentId)
  //   expect(radMan.currentId).toEqual(1);
  // });

  it('should correctly determine whether character levels up and restores health', function () {
      let skateboardDude = new Character('skateboardDude', 90, 40)
      let level = skateboardDude.level
      skateboardDude.levelUp(55)
      expect(skateboardDude.level).toEqual(level + 1);
      console.log(skateboardDude.hp);
      expect(skateboardDude.hp).toEqual(100 + 2);


    });

  it('should correctly determine whether character gains a new weapon', function () {
    let skateboardDude = new Character('skateboardDude', 3, 4)
    let oldWeapon = skateboardDude.attack
    skateboardDude.gainWeapon(70)
    expect(oldWeapon).toBeLessThan(skateboardDude.attack);


  });

  it('should correctly determine whether character heals by potion amount, but not past 100', function () {
    let skateboardDude = new Character('skateboardDude', 70, 40)
    skateboardDude.heal(20)
    expect(skateboardDude.hp).toEqual(90);
    skateboardDude.heal(20)
    expect(skateboardDude.hp).toEqual(100);
  });
  it("should test if an attack weakens an enemy's hp", function () {
    const skateboardDude = new Character('skateboardDude', 100,50)
    const bigRat = new Character('bigRat', 60,20)
    skateboardDude.battle(bigRat)
    expect(bigRat.hp).toEqual(10);
    bigRat.battle(skateboardDude)
    expect(skateboardDude.hp).toEqual(80);
  });
});
