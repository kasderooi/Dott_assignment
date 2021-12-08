#include <iostream>
#include <string>

int	main( int argc, char** argv ) {
	std::string		line;
	std::string		test_map = "0001\n0011\n0110";
	int				t_cases, max_size, x, y;

	if ( argc != 3 )
		return 1;
	t_cases = std::stoi( argv[1] );
	max_size = std::stoi( argv[2] );
	std::cout << t_cases << std::endl;
	for (int t = 0; t < t_cases; t++)
	{
		x = ( arc4random() % max_size ) + 1;
		y = ( arc4random() % max_size ) + 1;
		std::cout << x << " " << y << std::endl;
		for ( int i = 0; i < x; i++ ) {
			for ( int j = 0; j < y; j++ ) {
				std::cout << arc4random() % 2;
			}
			std::cout << std::endl;
		}
	}
	return 0;
}
