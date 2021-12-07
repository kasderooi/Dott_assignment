import * as readline from 'readline';
import { stdin as input } from 'process';
import { Map } from "./Map";

const rl = readline.createInterface( input );

const read_line  = ( ) => {
	return new Promise((resolve) => {
		rl.on('line', (answer) => {
		resolve(answer)
		})
	})
}

function input_to_map( i, line: string, subject: Map ) {
	let split;

	if ( line.length != subject.get_y() )
		throw Error("Map error: amount of bits differ from mapsize");
	split = line.split("", subject.get_x());
	for ( let j = 0; j < subject.get_y(); j++ ) {
		subject.set_point( i, j, line[j] );
	}
}

const main = async () => {
	let nbroftest =	Number ( await read_line() );
	console.log( nbroftest );

	let map_array: Map[] = [];
	let output_array: Map[] = [];

	try {
		for ( let test = 0; test < nbroftest; test++ ) {
			let	line: string  = await read_line() as string;
			map_array[test] = new Map( line );
			output_array[test] = new Map( line );
			for ( let i = 0; i < map_array[test].get_x(); i++ ) {
				line = await read_line() as string;
				input_to_map( i, line, map_array[test] );
			}
			output_array[test].calculate_distance( map_array[test] );
			console.log( "\ntest: ", test + 1 );
			output_array[test].print_map();
		}
	} catch ( error ) {
		console.log( error.message );
	}
	rl.close();
}
main()