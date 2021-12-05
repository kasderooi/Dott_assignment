#include "Map.hpp"

Map::Map( void ) : _x( 0 ), _y( 0 ), _map( NULL ) {
	return ;
}

Map::Map( int x, int y ) : _x( x ), _y( y ) {
	this->generate_map();
	return ;
}

Map::~Map( void ) {
	if ( _map != NULL ) {
		for ( int i = 0; i <= _x; i++ )
			delete _map[i];
		delete _map;
	}
	return ;
}

Map::Map( const Map& original ) {
	*this = original;
	return ;
}

Map& Map::operator=( const Map& original ) {
	if ( _map != NULL ) {
		for ( int i = 0; i <= _x; i++ )
			delete _map[i];
		delete _map;
	}
	if (this != &original){
		_x = original._x;
		_y = original._y;
		if ( original._map != NULL )
			generate_map();
		for ( int i = 0; i <= _x; i++ )
			for ( int j = 0; j <= _y; j++ )
				_map[i][j] = original._map[i][j];
	}
	return *this;
}

int	Map::get_x( void ) {
	return this->_x;
}

int	Map::get_y( void ) {
	return this->_y;
}

void	Map::set_x( int x ) {
	this->_x = x;
}

void	Map::set_y( int y ) {
	this->_y = y;
}

void Map::generate_map( void ) {
	_map = new int*[_x];
	for ( int i = 0; i <= _x; i++ )
		_map[i] = new int[_y];
	for ( int i = 0; i <= _x; i++ )
		for ( int j = 0; j <= _y; j++ )
			_map[i][j] = 0;
}

int Map::get_point( int x, int y ) {
	return _map[x][y];
}

void Map::set_point( int x, int y, int value ) {
	_map[x][y] = value;
}
