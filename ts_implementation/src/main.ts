import * as readline from 'readline';
import { stdin as input } from 'process';
import { Map, input_check } from "./Map";

const rl = readline.createInterface({ input })

function input_to_map( y, line: string, subject: Map ) {
	let split: string[];
	if ( line.length != subject.get_width() )
		throw Error("Input error: amount of bits differ from mapsize")
	split = line.split( "", subject.get_height() + 1 );
	for ( let x = 0; x < subject.get_width(); x++ )
		subject.set_point( y, x, input_check( Number( split[x] ), 0, 0 ) )
}

function resolve_data( input_map: Map ) : number {
	let output_map: Map
	output_map = new Map( input_map.get_height(), input_map.get_width() )
	output_map.calculate_distance( input_map )
	output_map.print_map()
	return -1
}

function init_maps( line: string ) : Map {
	let split: string[] = line.split( " " )
	if ( !split[1] || split[2] )
		throw Error( "Input error: to many or to few arguments" )
	return new Map( input_check( Number( split[0] ), 1, 182 ), input_check(  Number( split[1] ), 1, 182 ) )
}

const main = async () => {
	let nbr_test = 0, line_index = -1
	let input_map: Map
	try {
		for await ( const line of rl ) {
			if ( !nbr_test ) {
				nbr_test = input_check( Number( line ), 1, 1000 )
			} else if ( line_index == -1 ) {
				line_index = 0;
				input_map = init_maps( line )
			} else if ( line_index < input_map.get_height() ) {
				input_to_map( line_index++, line, input_map )
				if ( line_index == input_map.get_height() ) {
					line_index = resolve_data( input_map )
					if ( !--nbr_test )
						process.exit(0)
				}
			}
		}
	} catch ( error) {
		console.log( error )
	}
}
main()