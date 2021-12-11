export class Map {
	private _height: number
	private _width: number
	private _map: number[][]
	
	constructor( y, x ) {
		this._height = y
		this._width = x

		this._map = []
		for ( let y = 0; y <= this._height; y++ ) {
			this._map[y] = []
			for ( let x = 0; x <= this._width; x++ )
				this._map[y][x] = - 1
		}
	}

	get_height() {
		return this._height
	}
	
	get_width() {
		return this._width
	}

	set_point( y, x, value ) {
		this._map[y][x] = value
	}

	get_point( y, x ) : number {
		let ret: number = this._map[y][x] as number
		return ret
	}

	print_map() {
		for ( let y = 0; y < this._height; y++ ) {
			for ( let x = 0; x < this._width; x++ ) {
				process.stdout.write( String( this._map[y][x] ) );
				process.stdout.write( String( " " ) )
			}
			process.stdout.write( "\n" )
		}
	}

	walk_map( y_start, x_start ) {
		for ( let y = 0; y < this.get_height(); y++ ) {
			for ( let x = 0; x <= this.get_width() - 1; x++ ) {
				let distance = get_distance( y_start, x_start, y, x )
				if ( this.get_point( y, x ) < 0 || distance < this.get_point( y, x ) )
					this.set_point( y, x, distance )
			}
		}
	}

	calculate_distance( input_map: Map ) {
		for ( let y = 0; y < input_map.get_height(); y++ ) {
			for ( let x = 0; x <= input_map.get_width() - 1; x++ ) {
				if ( input_map.get_point( y, x ) == 1 ) {
					this.set_point( y, x, 0 )
					this.walk_map( y, x )
				}
			}
		}
	}
}

function get_distance( y1, x1, y2, x2 ) : number {
	return Math.abs( y1 - y2 ) + Math.abs( x1 - x2 )
}

export function input_check( value, min, max ) : number {
	if ( isNaN(value) )
		throw Error("Input error: not a number")
	if ( min && value <= 0 )
		throw Error("Input error: value to low")
	if ( min && value > max )
		throw Error("Input error: value to high")
	if ( !min && !max && (value < 0 || value > 1) )
		throw Error("Input error: value is not 0 or 1")
	return Number( value );
}
