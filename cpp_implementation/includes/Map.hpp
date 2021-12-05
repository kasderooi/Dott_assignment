#ifndef MAP_HPP
#define MAP_HPP

#include <iostream>

class Map {

	private:

		int 	_x;
		int 	_y;
		int**	_map;

	public:

	Map( void );
	Map( int x, int y );
	~Map( void );
	Map( const Map& original );

	Map& operator=( const Map& original );

	int get_x( void );
	int get_y( void );
	void set_x( int x );
	void set_y( int y );
	void generate_map ( void );
	void set_point( int x, int y, int value );
	int get_point( int x, int y );

};

#endif
