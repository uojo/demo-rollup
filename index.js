var rollup = require( 'rollup' );

rollup.rollup({
  entry: 'src/main.js'
}).then( function ( bundle ) {
	
  var result = bundle.generate({
    // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
    format: 'cjs'
  });

  // 多种文件类型的输出
  bundle.write({
    format: 'cjs',
    dest: 'bundle.js'
  });
  
  bundle.write({
    format: 'amd',
    dest: 'bundle.amd.js'
  });
  
  bundle.write({
    format: 'es6',
    dest: 'bundle.es6.js'
  });
  
  bundle.write({
    format: 'umd',
    dest: 'bundle.umd.js'
  });
  
}).catch(function(err) {
    console.log(err);
});
