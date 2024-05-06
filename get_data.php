<?php

// Koneksi ke database
$host = 'localhost'; // Ganti dengan host database Anda
$user = 'username'; // Ganti dengan username database Anda
$password = 'password'; // Ganti dengan password database Anda
$database = 'nama_database'; // Ganti dengan nama database Anda

$koneksi = mysqli_connect($host, $user, $password, $database);

// Periksa koneksi
if (mysqli_connect_errno()) {
    echo "Koneksi database gagal: " . mysqli_connect_error();
    exit();
}

// Query untuk mengambil data dari tabel
$query = "SELECT * FROM fam_members";
$result = mysqli_query($koneksi, $query);

// Ubah hasil query menjadi array asosiatif
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Mengembalikan data dalam format JSON
header('Content-Type: application/json');
echo json_encode($data);

// Tutup koneksi
mysqli_close($koneksi);
?>
