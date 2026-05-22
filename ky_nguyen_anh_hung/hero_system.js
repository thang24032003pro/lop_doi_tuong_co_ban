class Hero {
    constructor(name, hp, attackDamage) {
        this.name = name;
        this.hp = hp;
        this.attackDamage = attackDamage;
    }

    // Phương thức tấn công một mục tiêu (target)
    attack(target) {
        console.log(`${this.name} tấn công ${target.name} gây ${this.attackDamage} sát thương.`);
        target.takeDamage(this.attackDamage);
    }

    // Phương thức nhận sát thương, đảm bảo HP không âm
    takeDamage(damage) {
        this.hp = Math.max(0, this.hp - damage);
        console.log(`${this.name} còn lại ${this.hp} HP.`);
        if (this.hp === 0) {
            console.log(`☠️ ${this.name} đã gục ngã!`);
        }
    }
}

// ---- KHỞI TẠO ĐỐI TƯỢNG (INSTANCES) ----
let arthur = new Hero("Arthur", 1000, 50);
let valhein = new Hero("Valhein", 80, 120); // Để HP thấp để test logic máu bằng 0

// ---- MÔ PHỎNG TRẬN ĐẤU ĐỂ KIỂM THỬ ----
console.log("--- TRẬN ĐẤU BẮT ĐẦU ---");
console.log(`Trạng thái ban đầu: ${arthur.name} (${arthur.hp} HP) VS ${valhein.name} (${valhein.hp} HP)`);
console.log("------------------------");

// Lượt 1: Arthur đánh Valhein
arthur.attack(valhein);

// Kiểm tra tính độc lập: Máu Arthur không đổi khi Valhein bị đánh
console.log(`[Kiểm tra độc lập] Máu của ${arthur.name} hiện tại: ${arthur.hp} HP`); 

console.log("------------------------");
// Lượt 2: Arthur đánh tiếp để Valhein hết máu (kiểm tra logic HP không âm)
arthur.attack(valhein);