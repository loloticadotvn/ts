(()=>{"use strict";const t={startTimer(e){this._timeTracker=e,this.timerId=setInterval(()=>{this._timeTracker.current=new Date,postMessage({queryMethod:"heartBeat",queryMethodArguments:this._timeTracker.current})},1e3)},stopTimer(){clearInterval(this.timerId)}};addEventListener("message",({data:e})=>{e instanceof Object&&e.queryMethod&&e.queryMethodArguments&&t[e.queryMethod](e.queryMethodArguments)})})();