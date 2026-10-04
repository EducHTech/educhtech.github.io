@echo off
rem Lance le site EducHTech en local sur n'importe quel ordinateur Windows.
rem Double-cliquer sur ce fichier : installe les dependances au besoin,
rem demarre le serveur de developpement et ouvre http://localhost:4200.

chcp 65001 >nul
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js n'est pas installe.
  echo Installez Node 22 ou plus recent depuis https://nodejs.org puis relancez ce fichier.
  start "" https://nodejs.org
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installation des dependances, premiere fois seulement...
  call npm install
  if errorlevel 1 (
    echo L'installation a echoue.
    pause
    exit /b 1
  )
)

echo Demarrage du site sur http://localhost:4200 ...
echo Fermez cette fenetre pour arreter le serveur.
call npm start -- --open
pause
