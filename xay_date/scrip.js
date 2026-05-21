// Bước 1: Xây dựng lớp MyDate
class MyDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    // Bước 2: Xây dựng các phương thức trả về ngày, tháng, năm (Getter)
    getDay() {
        return this.day;
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return this.year;
    }

    // Bước 3: Xây dựng các phương thức thiết đặt lại giá trị (Setter)
    setDay(day) {
        this.day = day;
    }

    setMonth(month) {
        this.month = month;
    }

    setYear(year) {
        this.year = year;
    }

    // Bước 9: Cài đặt thêm phương thức setDate() để thiết đặt lại toàn bộ ngày, tháng, năm
    setDate(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    // Bước 9: Cài đặt phương thức toString() trả về chuỗi định dạng dd/mm/yyyy
    toString() {
        // Hàm padStart(2, '0') giúp hiển thị số có 2 chữ số (ví dụ: 2 thành '02')
        let d = String(this.day).padStart(2, '0');
        let m = String(this.month).padStart(2, '0');
        let y = this.year;
        return `${d}/${m}/${y}`;
    }
}


// Bước 4: Tạo đối tượng date với ngày: 2, tháng: 2, năm: 2007
let date = new MyDate(2, 2, 2007);

// Bước 5 & 6: Truy cập phương thức và hiển thị ngày, tháng, năm ban đầu
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
console.log(`Ngày ban đầu: ${day}/${month}/${year}`); // Kết quả: 2/2/2007

// Bước 8: Thay đổi ngày tháng năm thành 10/10/2019 bằng các phương thức set lẻ
date.setDay(10);
date.setMonth(10);
date.setYear(2019);
console.log(`Sau khi thay đổi (Bước 8): ${date.getDay()}/${date.getMonth()}/${date.getYear()}`); // Kết quả: 10/10/2019

// Bước 10: Gọi 2 phương thức mới xây dựng (setDate và toString) để kiểm tra
date.setDate(5, 9, 2026); 
console.log(`Sau khi dùng setDate() và toString() (Bước 10): ${date.toString()}`); // Kết quả: 05/09/2026