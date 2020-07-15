const Homey = require('homey')

module.exports = [
	{
		method: 'GET',
		path: '/state',
		public: false,
		fn: function( args, callback ){
			Homey.app.getFullState((err, result)=>{
				if(err){
					callback(err, null)
				} else {
					callback(null, result)
				}
			})
		}
	  },
	  {
		method: 'GET',
		path: '/test',
		public: false,
		fn: function( args, callback ){
			Homey.app.test(args.host, args.port, args.apikey, (err, result) => {
				if(err){
					callback(err, null)
				} else {
					callback(null, result)
				}
			})
		}
	  },
	  {
		method: 'GET',
		path: '/discover',
		public: false,
		fn: function( args, callback ){
			Homey.app.discover((err, result)=>{
				if(err){
					callback(err, null)
				} else {
					callback(null, result)
				}
			})
		}
	  },
	  {
		method: 'GET',
		path: '/authenticate',
		public: false,
		fn: function( args, callback ){
			Homey.app.authenticate(args.host, args.port, (err, result) => {
				if(err){
					callback(err, null)
				} else {
					callback(null, result)
				}
			})
		}
	  }
]