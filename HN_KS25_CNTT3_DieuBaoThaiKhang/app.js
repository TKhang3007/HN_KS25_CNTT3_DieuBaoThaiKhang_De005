let employees =[
{ employeeCode: "EMP-001", fullName: "Ngô Thanh Tùng",
department: "Phòng Kỹ Thuật",
age: 28, experienceYears: 5 },
{ employeeCode: "EMP-002", fullName: "Hồ Thị Thu",
department: "Phòng Nhân Sự",
age: 35, experienceYears: 10 },
{ employeeCode: "EMP-003", fullName: "Mai Quốc Việt",
department: "Phòng Kỹ Thuật",
age: 24, experienceYears: 1 }
];

function hienThiDanhSach(employees) {
    if (employees == "") {
        console.log("Danh sach nhan vien trong");
        return;
    }
    total = 0;
    // console.log(`${"STT"<5} | ${"Ma nhan vien"<5} ${"Ho ten"<5}`);
    for (let i = 0; i < employees.length; i++) {
        console.log(`${i+1}. ${employees[i].employeeCode} - ${employees[i].fullName} - ${employees[i].department}
Tuoi: ${employees[i].age} | ${employees[i].department}`);
        total += 1;
    }
    console.log(`Tong: ${total} nhan vien`);
}

function maNhanVien(employees, maKiemTra) {
    let maNhap = maKiemTra;
    if (maNhap == "") {
        return "t";
    }
    if (maNhap < 6) {
        return "d";
    }

    if (maNhap.includes(' ')) {
        return "c";
    }

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].employeeCode == maNhap) {
            return 1;
        }
    }

    return maNhap;
}


function kiemTraRong(chuoiNhap) {
    let kiemTra = chuoiNhap.trim();

    if (kiemTra == "") {
        return 0;
    }

    return 1;
}

function timNhanVien(employee, nhanVienCanTim) {
    for (let i = 0; i < employee.length; i++) {
        if (employee[i].employeeCode == nhanVienCanTim) {
            return i;
        }
    }
    return -1;
}

function themNhanVien(employee) {
    let inputMaNhanVien = prompt("Nhap ma nhan vien: ").trim().toLowerCase();

    let maSauKiemTra = maNhanVien(employee, inputMaNhanVien);
    if (!(inputMaNhanVien.startsWith("EMP-"))) {
        console.log("Loi: Sai tien to 'EMP-'");
        return;
    }
    if (maSauKiemTra == "t") {
        console.log("Loi: Chua nhap ma nhan vien");
        return;
    } else if (maSauKiemTra == "d") {
        console.log("Loi: Do dai nho hon 6 ky tu");
        return;
    } else if (maSauKiemTra == 1) {
        console.log("Loi: Ma nhan vien da ton tai'");
        return;
    }

    let inputHoTen = prompt("Nhap ho ten: ");
    let kiemTraTen = kiemTraRong(inputHoTen);

    let check = true;
    while (check) {
        if (kiemTraTen == 0) {
            console.log("Khong duoc de trong");
            continue;
        }
        if (kiemTraTen == 1) {
            check = false;
        }
    }
    let inputPhongBan = prompt("Nhap phong ban: ");
    let kiemTraPhongBan = kiemTraRong(inputPhongBan);

    check = true;
    while (check) {
        if (kiemTraPhongBan == 0) {
            console.log("Khong duoc de trong");
            continue;
        }
        if (kiemTraPhongBan == 1) {
            check = false;
        }
    }
    check = true;
    let inputTuoi = Number(prompt("Nhap tuoi: "));
    while (check) {
        if (inputTuoi < 18 || inputTuoi> 60) {
            console.log("Loi: Ngoai pham vi 18 - 60");
            continue;
        }
        if (inputTuoi >= 18 || inputTuoi <= 60) {
            check = false;
        }
    }
    check = true;
    let inputNamKinhNghiem = Number(prompt("Nhap so nam kinh nghiem: "));
    while (check) {
        if (inputNamKinhNghiem < 0 || inputNamKinhNghiem> 40) {
            console.log("Loi: Ngoai pham vi 18 - 60");
            continue;
        }
        if (inputNamKinhNghiem >= 0 || inputTuoi <= 40) {
            check = false;
        }
    }

    let nhanVienMoi = {
        employeeCode: inputMaNhanVien, fullName: inputHoTen,
        department: inputPhongBan,
        age: inputTuoi, experienceYears: inputNamKinhNghiem
    }

    employees.push(nhanVienMoi);
}

function xoaNhanVien(employee) {
    let inputMaNhanVienCanXoa = prompt("Nhap ma nhan vien can xoa: ").trim();
    let nhanVien = timNhanVien(employee, inputMaNhanVienCanXoa);

    if (nhanVien == -1) {
        console.log(`Khong tim thay nhan vien co ma ${inputMaNhanVienCanXoa}`);
        return;
    }

    let xacNhanXoa = prompt("Co xac nhan muon xoa (Y/N): ").trim().toUpperCase();

    if (xacNhanXoa == "N" || xacNhanXoa === null) {
        console.log(`Da huy thao tac xoa con ${employee.length} nhan vien`);
        return;
    }
    if (xacNhanXoa == "Y") {
        employee.splice(employee[nhanVien], 1);
        console.log(`Xoa thanh cong con ${employee.length} nhan vien`);
        return;
    }
}

function menu() {
    let choice;
    do {
        choice = prompt(`HỆ THỐNG QUẢN LÝ NHAN VIEN CÔNG TY SKYTECH

1. Hiển thị danh sách nhân viên
2. Thêm nhân viên mới
3. Cập nhật thông tin nhân viên
4. Xoa nhân viên
5. Tìm kiếm nhân viên theo phòng ban
0. Thoát chương trình

Vui lòng nhập lựa chọn của bạn (0 - 5):`);

    if (choice === null) {
        continue;
    }
    choice = Number(choice);
    switch (choice) {
        case 1:
            hienThiDanhSach(employees);
            break;
        case 2:
            themNhanVien(employees);
            break;
        case 3:
            console.log("case3");
            break;
        case 4:
            xoaNhanVien(employees);
            break;
        case 5:
            console.log("case5");
            break;
        case 0:
            console.log("Tam biet, ket thuc chuong trinh");
            break;
    
        default:
            console.log("Khong hop le vui long nhap lai");
            continue;
    }
    } while (choice !== 0);
    
}

menu()