#include "Map.hpp"
#include "utils.hpp"
#include <string>

int	main( void ) {
	std::string		line;
	std::string		test_map = "0001\n0011\n0110";
	// Map				input_map;
	// Map				ret_map;
	int				t_cases = 0;
	// int				line_count = 0;

	t_cases = 1;
	line = "3 4";
	// if ( string_to_map( line, &input_map ) )
	// 	return 2;
	// input_map.generate_map();
	// while ( line_count < input_map.get_x() ) {
	// 	getline( std::cin, line );
	// 	if ( set_line( line, &input_map ) )
	// 		return 1;
	// 	line_count++;
	// }
	// ret_map = calculate_whitespace( &input_map );
	// print_map( &ret_map );
	std::cout << t_cases << std::endl << line << std::endl << test_map <<std::endl; //<< test_map << std::endl;
	return (0);
}
