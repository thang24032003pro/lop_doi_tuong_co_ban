class SmartDevice {
    constructor(deviceName, type) {
        this.deviceId = 'id-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
        this.deviceName = deviceName;
        this.type = type;
        this.isOn = false;
        this.battery = 100;
        
        console.log(`[HỆ THỐNG]: Thiết bị ${this.deviceName} vừa được kích hoạt thành công với ID: ${this.deviceId}`);
    }
}

// ---- KHỞI TẠO CÁC ĐỐI TƯỢNG (INSTANCES) ----
let livingRoomLamp = new SmartDevice("Đèn phòng khách", "Light");
let bedroomAC = new SmartDevice("Điều hòa phòng ngủ", "AirConditioner");
let kitchenSpeaker = new SmartDevice("Loa nhà bếp", "Speaker");

// ---- KIỂM TRA TRẠNG THÁI HỆ THỐNG VÀ XUẤT LOG ----
console.log("\n--- BÁO CÁO TRẠNG THÁI THIẾT BỊ SAU XUẤT XƯỞNG ---");
console.log(livingRoomLamp);
console.log(bedroomAC);
console.log(kitchenSpeaker);