'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
		    options: {
		        separator: '\r\n'
		    },
		    dist: {
		        src: [
		        // 'src/*.js', 'src/**/*.js', 'src/**/**/*.js', 'src/**/**/**/*.js'
		        'src/pixi/Pixi.js', 
		        "src/Phaser.js",
			    "src/utils/Utils.js",

			    "src/pixi/core/Matrix.js",
			    "src/pixi/core/Point.js",
			    "src/pixi/core/Rectangle.js",
			    "src/pixi/core/Polygon.js",

			    "src/pixi/display/DisplayObject.js",
			    "src/pixi/display/DisplayObjectContainer.js",
			    "src/pixi/display/Sprite.js",
			    "src/pixi/display/Stage.js",

			    "src/pixi/extras/CustomRenderable.js",
			    "src/pixi/extras/Strip.js",
			    "src/pixi/extras/Rope.js",
			    "src/pixi/extras/TilingSprite.js",

			    "src/pixi/filters/AbstractFilter.js",
			    "src/pixi/filters/FilterBlock.js",

			    "src/pixi/primitives/Graphics.js",

			    "src/pixi/renderers/canvas/CanvasGraphics.js",
			    "src/pixi/renderers/canvas/CanvasRenderer.js",

			    "src/pixi/renderers/webgl/PixiShader.js",
			    "src/pixi/renderers/webgl/PrimitiveShader.js",
			    "src/pixi/renderers/webgl/StripShader.js",
			    "src/pixi/renderers/webgl/WebGLBatch.js",
			    "src/pixi/renderers/webgl/WebGLFilterManager.js",
			    "src/pixi/renderers/webgl/WebGLGraphics.js",
			    "src/pixi/renderers/webgl/WebGLRenderer.js",
			    "src/pixi/renderers/webgl/WebGLRenderGroup.js",
			    "src/pixi/renderers/webgl/WebGLShaders.js",

			    "src/pixi/text/BitmapText.js",
			    "src/pixi/text/Text.js",

			    "src/pixi/textures/BaseTexture.js",
			    "src/pixi/textures/Texture.js",
			    "src/pixi/textures/RenderTexture.js",

			    "src/pixi/utils/EventTarget.js",
			    "src/pixi/utils/Polyk.js",

			    "src/core/Camera.js",
			    "src/core/State.js",
			    "src/core/StateManager.js",
			    "src/core/LinkedList.js",
			    "src/core/Signal.js",
			    "src/core/SignalBinding.js",
			    "src/core/Plugin.js",
			    "src/core/PluginManager.js",
			    "src/core/Stage.js",
			    "src/core/Filter.js",
			    "src/core/Group.js",
			    "src/core/World.js",
			    "src/core/Game.js",

			    "src/input/Input.js",
			    "src/input/Key.js",
			    "src/input/Keyboard.js",
			    "src/input/Mouse.js",
			    "src/input/MSPointer.js",
			    "src/input/Pointer.js",
			    "src/input/Touch.js",
			    "src/input/Gamepad.js",
			    "src/input/SinglePad.js",
			    "src/input/GamepadButton.js",
			    "src/input/InputHandler.js",

			    "src/gameobjects/Events.js",
			    "src/gameobjects/GameObjectFactory.js",
			    "src/gameobjects/BitmapData.js",
			    "src/gameobjects/Sprite.js",
			    "src/gameobjects/TileSprite.js",
			    "src/gameobjects/Text.js",
			    "src/gameobjects/BitmapText.js",
			    "src/gameobjects/Button.js",
			    "src/gameobjects/Graphics.js",
			    "src/gameobjects/RenderTexture.js",

			    "src/system/Canvas.js",
			    "src/system/StageScaleMode.js",
			    "src/system/Device.js",
			    "src/system/RequestAnimationFrame.js",

			    "src/math/RandomDataGenerator.js",
			    "src/math/Math.js",
			    "src/math/QuadTree.js",

			    "src/geom/Line.js",
			    "src/geom/Circle.js",
			    "src/geom/Point.js",
			    "src/geom/Rectangle.js",

			    "src/net/Net.js",

			    "src/tween/TweenManager.js",
			    "src/tween/Tween.js",
			    "src/tween/Easing.js",

			    "src/time/Time.js",
			    "src/time/Timer.js",
			    "src/time/TimerEvent.js",

			    "src/animation/AnimationManager.js",
			    "src/animation/Animation.js",
			    "src/animation/Frame.js",
			    "src/animation/FrameData.js",
			    "src/animation/AnimationParser.js",

			    "src/loader/Cache.js",
			    "src/loader/Loader.js",
			    "src/loader/LoaderParser.js",

			    "src/sound/Sound.js",
			    "src/sound/SoundManager.js",

			    "src/utils/Debug.js",
			    "src/utils/Color.js",

			    "src/physics/arcade/SAT.js",
			    "src/physics/arcade/ArcadePhysics.js",
			    "src/physics/arcade/Body.js",

			    "src/particles/Particles.js",
			    "src/particles/arcade/ArcadeParticles.js",
			    "src/particles/arcade/Emitter.js",

			    "src/PixiPatch.js"
			    
		        ],
		        dest: 'js/main.js'
		    }
		},

		uglify: {
		    options: {
		        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
		    },
		    dist: {
		         files: {
		              'js/main.min.js': ['<%= concat.dist.dest %>']
			 }
		    }
		}

		// jshint: {
		//      files: ['gruntfile.js', 
		//      'src/*.js', 'src/**/*.js'
		//      ],
		//      options: {
		//          globals: {
		//               jQuery: true,
		//               console: true,
		//               module: true
		//          }
		//      }
		// }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['concat', 'uglify']);
    // grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.registerTask('default', ['concat', 'uglify', 'jshint']);

};