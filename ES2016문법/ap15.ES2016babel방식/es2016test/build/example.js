"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//문법에 따른 임포트 방식의 차이...

var a = 1;
var b = 2;
exports.a = a;
var c = exports.c = 3;
exports.default = b; // 파일당 한번만 사용 가능하다.