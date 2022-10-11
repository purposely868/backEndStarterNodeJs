@echo off
chcp 65001
"c:\Program Files\MongoDB\Tools\100\bin\mongoimport.exe" --uri="mongodb://localhost:27017/AdatbázisNeve" --collection=TáblaNeve1 --drop --file=db_1.json --jsonArray
"c:\Program Files\MongoDB\Tools\100\bin\mongoimport.exe" --uri="mongodb://localhost:27017/AdatbázisNeve" --collection=TáblaNeveN --drop --file=db_N.json --jsonArray
"c:\Program Files\MongoDB\Tools\100\bin\mongoimport.exe" --uri="mongodb://localhost:27017/AdatbázisNeve" --collection=idcounters --drop --file=db_id_counter.json --jsonArray
echo PLEASE KILL AND RESTART YOUR BACKEND SERVER DEV TASK IF RUNNING!
PAUSE