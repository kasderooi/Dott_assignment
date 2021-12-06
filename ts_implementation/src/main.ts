import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

class Map {
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

	public print_map() {
		for ( let i = 0; i < this._x; i++ ) {
			console.log( this._map[i] );
		}
	}

}

const rl = readline.createInterface({ input, output });

const read_line  = ( ) => {
	return new Promise((resolve) => {
		rl.question('', (answer) => {
		resolve(answer)
		})
	})
}

const main = async () => {
	var nbroftest =	Number ( await read_line() );
	var	line:string  = await read_line() as string;
	var mapsize = line.split(" ");
	var y = Number ( mapsize[0] );
	var x = Number ( mapsize[1] );
	let first = new Map( x, y );
	mapsize.print_map();
	console.log( nbroftest + nbroftest );
	console.log( x + y );
	rl.close()
}

main()