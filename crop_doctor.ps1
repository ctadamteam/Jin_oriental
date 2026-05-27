Add-Type -AssemblyName System.Drawing
$file = Get-ChildItem -Path "C:\Users\*\.gemini\antigravity\brain\ab4ce309-8d95-42ab-bcc7-029c98aa3840\media__1779845032315.png" | Select-Object -First 1
if (-Not $file) {
    Write-Output "Image not found."
    exit
}

$image = [System.Drawing.Image]::FromFile($file.FullName)

$newWidth = $image.Width
$newHeight = [int]($image.Height * 0.85) # Crop bottom 15% to remove watermark

$rect = New-Object System.Drawing.Rectangle(0, 0, $newWidth, $newHeight)
$bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
$graphics = [System.Drawing.Graphics]::FromImage($bmp)
$graphics.DrawImage($image, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)

$dir = "F:\Antigravity\project\Jin_oriental\public\images\profile"
if (-Not (Test-Path $dir)) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

$outputPath = "$dir\doctor.png"
$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$graphics.Dispose()
$image.Dispose()
$bmp.Dispose()
