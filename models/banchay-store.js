const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Shopee",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});



function getBanChay_Day(maCH){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select top 10 sp.MaSP, sp.TenSP, SUM(ctdh.SoLuong) as BanChay_Day, Day(NgayDG) as thang from SanPham sp inner join CT_DonHang ctdh  on sp.MaSP = ctdh.MaSP  group by sp.MaSP, sp.TenSP, Day(NgayDG), sp.MaCH having Day(NgayDG) = Day(getdate()) and sp.MaCH = "+maCH+"order by BanChay_Day desc", function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function getBanChay_Month(maCH){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select top 10 sp.MaSP, sp.TenSP, SUM(ctdh.SoLuong) as BanChay_Month, month(NgayDG) as thang from SanPham sp inner join CT_DonHang ctdh  on sp.MaSP = ctdh.MaSP  group by sp.MaSP, sp.TenSP, month(NgayDG), sp.MaCH having month(NgayDG) = month(getdate()) and sp.MaCH = "+maCH+" order by BanChay_Month desc", function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function getBanChay_Year(maCH){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select top 10 sp.MaSP, sp.TenSP, SUM(ctdh.SoLuong) as BanChay_Year, year(NgayDG) as thang from SanPham sp inner join CT_DonHang ctdh  on sp.MaSP = ctdh.MaSP  group by sp.MaSP, sp.TenSP, year(NgayDG), sp.MaCH having year(NgayDG) = 2020 and sp.MaCH = "+maCH+" order by BanChay_Year desc", function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function getBanChay(maCH){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select top 10 sp.MaSP, sp.TenSP, SUM(ctdh.SoLuong) as BanChay from SanPham sp inner join CT_DonHang ctdh on sp.MaSP = ctdh.MaSP group by sp.MaSP, sp.TenSP, sp.MaCH having sp.MaCH = "+maCH+" order by BanChay desc", function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}


module.exports = {getBanChay, getBanChay_Month, getBanChay_Year, getBanChay_Day};