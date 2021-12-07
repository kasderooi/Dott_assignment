import { stdin, stdout } from 'process';

export class Map {
	private _x: number;
	private _y: number;
	private _map: number[][];
	
	constructor( line: string ) {
		const split = line.split(" ");
		const x = Number ( split[0] );
		const y = Number ( split[1] );

		if ( x < 1 || x > 182 || y < 1 || y > 182 )
			throw Error("Input error");
		this._x = x;
		this._y = y;
		this._map = [];
		for ( let i = 0; i <= this._x; i++ ) {
			this._map[i] = [];
			for ( let j = 0; j <= this._y; j++) {
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
	set_point( x, y, value ) {
		this._map[x][y] = value;
	}
	get_point( x, y ) : number {
		let ret: number = this._map[x][y] as number;
		return ret;
	}
	print_map() {
		for ( let i = 0; i < this._x; i++ ) {
			for ( let j = 0; j < this._y; j++ ) {
				process.stdout.write( String( this._map[i][j] ) );
			}
			process.stdout.write( "\n" );

		}
	}
	calculate_distance( input_map: Map ) {
		let distance, horizontal, vertical;
		let x = 0;
		for (let x = 0; x < input_map.get_x(); x++) {
			for (let y = 0; y <= input_map.get_y() - 1; y++) {
				horizontal = space_horizontal( input_map, x, y );
				vertical = space_vertical( input_map, x, y );
				distance = horizontal < vertical ? horizontal : vertical;
				this.set_point( x, y, distance );
			}
		}
	}

}

function space_vertical( map: Map, x, y ) {
	let buf = map.get_y();

	if ( map.get_point( x, y ) == 1 )
		return 0;
	for ( let y_i = 0; y_i < map.get_y(); y_i++ ) {
		if ( y_i < y && map.get_point( x, y_i ) == 1  && buf > y - y_i )
			buf = y - y_i;
		if ( y_i == y)
			y_i++;
		if ( y_i > y && map.get_point( x, y_i ) == 1  && buf > y_i - y )
			buf = y_i - y;
	}
	return buf;
}

function space_horizontal( map: Map, x, y ) {
	let buf = map.get_x();

	if ( map.get_point( x, y ) == 1 )
		return 0;
	for ( let x_i = 0; x_i < map.get_x(); x_i++ ) {
		if ( x_i < x && map.get_point( x_i, y ) == 1  && buf > (x - x_i) )
			buf = x - x_i;
		if ( x_i == x )
			x_i++;
		if ( x_i > x && map.get_point( x_i, y ) == 1  && buf > (x_i - x) )
			buf = x_i - x;
	}
	return buf;
}
