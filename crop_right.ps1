Add-Type -AssemblyName System.Drawing
$imagePath = "F:\Antigravity\project\Jin_oriental\public\images\profile\doctor.png"
$image = [System.Drawing.Image]::FromFile($imagePath)

$newWidth = [int]($image.Width * 0.75) # Keep left 75%
$newHeight = $image.Height

$rect = New-Object System.Drawing.Rectangle(0, 0, $newWidth, $newHeight)
$bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
$graphics = [System.Drawing.Graphics]::FromImage($bmp)
$graphics.DrawImage($image, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)

$image.Dispose()

$bmp.Save($imagePath, [System.Drawing.Imaging.ImageFormat]::Png)

$graphics.Dispose()
$bmp.Dispose()
