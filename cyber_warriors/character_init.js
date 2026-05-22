class Character {
    // Constructor chỉ nhận các thuộc tính động, các thuộc tính hệ thống được gán giá trị mặc định
    constructor(name = "Unknown Warrior", classType = "Novice") {
        // Biến truyền vào (Dynamic Parameters)
        this.name = name;
        this.classType = classType;

        // Biến trạng thái mặc định (Default States)
        this.level = 1;
        this.hp = 100;
        this.isAlive = true;
        this.inventory = [];
    }

    // Phương thức hiển thị trạng thái nhanh của nhân vật
    displayStatus() {
        console.log(`[CHARACTER]: ${this.name} | Hệ phái: ${this.classType} | Cấp độ: ${this.level} | HP: ${this.hp} | Trạng thái: ${this.isAlive ? "Còn sống" : "Đã gục ngã"}`);
    }
}

// ---- KHỞI TẠO CÁC ĐỐI TƯỢNG (INSTANCES) ----

// Trường hợp 1 & 2: Truyền đầy đủ tham số động theo đúng thiết kế
let player1 = new Character("Neo", "Hacker");
let player2 = new Character("Trinity", "Gunner");

// Trường hợp 3: Kiểm thử phá hoại - Không truyền tham số để kiểm tra cơ chế chống lỗi (Default Parameters)
let player3 = new Character();

// ---- VẬN HÀNH VÀ IN BÁO CÁO KIỂM THỬ ----
console.log("--- KẾT QUẢ KHỞI TẠO HỆ THỐNG NHÂN VẬT CYBERWARRIORS ---");
player1.displayStatus();
player2.displayStatus();
player3.displayStatus();

console.log("\n--- CHI TIẾT CẤU TRÚC ĐỐI TƯỢNG TRÊN BỘ NHỚ ---");
console.log(player1);
console.log(player2);
console.log(player3);