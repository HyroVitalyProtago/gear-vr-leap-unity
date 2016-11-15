﻿#pragma strict
import UnityEngine.UI;
import UnityEngine.Networking;

private var manager : NetworkManager;
private var inputText : UI.InputField;

function Start () {
	inputText = GetComponent(UI.InputField);
	manager = GameObject.Find("Controller").GetComponent(NetworkManager);
}

function Update () {

}

function AsTyping(){
	inputText.textComponent.text = inputText.text;
}

function AfterTyping(){
	manager.networkAddress = inputText.text;
	manager.networkPort = 7777;
}

function JoinGame(){
	manager.StartClient();
}