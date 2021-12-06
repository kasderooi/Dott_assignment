#include "utils.hpp"

int	string_to_map( std::string line, Map *map ) {
	int x = 0;
	int y = 0;
	unsigned long i = 0;

	while ( i < line.length() && line[i] >= '0' && line[i] <= '9' ) {
		x *= 10;
		x += line[i] - '0';
		i++;
	}
	map->set_x( x );
	while ( i < line.length() && ( line[i] < '0' || line[i] > '9' ) )
		i++;
	if ( map->get_x() <= 0 || map->get_x() > 182 || i == line.length() )
		return 1;
	while ( i < line.length() && line[i] >= '0' && line[i] <= '9' ) {
		y *= 10;
		y += line[i] - '0';
		i++;
	}
	map->set_y( y );
	if ( map->get_y() <= 0 || map->get_y() > 182 )
		return 1;
	return 0;
}

int	set_line( std::string line, Map *map ) {
	static int x = 0;
	for ( int y = 0; y < map->get_y(); y++ ) {
		if ( !line[y] )
			return 1;
		map->set_point( x, y, line[y] - '0' );
	}
	x++;
	return 0;
}

void	print_map( Map *map ) {
	for ( int x = 0; x < map->get_x(); x++ ) {
		for ( int y = 0; y < map->get_y(); y++ )
			std::cout << map->get_point( x, y );
		std::cout << std::endl;
	}
}

int	space_vertical( Map *map, int x, int y ) {
	int buf = map->get_y();

	if ( map->get_point( x, y ) == 1 )
		return 0;
	for ( int y_i = 0; y_i < map->get_y(); y_i++ ) {
		if ( y_i < y && map->get_point( x, y_i ) == 1  && buf > y - y_i )
			buf = y - y_i;
		if ( y_i == y )
			y_i++;
		if ( y_i > y && map->get_point( x, y_i ) == 1  && buf > y_i - y )
			buf = y_i - y;
	}
	return buf;
}

int	space_horizontal( Map *map, int x, int y ) {
	int buf = map->get_x();

	if ( map->get_point( x, y ) == 1 )
		return 0;
	for ( int x_i = 0; x_i < map->get_x(); x_i++ ) {
		if ( x_i < x && map->get_point( x_i, y ) == 1  && buf > x - x_i )
			buf = x - x_i;
		if ( x_i == x )
			x_i++;
		if ( x_i > x && map->get_point( x_i, y ) == 1  && buf > x_i - x )
			buf = x_i - x;
	}
	return buf;
}

Map	calculate_whitespace( Map *input_map ) {
	int distance, horizontal, vertical;
	Map ret_map( input_map->get_x(), input_map->get_y() );
	
	for (int x = 0; x < input_map->get_x(); x++) {
		for (int y = 0; y < input_map->get_y(); y++) {
			horizontal = space_horizontal( input_map, x, y );
			vertical = space_vertical( input_map, x, y );
			distance = horizontal < vertical ? horizontal : vertical;
			ret_map.set_point( x, y, distance );
		}
	}
	return ret_map;
}
