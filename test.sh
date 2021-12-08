./map_generator/map_generator $1 $2 > test_cases
cat test_cases | node ts_implementation/dist/main.js