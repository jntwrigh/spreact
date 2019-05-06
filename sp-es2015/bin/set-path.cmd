@echo off

SET SP_HOME=%CD%

FOR /D %%I IN ("%CD%") DO SET _LAST_SEGMENT_=%%~nxI

echo Initial SP_HOME: %SP_HOME%
echo LAST_SEGMENT: %_LAST_SEGMENT_%

if "%_LAST_SEGMENT_%"=="bin" (
  set SP_HOME=%SP_HOME:~0,-4%
)

set OLD_PATH=%PATH%
set NODE_MODULES=%SP_HOME%\node_modules\.bin

echo Setting PATH....
set PATH=%NODE_MODULES%;%SP_HOME%\bin;%PATH%

echo PATH successfully set
echo PATH is %PATH%
