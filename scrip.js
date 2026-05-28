class Rectangle {
    constructor(length, width) {
        this.length = parseInt(length);
        this.width = parseInt(width);
    }

    setLength(length) {
        this.length = parseInt(length);
    }

    setWidth(width) {
        this.width = parseInt(width);
    }

    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return (this.length + this.width) * 2;
    }

    draw(canvasId, x, y) {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext("2d");
        
        // Xóa canvas trước khi vẽ lại
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Vẽ hình chữ nhật
        ctx.fillStyle = "#3498db";
        ctx.fillRect(x, y, this.length, this.width);
        ctx.strokeStyle = "#2980b9";
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, this.length, this.width);
    }
}
