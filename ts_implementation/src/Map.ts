export class Map {
	private _x;
	private _y;
	private _map;
	
	constructor( x, y ) {
		this._x = x;
		this._y = y;
		this._map = [];
		for ( let i = 0; i < x; i++ ) {
			this._map[i] = [];
			for ( let j = 0; j < y; j++) {
				this._map[i][j] = 0;
			}
		}
	}

	get_x() {
		return this._x;
	}
	get_y() {
		return this._y;
	}
	set_x( x ) {
		this._x = x;
	}
	set_y( y ) {
		this._y = y;
	}
	set_point( x, y, value ) {
		this._map[x][y] = value;
	}
	get_point( x, y ) : number {
		console.log(this._map[x]);
		return 1;
	}
	print_map() {
		for ( let i = 0; i < this._x; i++ ) {
			console.log( this._map[i] );
		}
	}
	calculate_distance( input_map: Map ) {
		var distance, horizontal, vertical;
		
		for (let x = 0; x < input_map.get_x(); x++) {
			for (let y = 0; y < input_map.get_y(); y++) {
				horizontal = space_horizontal( input_map, x, y );
				//vertical = space_vertical( input_map, x, y );
				distance = horizontal < vertical ? horizontal : vertical;
				this.set_point( x, y, distance );
			}
		}
	}

}

function space_vertical( map: Map, x, y ) {
	var buf = map.get_y();

	if ( map.get_point( x, y ) == 1 )
		return 0;
	for ( let y_i = 0; y_i < map.get_y(); y_i++ ) {
		if ( y_i < y && map.get_point( x, y_i ) == 1  && buf > y - y_i )
			buf = y - y_i;
		if ( y_i == y )
			y_i++;
		if ( y_i > y && map.get_point( x, y_i ) == 1  && buf > y_i - y )
			buf = y_i - y;
	}
	return buf;
}

function space_horizontal( map: Map, x, y ) {
	var buf = map.get_x();

	if ( map.get_point( x, y ) == 1 )
		return 0;
	for ( let x_i = 0; x_i < map.get_x(); x_i++ ) {
		if ( x_i < x && map.get_point( x_i, y ) == 1  && buf > (x - x_i) )
			buf = x - x_i;
		if ( x_i == x )
			x_i++;
		if ( x_i >= this._x )
			return buf;
		if ( x_i > x && map.get_point( x_i, y ) == 1  && buf > (x_i - x) )
			buf = x_i - x;
	}
	return buf;
}
