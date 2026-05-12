param(
  [string]$Source = "C:\Users\keato\ClaudeProjects\TSO\UGC",
  [string]$Dest   = "$PSScriptRoot\..\public\videos",
  [string]$Ffmpeg = "C:\Users\keato\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.1-full_build\bin\ffmpeg.exe"
)

# Map of source filename -> output slug (no extension). Edit here if you add more.
$map = @{
  "Fall in Love .MOV"                                       = "wedding-fall-in-love"
  "L+R (v2).MOV"                                            = "wedding-l-and-r"
  "REHEARSAL DINNER.mov"                                    = "wedding-rehearsal-dinner"
  "THE GIRLS WITH TEXT .MOV"                                = "wedding-the-girls"
  "copy_5F22ADBD-E4EA-488F-8DF7-5CFF9CA72023.MOV"           = "ugc-01"
  "copy_BBDA89E0-10EF-4571-90F5-AE480C443B5F.MOV"           = "ugc-02"
  "3750e2b8d5b04ed9a3f920d30a491f27.MOV"                    = "ugc-03"
  "39cca6ade25249d1a6dc9ba1b4f17db6 2.MOV"                  = "ugc-04"
  "7b5c6ddc8a904f109bcc0851d704164c.MOV"                    = "ugc-05"
  "952cb0c0420340a29c8a4dcb88a0ba4b.MOV"                    = "ugc-06"
}

New-Item -ItemType Directory -Force -Path $Dest | Out-Null

foreach ($key in $map.Keys) {
  $in  = Join-Path $Source $key
  $out = Join-Path $Dest ($map[$key] + ".mp4")
  if (-not (Test-Path $in)) { Write-Warning "missing: $in"; continue }
  if (Test-Path $out) { Write-Host "skip (exists): $out"; continue }
  Write-Host "transcoding -> $out"
  & $Ffmpeg -hide_banner -loglevel error -y -i $in `
    -c:v libx264 -preset medium -crf 22 -pix_fmt yuv420p `
    -vf "scale='if(gt(iw,1080),1080,iw)':-2" `
    -c:a aac -b:a 128k -movflags +faststart $out
}

Write-Host "done."
