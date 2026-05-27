Add-Type -AssemblyName System.Drawing
$imagePath = "F:\Antigravity\project\Jin_oriental\public\images\logo.png"
$image = [System.Drawing.Image]::FromFile($imagePath)
$bmp = New-Object System.Drawing.Bitmap($image)

for ($x = [int]($bmp.Width * 0.3); $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $p = $bmp.GetPixel($x, $y)
        
        # Only process non-transparent pixels
        if ($p.A -gt 0) {
            # Check if it's white-ish (not blue). Blue text has low Red.
            if ($p.R -gt 100 -and $p.G -gt 100 -and $p.B -gt 100) {
                # Change to dark gray (#222222) while keeping original alpha
                $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($p.A, 34, 34, 34))
            }
        }
    }
}

$outputPath = "F:\Antigravity\project\Jin_oriental\public\images\logo_black.png"
$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$image.Dispose()
$bmp.Dispose()
