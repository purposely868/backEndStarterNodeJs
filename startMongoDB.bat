if not exist "c:\data\" mkdir "c:\data"
if not exist "c:\data\db" mkdir "c:\data\db"
"c:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" --dppath="c:\data\db"
"c:\Program Files\MongoDB\Server\6.0\bin\mongod.exe"