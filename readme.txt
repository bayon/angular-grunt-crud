npm install -g grunt-cli

-  npm init         this installed package.json

npm install -S grunt

create Gruntfile.js

module.exports = function(grunt){
	grunt.registerTasks('speak',function(){
		console.log('speaking....');
	})

	grunt.registerTask('default',['fn1','fn2','fn n-1']);
}

------ grunt plugins -----
contrib-concat

npm install grunt-contrib-concat --save-dev 
THIS WILL GET RUN INSIDE YOUR MODULE:
grunt.loadNpmTasks('grunt-contrib-concat');

module.exports = function(grunt){

	grunt.initConfig({
		concat: {
			dist: {
				src: ['js/main.js'],
				dest: 'build/js/scripts.js',
			},
		},
	});

	 grunt.loadNpmTasks('grunt-contrib-concat');
}

SINCE ...initConfig has run , I can run the command
grunt concat


 grunt-contrib-watch
 npm install grunt-contrib-watch --save-dev
grunt.loadNpmTasks('grunt-contrib-watch');

