module.exports = function(grunt){
	//grunt.registerTask('speak',function(){
		//console.log('speaking....');
	//})
	
	/*grunt.initConfig({
		concat: {
			dist: {
				src: ['js/main.js', 'js/other.js'],
				dest: 'build/js/scripts.js',
			},
		},
	});
,'editablelistview/js/editable-listview.js'
,'editablelistview/css/*.css'
'slidebars/*.js',
,'slidebars/*.css'
	*/

	grunt.initConfig({
		concat: {
			js: {
				src: [ 'jsplugins/*.js','bootstrap/*.js','js/bootstrap.min.js'],
				dest: 'build/js/scripts.js',
			},
			css: {
				src: ['css/app.css', 'css/style.css','bootstrap/*.css'],
				dest: 'build/css/styles.css',
			},
		},
		watch:{
			js: {
				files: ['js/*.js','jsplugins/*.js'],
				tasks: ['concat'],
				 
			},
			css: {
				files: ['css/*.css'],
				tasks: ['concat'], 
			},
		},
	});

	 grunt.loadNpmTasks('grunt-contrib-concat');
	 grunt.loadNpmTasks('grunt-contrib-watch');
	 grunt.registerTask('default',['concat','watch']);
}
