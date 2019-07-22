const hiddenProps = new WeakMap();

class Fighter {
    constructor(obj) {
        hiddenProps.set(this, 
        {
            name: obj.name,
            damage: obj.damage,
            hp: obj.hp,
            agility: obj.agility,
            wins: 0,
            loss: 0
        });
    }
    getName() {
        return hiddenProps.get(this).name;
    }
    getDamage() {
        return hiddenProps.get(this).damage;
    }
    getHealth() {
        return hiddenProps.get(this).hp;
    }
    getAgility() {
        return hiddenProps.get(this).agility;
    }
    addWins() {
        hiddenProps.get(this).wins += 1;
    }
    addLoss() {
        hiddenProps.get(this).loss += 1;
    }
    logCombatHistory() {
        console.log(`Name: ${this.getName()}, ` +
                    `Wins: ${hiddenProps.get(this).wins}, ` +
                    `Losses: ${hiddenProps.get(this).loss}`);
    }
    heal(num) {
        hiddenProps.get(this).hp += num;
    }
    dealDamage(num) {
        hiddenProps.get(this).hp -= num;
        if (hiddenProps.get(this).hp < 0) {
            hiddenProps.get(this).hp = 0;
        }
    }
    attack(opponent) {
        const maxRange = 100;
        const minRange = 1;
        let attackChance = Math.floor(Math.random()*(maxRange-minRange+1)+minRange);
        if (attackChance > opponent.getAgility()) {
            opponent.dealDamage(this.getDamage());
            console.log(`${this.getName()} has made ${this.getDamage()} damage to ${opponent.getName()}`);
        } else {
            console.log(this.getName() + '’s attack missed');
        }
    }
}

function battle(fighter1, fighter2) {
    const DEADMESSAGE = ' is dead and can’t fight';
    if (fighter2.getHealth() === 0) {
        return console.log(fighter2.getName() + DEADMESSAGE);
    } else if (fighter1.getHealth() === 0) {
        return console.log(fighter1.getName() + DEADMESSAGE);
    }
    fighter1.attack(fighter2);
    if (fighter2.getHealth() === 0) {
        fighter2.addLoss();
        fighter1.addWins();
        return console.log(fighter2.getName() + DEADMESSAGE);
    }
    fighter2.attack(fighter1);
    if (fighter1.getHealth() === 0) {
        fighter1.addLoss();
        fighter2.addWins();
        return console.log(fighter1.getName() + DEADMESSAGE);
    }
    return battle(fighter1, fighter2);
}

// const fighter1 = new Fighter({name: 'Richard', damage: 30, agility: 30, hp: 70});
// const fighter2 = new Fighter({name: 'Arthur', damage: 10, agility: 25, hp: 60});
// const fighter3 = new Fighter({name: 'Karl', damage: 0, agility: 40, hp: 100});


// battle(fighter1, fighter2);
// battle(fighter3, fighter1);