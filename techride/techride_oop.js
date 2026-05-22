class Vehicle {
    constructor(id, driverName, vehicleType) {
        this.id = id;
        this.driverName = driverName;
        this.vehicleType = vehicleType; // Motorbike hoặc Car
        this.status = "Active"; // Trạng thái mặc định khi xuất xưởng hệ thống
    }

    // Phương thức tính tiền cuốc xe dựa trên loại xe dùng chung, không bị lặp lại logic
    calculateFare(distance) {
        let ratePerKm = this.vehicleType === "Car" ? 10000 : 5000;
        return distance * ratePerKm;
    }

    // Phương thức cập nhật trạng thái hoạt động độc lập của từng xe
    updateStatus(newStatus) {
        this.status = newStatus;
        console.log(`[HỆ THỐNG]: Xe ${this.id} của tài xế ${this.driverName} đã chuyển sang trạng thái: ${this.status}`);
    }
}

// ---- KHỞI TẠO CÁC ĐỐI TƯỢNG (INSTANCES) ----
let vehicle1 = new Vehicle("V01", "Nguyen Van A", "Motorbike");
let vehicle2 = new Vehicle("V02", "Tran Thi B", "Car");
let vehicle3 = new Vehicle("V03", "Pham Van C", "Motorbike");

// ---- VẬN HÀNH KIỂM THỬ HỆ THỐNG ----
console.log("--- BÁO CÁO HỆ THỐNG QUẢN LÝ XE TECHRIDE ---");
console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);
console.log("--------------------------------------------");

// Kiểm thử phương thức tính tiền cuốc xe
console.log(`Cuốc xe 10km của ${vehicle1.driverName} (${vehicle1.vehicleType}): ${vehicle1.calculateFare(10)} VND`);
console.log(`Cuốc xe 10km của ${vehicle2.driverName} (${vehicle2.vehicleType}): ${vehicle2.calculateFare(10)} VND`);

console.log("--------------------------------------------");
// Kiểm thử tính độc lập: Thay đổi trạng thái xe 2, kiểm tra xe 1 không bị ảnh hưởng
vehicle2.updateStatus("Maintenance");
console.log(`[Kiểm tra độc lập] Trạng thái hiện tại của Xe 1: ${vehicle1.status}`);