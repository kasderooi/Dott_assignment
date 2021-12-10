# node map_generator/dist/map_generator.js $1 $2 > test_cases
# cat test_cases | node ts_implementation/dist/main.js
echo "1
3 4
0001
0011
0110" | node dist/main.js