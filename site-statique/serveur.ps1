# Mini serveur web sans dependance (PowerShell, inclus dans Windows).
# Sert le dossier "site" sur http://localhost:8080 et ouvre le navigateur.
param([int]$Port = 8080)

$racine = Join-Path $PSScriptRoot 'site'
$types = @{
  '.html' = 'text/html; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'
  '.css' = 'text/css; charset=utf-8'; '.json' = 'application/json'; '.xml' = 'application/xml'
  '.txt' = 'text/plain; charset=utf-8'; '.svg' = 'image/svg+xml'; '.png' = 'image/png'
  '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'; '.webp' = 'image/webp'; '.gif' = 'image/gif'
  '.ico' = 'image/x-icon'; '.pdf' = 'application/pdf'; '.woff2' = 'font/woff2'; '.mp4' = 'video/mp4'
}

$serveur = New-Object System.Net.HttpListener
$serveur.Prefixes.Add("http://localhost:$Port/")
try { $serveur.Start() } catch {
  Write-Host "Impossible de demarrer sur le port $Port (deja utilise ?)." -ForegroundColor Red
  Read-Host 'Appuyez sur Entree pour fermer'; exit 1
}

$url = "http://localhost:$Port/"
Write-Host "Site disponible sur $url"
Write-Host 'Fermez cette fenetre pour arreter le serveur.'
Start-Process $url

function Trouver-Fichier([string]$chemin) {
  $relatif = [Uri]::UnescapeDataString($chemin).TrimStart('/') -replace '/', '\'
  $complet = [IO.Path]::GetFullPath((Join-Path $racine $relatif))
  if (-not $complet.StartsWith($racine)) { return $null }
  foreach ($candidat in @($complet, "$complet.html", (Join-Path $complet 'index.html'))) {
    if (Test-Path $candidat -PathType Leaf) { return $candidat }
  }
  return $null
}

while ($serveur.IsListening) {
  $contexte = $serveur.GetContext()
  $reponse = $contexte.Response
  try {
    $fichier = Trouver-Fichier $contexte.Request.Url.AbsolutePath
    if (-not $fichier) {
      $reponse.StatusCode = 404
      $fichier = Join-Path $racine '404.html'
    }
    $octets = [IO.File]::ReadAllBytes($fichier)
    $type = $types[[IO.Path]::GetExtension($fichier).ToLower()]
    $reponse.ContentType = if ($type) { $type } else { 'application/octet-stream' }
    $reponse.ContentLength64 = $octets.Length
    $reponse.OutputStream.Write($octets, 0, $octets.Length)
  } catch {
    $reponse.StatusCode = 500
  } finally {
    $reponse.Close()
  }
}
