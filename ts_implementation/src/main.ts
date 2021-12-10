import * as readline from 'readline';
import { stdin as input } from 'process';
import { Map, input_check } from "./Map";

const rl = readline.createInterface({ input })

function input_to_map( i, line: string, subject: Map ) {
	let split
	if ( line.length != subject.get_j() )
		throw Error("Map error: amount of bits differ from mapsize")
	split = line.split("", subject.get_i())
	for ( let j = 0; j < subject.get_j(); j++ ) {
		subject.set_point( i, j, input_check( line[j], 0, 0 ) )
	}
}

function resolve_data( input_map: Map, output_map: Map, line_index ) {
	output_map.calculate_distance( input_map )
	output_map.print_map()
	line_index = -1
}

function init_maps( input_map: Map, output_map: Map, line_index, line: string ) {
	input_map = new Map( line )
	output_map = new Map( line )
	line_index = 0
}

const main = async () => {
	let nbr_test, line_index = -1
	let input_map: Map, output_map: Map
	try {
		for await ( const line of rl ) {
			if ( !nbr_test ) {
				nbr_test = input_check( 1, 1000, Number( line ) )
			} else if ( line_index == -1 ) {
				input_map = new Map( line )
				output_map = new Map( line )
				line_index = 0// init_maps( input_map, output_map, line_index, line )
			} else if ( line_index < input_map.get_i() ) {
				input_to_map( line_index++, line, input_map )
				if ( line_index == input_map.get_i() ) {
					resolve_data( input_map, output_map, line_index )
					if ( !nbr_test-- )
						break ;
				}
			}
		}
	} catch ( error) {
		console.log( error )
	}
}
main()