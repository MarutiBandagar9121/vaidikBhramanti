<?php
if (isset($_GET['bdownload'])) {
    $file = '../images/MarutiBandagar.pdf';

    // Set headers for file download
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . basename($file) . '"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    readfile($file); // Read and output the file contents
    exit;
}
?>