gdjs.ENDSCREENCode = {};
gdjs.ENDSCREENCode.GDbackrgroundEndgameObjects1= [];
gdjs.ENDSCREENCode.GDbackrgroundEndgameObjects2= [];
gdjs.ENDSCREENCode.GDTextResultsObjects1= [];
gdjs.ENDSCREENCode.GDTextResultsObjects2= [];
gdjs.ENDSCREENCode.GDstartbuttonObjects1= [];
gdjs.ENDSCREENCode.GDstartbuttonObjects2= [];


gdjs.ENDSCREENCode.mapOfGDgdjs_9546ENDSCREENCode_9546GDstartbuttonObjects1Objects = Hashtable.newFrom({"startbutton": gdjs.ENDSCREENCode.GDstartbuttonObjects1});
gdjs.ENDSCREENCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextResults"), gdjs.ENDSCREENCode.GDTextResultsObjects1);
{for(var i = 0, len = gdjs.ENDSCREENCode.GDTextResultsObjects1.length ;i < len;++i) {
    gdjs.ENDSCREENCode.GDTextResultsObjects1[i].getBehavior("Text").setText("ЛенаКойны: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("gameresults"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("startbutton"), gdjs.ENDSCREENCode.GDstartbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ENDSCREENCode.mapOfGDgdjs_9546ENDSCREENCode_9546GDstartbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.ENDSCREENCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ENDSCREENCode.GDbackrgroundEndgameObjects1.length = 0;
gdjs.ENDSCREENCode.GDbackrgroundEndgameObjects2.length = 0;
gdjs.ENDSCREENCode.GDTextResultsObjects1.length = 0;
gdjs.ENDSCREENCode.GDTextResultsObjects2.length = 0;
gdjs.ENDSCREENCode.GDstartbuttonObjects1.length = 0;
gdjs.ENDSCREENCode.GDstartbuttonObjects2.length = 0;

gdjs.ENDSCREENCode.eventsList0(runtimeScene);

return;

}

gdjs['ENDSCREENCode'] = gdjs.ENDSCREENCode;
