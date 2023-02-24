const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Shopee",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});


function TotNhat_Day(maCH){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select top 10 sp.MaSP, sp.TenSP, ctdh.SoSao, DAY(ctdh.NgayDG) as ngay from SanPham sp inner join  CuaHang ch on sp.MaCH = ch.MaCH and ch.MaCH = 1 inner join CT_DonHang ctdh on ctdh.MaSP = sp.MaSP and DAY(ctdh.NgayDG) = 19", function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function TotNhat_Month(maCH){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select top 10 sp.MaSP, sp.TenSP, ctdh.SoSao, MONTH(ctdh.NgayDG) as thang from SanPham sp inner join  CuaHang ch on sp.MaCH = ch.MaCH and ch.MaCH = 1 inner join CT_DonHang ctdh on ctdh.MaSP = sp.MaSP and MONTH(ctdh.NgayDG) = 8", function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function TotNhat_Year(maCH){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select top 10  sp.MaSP, sp.TenSP, ctdh.SoSao, YEAR(ctdh.NgayDG) as nam from SanPham sp inner join  CuaHang ch on sp.MaCH = ch.MaCH and ch.MaCH = 1 inner join CT_DonHang ctdh on ctdh.MaSP = sp.MaSP and YEAR(ctdh.NgayDG) = 2020", function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function TotNhat_All(maCH){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select top 10 sp.MaSP, sp.TenSP, ctdh.SoSao from SanPham sp inner join  CuaHang ch on sp.MaCH = ch.MaCH and ch.MaCH = 1 inner join CT_DonHang ctdh on ctdh.MaSP = sp.MaSP", function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

module.exports = {TotNhat_Day, TotNhat_Month, TotNhat_Year, TotNhat_All};