function get_random(max) {
	return Math.floor(Math.random() * max);
}

function map_generator() {
	const args = process.argv.slice(2);
	const t_cases = Number ( args[0] );
	const max_size = Number ( args[1] );
	if ( isNaN(t_cases) || isNaN(max_size) || t_cases < 1 || max_size < 1)
		return;
	console.log( t_cases );
	for ( let  t = 0; t < t_cases; t++) {
		let x = get_random( max_size ) + 1;
		let y = get_random( max_size ) + 1;
		console.log( x, y );
		for ( let i = 0; i < x; i++ ) {
			for ( let j = 0; j < y; j++ )
				process.stdout.write( String( get_random( 2 ) ) );
			process.stdout.write( "\n" );
		}
	}
}
map_generator()