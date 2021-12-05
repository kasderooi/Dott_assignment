#ifndef UTILS_HPP
#define UTILS_HPP

#include <iostream>
#include <string>
#include "Map.hpp"

int	string_to_map( std::string line, Map *map );
int	set_line( std::string line, Map *map );
void	print_map( Map *map );
Map	calculate_whitespace( Map *input_map );

#endif
