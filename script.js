// Panggil data dari server menggunakan AJAX
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'get_data.php', true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            var data = JSON.parse(xhr.responseText);
            // Panggil fungsi untuk menampilkan data ke dalam tabel
            displayData(data);
        } else {
            console.error('Gagal mengambil data.');
        }
    };
    xhr.onerror = function() {
        console.error('Koneksi error.');
    };
    xhr.send();
}

// Panggil fungsi untuk mengambil data saat halaman dimuat
window.onload = getData;



// Fungsi untuk menampilkan data ke dalam tabel
function displayData(data) {
    var tableBody = $('#data-body');
    tableBody.empty(); // Kosongkan isi tabel sebelum menambahkan data baru

    // Iterasi data dan tambahkan ke dalam tabel
    $.each(data, function(index, member) {
        var row = '<tr>' +
                    '<td>' + member.nama + '</td>' +
                    '<td>' + member.umur + '</td>' +
                    '<td>' + member.alamat + '</td>' +
                    '<td><button onclick="deleteData(' + member.id + ')">Hapus</button></td>' +
                  '</tr>';
        tableBody.append(row);
    });
}



// Fungsi untuk menghapus data
function deleteData(id) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'delete_data.php?id=' + id, true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            // Setelah data dihapus, panggil kembali fungsi untuk menampilkan data
            getData();
        } else {
            console.error('Gagal menghapus data.');
        }
    };
    xhr.onerror = function() {
        console.error('Koneksi error.');
    };
    xhr.send();
}
