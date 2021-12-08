import { get } from "https";

export class Map {
	private _i: number;
	private _j: number;
	private _map: number[][];
	
	constructor( line: string ) {
		const split = line.split(" ");
		this._i = input_check( split[0], 1, 182 );
		this._j = input_check( split[1], 1, 182 );

		this._map = [];
		for ( let i = 0; i <= this._i; i++ ) {
			this._map[i] = [];
			for ( let j = 0; j <= this._j; j++)
				this._map[i][j] = - 1;
		}
	}

	get_i() {
		return this._i;
	}
	
	get_j() {
		return this._j;
	}

	set_point( i, j, value ) {
		this._map[i][j] = value;
	}

	get_point( i, j ) : number {
		let ret: number = this._map[i][j] as number;
		return ret;
	}

	print_map() {
		for ( let i = 0; i < this._i; i++ ) {
			for ( let j = 0; j < this._j; j++ ) {
				process.stdout.write( String( this._map[i][j] ) );
				process.stdout.write( String( " " ) );
			}
			process.stdout.write( "\n" );
		}
	}

	walk_map( i_start, j_start ) {
		for (let i = 0; i < this.get_i(); i++) {
			for (let j = 0; j <= this.get_j() - 1; j++) {
				let distance = get_distance( i_start, j_start, i, j );
				if ( this.get_point( i, j ) < 0 || distance < this.get_point( i, j ) )
					this.set_point( i, j, distance);
			}
		}
	}

	calculate_distance( input_map: Map ) {
		let distance, horizontal, vertical;
		let i = 0;
		for (let i = 0; i < input_map.get_i(); i++) {
			for (let j = 0; j <= input_map.get_j() - 1; j++) {
				if ( input_map.get_point( i, j ) == 1 ) {
					this.set_point( i, j, 0 );
					this.walk_map( i, j );
				}
			}
		}
	}
}

function get_distance( i1, j1, i2, j2 ) : number {
	return Math.abs(i1 - i2) + Math.abs(j1 - j2);
}

export function input_check( value, min, max ) : number {
	if (isNaN(value))
		throw Error("Input error: not a number");
	if (min && value <= 0 )
		throw Error("Input error: value to low");
	if (min && value > max)
		throw Error("Input error: value to high");
	if (!min && !max && (value < 0 || value > 1))
		throw Error("Input error: value is not 0 or 1");
	return Number( value );
}
