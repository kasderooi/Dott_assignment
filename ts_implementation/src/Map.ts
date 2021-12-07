export class Map {
	private _x: number;
	private _y: number;
	private _map: number[][];
	
	constructor( line: string ) {
		const split = line.split(" ");
		const x = input_check( split[0], 1, 182 );
		const y = input_check( split[1], 1, 182 );

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
		this._map[x][y] = input_check( value, 0, 0 );
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

export function input_check( value, min, max ) : number {
	if (isNaN(value))
		throw Error("Input error: not a number");
	if (min && value < min)
		throw Error("Input error: value to low");
	if (min && value > max)
		throw Error("Input error: value to high");
	if (!min && !max && (value < 0 || value > 1))
		throw Error("Input error: value is not 0 or 1");
	return Number( value );
}

function space_vertical( map: Map, x, y ) {
	let buf = map.get_y();

	if ( map.get_point( x, y ) == 1 )
		return 0;
	for ( let i = 0; i < map.get_y(); i++ ) {
		if ( i < y && map.get_point( x, i ) == 1  && buf > y - i )
			buf = y - i;
		if ( i == y)
			i++;
		if ( i > y && map.get_point( x, i ) == 1  && buf > i - y )
			buf = i - y;
	}
	return buf;
}

function space_horizontal( map: Map, x, y ) {
	let buf = map.get_x();

	if ( map.get_point( x, y ) == 1 )
		return 0;
	for ( let i = 0; i < map.get_x(); i++ ) {
		if ( i < x && map.get_point( i, y ) == 1  && buf > (x - i) )
			buf = x - i;
		if ( i == x )
			i++;
		if ( i > x && map.get_point( i, y ) == 1  && buf > (i - x) )
			buf = i - x;
	}
	return buf;
}
