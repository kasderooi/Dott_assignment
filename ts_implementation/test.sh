# node map_generator/dist/map_generator.js $1 $2 > test_cases
# cat test_cases | node ts_implementation/dist/main.js
echo "2
3 4
0001
0011
0110
3 4
0000
0010
0000" | node dist/main.js