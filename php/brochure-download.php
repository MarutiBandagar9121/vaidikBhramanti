<?php
if (isset($_GET['bdownload'])) {
    $file = '../images/MarutiBandagar.pdf';

    // Validate file path
    if (file_exists($file) && is_readable($file)) {
        // Set headers for file download
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . basename($file) . '"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($file));

        // Output the file contents
        readfile($file);
        exit;
    } else {
        // File not found or inaccessible
        http_response_code(404);
        echo "File not found or inaccessible.";
        exit;
    }
}
?>