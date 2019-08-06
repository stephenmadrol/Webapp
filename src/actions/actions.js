import LS2Request from '@enact/Webos/LS2Request';

const start = () => {
	new LS2Request().send({
		service:'luna://com.webos.service.ai.voice/',
		method:start,
		paramaters:{"mode": "continuous", "keywordDetect": "true"},
		onSuccess: getState,
		onFailure:(res) => {
			console.error(res)	
		}
	});
};
const getState = () => {
	new LS2Request().send({
		service:'luna://com.webos.service.ai.voice/',
		method:getState,
		paramaters:{"subscribe": true},
		onSuccess: getResponse,
		onFailure:(res) => {
			console.error(res)	
		}
	});
};
const getResponse = () => {
	new LS2Request().send({
		service:'luna://com.webos.service.ai.voice/',
		method:'getResponse',
		parameters:{
		   "subscribe":"true"	
		},
		onSuccess:stop,
		onFailure:(res)=>{
			console.error(res)		
		}
		});
};
export const stop =  () => {
	new LS2Request().send({
		service:'luna://com.webos.service.ai.voice/',
		method:'stop',
		onSuccess:(res) => {
			console.log();
		},
		onFailure:(res)=>{
			console.error(res)		
		}
	});

};

export default start;