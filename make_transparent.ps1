Add-Type -AssemblyName System.Drawing
$file = Get-ChildItem -Path "C:\Users\*\.gemini\antigravity\brain\ab4ce309-8d95-42ab-bcc7-029c98aa3840\media__1779841384141.jpg" | Select-Object -First 1
$image = [System.Drawing.Image]::FromFile($file.FullName)
$bmp = New-Object System.Drawing.Bitmap($image)
$bg = $bmp.GetPixel(0, 0)
$tolerance = 60

for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $p = $bmp.GetPixel($x, $y)
        $diff = [Math]::Max([Math]::Abs($p.R - $bg.R), [Math]::Max([Math]::Abs($p.G - $bg.G), [Math]::Abs($p.B - $bg.B)))
        if ($diff -lt $tolerance) {
            # Basic transparency
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        } else {
            # simple anti-aliasing
            if ($diff -lt ($tolerance + 30)) {
                $alpha = [Math]::Min(255, [int](($diff - $tolerance) / 30.0 * 255.0))
                $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $p.R, $p.G, $p.B))
            }
        }
    }
}
$bmp.Save("F:\Antigravity\project\Jin_oriental\public\images\logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$image.Dispose()
$bmp.Dispose()
