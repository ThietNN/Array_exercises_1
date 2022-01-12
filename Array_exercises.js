function Bai1() {
    let a = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let m = " "
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= 10) {
            m += a[i] + " ,";
        }
    }
    alert(m);
}
function Bai2() {
    let a = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let max = a[0]
    let i=0
    for (i; i < a.length; i++) {
        if (a[i] >= max) {
            max = a[i];
        }
    }
    alert("max = " + max + " tại vị trí " + i);
}
function Bai3() {
    let a = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let max = a[0]
    let i=0
    for (i; i < a.length; i++) {
        if (a[i] >= max) {
            max = a[i];
        }
    }
    let total = 0;
    for (i;i<a.length;i++){
        total += a[i];
    }
    let average = total / 10;
    alert("max = " + max + " trung bình cộng của dãy số = " + average);
}
function Bai4(){
    let a = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let m = 0;
    let n = a.length -1;
    for(m;m<(a.length/2);){
        b = a[m];
        c = a[n];
        a[m] = c;
        a[n] = b;
        m++;
        n--;
    }
    console.log(a);
    alert(a.join(","));
}
function Bai5(){
    let a = [5, -6, 7, -8, 9, -10, 11, -12, 13, -14];
    let count = 0;
    for (let i =0;i<a.length;i++){
        if(a[i]<0){
            count += 1;
        }
    }
    alert("Trong chuỗi có " + count + " số nguyên âm")

}
function Bai6(){
    let a = [];
    a[0] = Number(prompt("Nhập số đầu tiên trong chuỗi"));
    a[1] = Number(prompt("Nhập số thứ hai trong chuỗi"));
    a[2] = Number(prompt("Nhập số thứ ba trong chuỗi"));
    a[3] = Number(prompt("Nhập số thứ tư trong chuỗi"));
    a[4] = Number(prompt("Nhập số thứ năm trong chuỗi"));
    a[5] = Number(prompt("Nhập số thứ sáu trong chuỗi"));
    a[6] = Number(prompt("Nhập số thứ bảy trong chuỗi"));
    a[7] = Number(prompt("Nhập số thứ tám trong chuỗi"));
    a[8] = Number(prompt("Nhập số thứ chín trong chuỗi"));
    a[9] = Number(prompt("Nhập số cuối cùng trong chuỗi"));
    let x = Number(prompt("Nhập số để kiểm tra vị trí"));

    for(let i=0;i<a.length;i++){
        if (a[i] === x){
            alert("Số bạn nhập nằm trong chuỗi, ở vị trí " + i);
            break;
        }
    }
}
function Bai7() {
    let a = [];
    a[0] = Number(prompt("Nhập số đầu tiên trong chuỗi"));
    a[1] = Number(prompt("Nhập số thứ hai trong chuỗi"));
    a[2] = Number(prompt("Nhập số thứ ba trong chuỗi"));
    a[3] = Number(prompt("Nhập số thứ tư trong chuỗi"));
    a[4] = Number(prompt("Nhập số thứ năm trong chuỗi"));
    a[5] = Number(prompt("Nhập số thứ sáu trong chuỗi"));
    a[6] = Number(prompt("Nhập số thứ bảy trong chuỗi"));
    a[7] = Number(prompt("Nhập số thứ tám trong chuỗi"));
    a[8] = Number(prompt("Nhập số thứ chín trong chuỗi"));
    a[9] = Number(prompt("Nhập số cuối cùng trong chuỗi"));
    let x = Number(prompt("Nhập số để xóa trong chuỗi"));

    for(let i=0;i<a.length;i++){
        if (a[i] === x){
            for(i;i<a.length-1;i++){
            a[i]=a[i+1];
            }
            a[a.length-1] = 0;
        }
    }
    alert("Chuỗi bạn vừa nhập là: " + a.join(", "))
}
function Bai8(){
    let a = [];
    a[0] = Number(prompt("Nhập số đầu tiên trong chuỗi"));
    a[1] = Number(prompt("Nhập số thứ hai trong chuỗi"));
    a[2] = Number(prompt("Nhập số thứ ba trong chuỗi"));
    a[3] = Number(prompt("Nhập số thứ tư trong chuỗi"));
    a[4] = Number(prompt("Nhập số thứ năm trong chuỗi"));
    a[5] = Number(prompt("Nhập số thứ sáu trong chuỗi"));
    a[6] = Number(prompt("Nhập số thứ bảy trong chuỗi"));
    a[7] = Number(prompt("Nhập số thứ tám trong chuỗi"));
    a[8] = Number(prompt("Nhập số thứ chín trong chuỗi"));
    a[9] = Number(prompt("Nhập số cuối cùng trong chuỗi"));

    for (let j=0;j<a.length/2;j++) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] < a[i + 1]) {
                b = a[i];
                c = a[i + 1];
                a[i] = c;
                a[i + 1] = b;
            }
        }
    }
    alert("Chuỗi bạn vừa nhập, sắp xếp theo thứ tự giảm dần là: " + a.join(", "))
}
function Bai9(){
    let a = [];
    a[0] = Number(prompt("Nhập số đầu tiên trong chuỗi thứ nhất"));
    a[1] = Number(prompt("Nhập số thứ hai trong chuỗi thứ nhất"));
    a[2] = Number(prompt("Nhập số thứ ba trong chuỗi thứ nhất"));
    a[3] = Number(prompt("Nhập số thứ tư trong chuỗi thứ nhất"));
    a[4] = Number(prompt("Nhập số thứ năm trong chuỗi thứ nhất"));
    a[5] = Number(prompt("Nhập số thứ sáu trong chuỗi thứ nhất"));
    a[6] = Number(prompt("Nhập số thứ bảy trong chuỗi thứ nhất"));
    a[7] = Number(prompt("Nhập số thứ tám trong chuỗi thứ nhất"));
    a[8] = Number(prompt("Nhập số thứ chín trong chuỗi thứ nhất"));
    a[9] = Number(prompt("Nhập số cuối cùng trong chuỗi thứ nhất"));
    let b = [];
    b[0] = Number(prompt("Nhập số đầu tiên trong chuỗi thứ hai"));
    b[1] = Number(prompt("Nhập số thứ hai trong chuỗi thứ hai"));
    b[2] = Number(prompt("Nhập số thứ ba trong chuỗi thứ hai"));
    b[3] = Number(prompt("Nhập số thứ tư trong chuỗi thứ hai"));
    b[4] = Number(prompt("Nhập số thứ năm trong chuỗi thứ hai"));
    b[5] = Number(prompt("Nhập số thứ sáu trong chuỗi thứ hai"));
    b[6] = Number(prompt("Nhập số thứ bảy trong chuỗi thứ hai"));
    b[7] = Number(prompt("Nhập số thứ tám trong chuỗi thứ hai"));
    b[8] = Number(prompt("Nhập số thứ chín trong chuỗi thứ hai"));
    b[9] = Number(prompt("Nhập số cuối cùng trong chuỗi thứ hai"));

    c = a.concat(b);

    alert("20 số bạn vừa nhập là " + c.join(", "))
}