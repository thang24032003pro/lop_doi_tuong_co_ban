/**
 * HỆ THỐNG ĐIỀU PHỐI DRONE - SKYDELIVERY (OOP & ARRAY MANAGEMENT VERSION)
 */

class Drone {
    constructor(id, battery, status) {
        this.id = id;
        this.battery = battery;
        this.status = status; // available, delivering, charging
    }
}

class FleetManager {
    constructor() {
        this.droneFleet = [];
    }

    // Thêm Drone mới vào hệ thống quản lý
    addDrone(drone) {
        this.droneFleet.push(drone);
    }

    // Tìm kiếm và điều phối Drone hợp lệ để đi giao hàng
    dispatchOrder() {
        const suitableDrone = this.droneFleet.find(drone => 
            drone.status === "available" && drone.battery > 20
        );

        if (suitableDrone) {
            suitableDrone.status = "delivering";
            console.log(`[ĐIỀU PHỐI SUCCESS]: Đã giao đơn hàng cho Drone ${suitableDrone.id} (Pin: ${suitableDrone.battery}%)`);
            return true;
        } else {
            console.log("[ĐIỀU PHỐI FAILED]: Không có Drone nào sẵn sàng (Yêu cầu: status='available', pin > 20%)");
            return false;
        }
    }
}

// ---- KHỞI TẠO HỆ THỐNG VÀ NẠP DỮ LIỆU GIẢ (MOCK DATA) ----
const manager = new FleetManager();

const mockDrones = [
    { id: "D01", battery: 89, status: "available" },
    { id: "D02", battery: 12, status: "available" }, // Pin yếu, không chọn
    { id: "D03", battery: 45, status: "delivering" }, // Đang bận, không chọn
    { id: "D04", battery: 95, status: "charging" },   // Đang sạc, không chọn
    { id: "D05", battery: 73, status: "available" },
    { id: "D06", battery: 18, status: "charging" },
    { id: "D07", battery: 61, status: "available" },
    { id: "D08", battery: 50, status: "delivering" },
    { id: "D09", battery: 5, status: "available" },  // Pin yếu, không chọn
    { id: "D10", battery: 82, status: "available" },
    { id: "D11", battery: 33, status: "charging" },
    { id: "D12", battery: 67, status: "delivering" },
    { id: "D13", battery: 91, status: "available" },
    { id: "D14", battery: 22, status: "available" },
    { id: "D15", battery: 15, status: "charging" },
    { id: "D16", battery: 54, status: "available" },
    { id: "D17", battery: 40, status: "delivering" },
    { id: "D18", battery: 78, status: "available" },
    { id: "D19", battery: 11, status: "available" }, // Pin yếu, không chọn
    { id: "D20", battery: 85, status: "available" }
];

// Nạp dữ liệu vào danh sách quản lý tập trung
mockDrones.forEach(data => {
    manager.addDrone(new Drone(data.id, data.battery, data.status));
});

// ---- VẬN HÀNH KIỂM THỬ: ĐIỀU PHỐI 5 LẦN LIÊN TIẾP ----
console.log("--- BẮT ĐẦU ĐIỀU PHỐI ĐƠN HÀNG THỬ NGHIỆM ---");
manager.dispatchOrder();
manager.dispatchOrder();
manager.dispatchOrder();
manager.dispatchOrder();
manager.dispatchOrder();

console.log("\n--- TRẠNG THÁI DANH SÁCH DRONE SAU KHI ĐIỀU PHỐI ---");
console.log(manager.droneFleet);