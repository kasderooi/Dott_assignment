const fs = require('fs');
const readline = require('readline');
import { Map, input_check } from "./Map";

async function read_by_line(): Promise<string[]> {
	const filestream = fs.createReadStream( '/dev/stdin' );
	const rl = readline.createInterface({ input: filestream, crlfDelay: Infinity });
	let ret: string[] = [];
	for await (const line of rl ) {
		ret.push(line);
	}
	return ret;
}

function input_to_map( i, line: string, subject: Map ) {
	let split;

	if ( line.length != subject.get_j() )
		throw Error("Map error: amount of bits differ from mapsize");
	split = line.split("", subject.get_i());
	for ( let j = 0; j < subject.get_j(); j++ ) {
		subject.set_point( i, j, input_check( line[j], 0, 0 ) );
	}
}

const main = async () => {
	let infile = await read_by_line();
	let	line_index = 0;
	try {
		let nbroftest =	Number( infile[line_index++] );
		input_check( 1, 1000, Math.round( nbroftest ) );
		let map_array: Map[] = [];
		let output_array: Map[] = [];
		for ( let test = 0; test < nbroftest; test++ ) {
			let	line: string  = infile[line_index++];
			map_array[test] = new Map( line );
			output_array[test] = new Map( line );
			for ( let i = 0; i < map_array[test].get_i(); i++ ) {
				line = infile[line_index++];
				input_to_map( i, line, map_array[test] );
			}
			output_array[test].calculate_distance( map_array[test] );
			console.log( "\ntest: ", test + 1 );
			output_array[test].print_map();
		}
	} catch ( error ) {
		console.log( error.message );
	}
	
}
main()