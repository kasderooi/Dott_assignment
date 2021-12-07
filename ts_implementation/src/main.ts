import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import { Map } from "./Map";

const rl = readline.createInterface({ input, output });

const read_line  = ( ) => {
	return new Promise((resolve) => {
		rl.question('', (answer) => {
		resolve(answer)
		})
	})
}

function input_to_map( i, line: string, subject: Map ) {
	let split;

	split = line.split("", subject.get_x());
	for ( let j = 0; j < subject.get_y(); j++ ) {
		subject.set_point( i, j, line[j] );
	}
}

const main = async () => {
	var nbroftest =	Number ( await read_line() );
	let map_array: Map[] = [];
	let output_array: Map[] = [];


	for ( let test = 0; test < nbroftest; test++ ) {
		var	line: string  = await read_line() as string;
		var split = line.split(" ");
		var x = Number ( split[0] );
		var y = Number ( split[1] );
		console.log(x, y);

		map_array[test] = new Map( x, y );
		output_array[test] = new Map( x, y );
		// output_array[test].print_map();
		for ( let i = 0; i < map_array[test].get_x(); i++ ) {
			line = await read_line() as string;
			input_to_map( i, line, map_array[test] );
		}
		output_array[test].calculate_distance( map_array[test] );
		output_array[test].print_map();
	}
	rl.close()
}

main()