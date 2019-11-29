'use strict'

const Sensor = require('../Sensor')
const Homey = require('homey')

class TradfriSquareDimmer extends Sensor {
	
	onInit() {
		super.onInit()
		
		this.setTriggers()
		
		this.log(this.getName(), 'has been inited')
	}
	
	fireEvent(number) {
		switch (number) {
			
			//Dim up longpress

			case 1001:
				this.timeWhenPressed = new Date().getTime()
				setTimeout(() => {
					if (this.timeWhenPressed != 0) {
						this.dimupheld.trigger(this)
						this.log('held')
					}
				}, 0.5 * 1000)
				break

				//Dim up single press

			case 1002:
				this.log('dim up single press')
				this.dimupsingle.trigger(this)
				break

				//Dim up released

			case 1003:
				this.log('dim up released')
				this.dimupreleased.trigger(this)
				break
				

				//Dim down longpress

			case 2001:
				this.timeWhenPressed = new Date().getTime()
				setTimeout(() => {
					if (this.timeWhenPressed != 0) {
						this.dimdownheld.trigger(this)
						this.log('held')
					}
				}, 0.5 * 1000)
				break

				//Dim down single press

				case 2002:
				this.log('dim down single press')
				this.dimdownsingle.trigger(this)
				break

				//Dim down released

				case 2003:
				this.log('dim down released')
				this.dimdownreleased.trigger(this)
				break
				
	}
	}
	
	setTriggers() {
		
	
		//Dim up button
		this.dimupheld = new Homey.FlowCardTriggerDevice('dim_up_held').register()
		this.dimupsingle = new Homey.FlowCardTriggerDevice('dim_up_single_press').register()
		this.dimupreleased = new Homey.FlowCardTriggerDevice('dim_up_released').register()


		//Dim down button
		this.dimdownheld = new Homey.FlowCardTriggerDevice('dim_down_held').register()
		this.dimdownsingle = new Homey.FlowCardTriggerDevice('dim_down_single_press').register()
		this.dimdownreleased = new Homey.FlowCardTriggerDevice('dim_down_released').register()
		
}
	
}

module.exports = TradfriSquareDimmer