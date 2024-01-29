class StreetFighter{
  constructor(_name,_hp,_strength){
    this.name=_name
    this.hp=_hp
    this.strength=_strength
  }
  attackInfo(enemy){
    const attack=enemy=>{
      let damage=Math.round(Math.random()*this.strength)
      enemy.hp=enemy.hp-damage;
      return damage
    }
    return console.log(`${this.name} attacks ${enemy.name} and does a damage of ${attack(enemy)}!   ${this.name} health: ${this.hp}.  ${enemy.name} health: ${enemy.hp}`)
  }
}
const fighter1= new StreetFighter("Fighter 1", 100, 17)
const fighter2= new StreetFighter("Fighter 2", 150, 10)
for (let i=0; i<=10;i++){
  console.log(`===Round ${i}===`)
  fighter1.attackInfo(fighter2)
  fighter2.attackInfo(fighter1)
}
console.log("BATTLE ENDS")
//checks who is the winner
if(fighter1.hp>fighter2.hp){
  console.log("Fighter 1 WINS!!!")
}else{
  console.log("Fighter 2 WINS!!!")
}