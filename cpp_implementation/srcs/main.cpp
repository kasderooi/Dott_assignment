#include "Map.hpp"
#include "utils.hpp"
#include <string>

int	main( void ) {
	std::string		line;
	Map				input_map;
	Map				ret_map;
	int				t_cases = 0;
	int				line_count = 0;

	getline( std::cin, line );
	t_cases = stoi( line );
	getline( std::cin, line );
	if ( string_to_map( line, &input_map ) )
		return 2;
	input_map.generate_map();
	while ( line_count < input_map.get_x() ) {
		getline( std::cin, line );
		if ( set_line( line, &input_map ) )
			return 1;
		line_count++;
	}
	ret_map = calculate_whitespace( &input_map );
	print_map( &ret_map );
	return (0);
}
