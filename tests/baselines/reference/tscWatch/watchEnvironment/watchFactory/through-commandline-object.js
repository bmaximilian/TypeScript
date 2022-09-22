Input::
//// [/user/username/projects/myproject/a.ts]
export class a { prop = "hello"; foo() { return this.prop; } }

//// [/user/username/projects/myproject/b.ts]
export class b { prop = "hello"; foo() { return this.prop; } }

//// [/user/username/projects/myproject/tsconfig.json]
{}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


/a/lib/tsc.js -w --extendedDiagnostics --watchFactory {"name":"myplugin","myconfig":"somethingelse"}
Output::
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

Current directory: /user/username/projects/myproject CaseSensitiveFileNames: false
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Config file
Loading myplugin from /user/username/projects/myproject (resolved to /user/username/projects/myproject/node_modules)
Custom watchFile: /user/username/projects/myproject/tsconfig.json 2000 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}
Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
  options: {"watch":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a.ts 250 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Source file
Custom watchFile: /user/username/projects/myproject/a.ts 250 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b.ts 250 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Source file
Custom watchFile: /user/username/projects/myproject/b.ts 250 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}
FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 250 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Source file
Custom watchFile: /a/lib/lib.d.ts 250 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Type roots
Custom watchDirectory: /user/username/projects/myproject/node_modules/@types true {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Type roots
[[90m12:00:28 AM[0m] Found 0 errors. Watching for file changes.

DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Wild card directory
Custom watchDirectory: /user/username/projects/myproject true {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Wild card directory


Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
Program options: {"watch":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/a.ts (used version)
/user/username/projects/myproject/b.ts (used version)

PolledWatches::

FsWatches::

FsWatchesRecursive::


Plugin Watches::
WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000,"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/user/username/projects/myproject/a.ts:
  {"pollingInterval":250,"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/user/username/projects/myproject/b.ts:
  {"pollingInterval":250,"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/a/lib/lib.d.ts:
  {"pollingInterval":250,"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
WatchedDirectories:Recursive::
/user/username/projects/myproject/node_modules/@types:
  {"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/user/username/projects/myproject:
  {"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
WatchedDirectories::
exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js]
"use strict";
exports.__esModule = true;
exports.a = void 0;
var a = /** @class */ (function () {
    function a() {
        this.prop = "hello";
    }
    a.prototype.foo = function () { return this.prop; };
    return a;
}());
exports.a = a;


//// [/user/username/projects/myproject/b.js]
"use strict";
exports.__esModule = true;
exports.b = void 0;
var b = /** @class */ (function () {
    function b() {
        this.prop = "hello";
    }
    b.prototype.foo = function () { return this.prop; };
    return b;
}());
exports.b = b;



Change:: Change file

Input::
//// [/user/username/projects/myproject/b.ts]
export class b { prop = "hello"; foo() { return this.prop; } }export function foo() { }


Output::

PolledWatches::

FsWatches::

FsWatchesRecursive::


Plugin Watches::
WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000,"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/user/username/projects/myproject/a.ts:
  {"pollingInterval":250,"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/user/username/projects/myproject/b.ts:
  {"pollingInterval":250,"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/a/lib/lib.d.ts:
  {"pollingInterval":250,"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
WatchedDirectories:Recursive::
/user/username/projects/myproject/node_modules/@types:
  {"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/user/username/projects/myproject:
  {"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
WatchedDirectories::
exitCode:: ExitStatus.undefined


Change:: Invoke plugin watches

Input::

Output::
FileWatcher:: Triggered with /user/username/projects/myproject/b.ts 1:: WatchInfo: /user/username/projects/myproject/b.ts 250 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/b.ts 1:: WatchInfo: /user/username/projects/myproject/b.ts 250 {"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}} Source file
Synchronizing program
[[90m12:00:31 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
  options: {"watch":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
[[90m12:00:35 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
Program options: {"watch":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/b.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/b.ts (computed .d.ts)

PolledWatches::

FsWatches::

FsWatchesRecursive::


Plugin Watches::
WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000,"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/user/username/projects/myproject/a.ts:
  {"pollingInterval":250,"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/user/username/projects/myproject/b.ts:
  {"pollingInterval":250,"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/a/lib/lib.d.ts:
  {"pollingInterval":250,"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
WatchedDirectories:Recursive::
/user/username/projects/myproject/node_modules/@types:
  {"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
/user/username/projects/myproject:
  {"options":{"watchFactory":{"name":"myplugin","myconfig":"somethingelse"}}}
WatchedDirectories::
exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/b.js]
"use strict";
exports.__esModule = true;
exports.foo = exports.b = void 0;
var b = /** @class */ (function () {
    function b() {
        this.prop = "hello";
    }
    b.prototype.foo = function () { return this.prop; };
    return b;
}());
exports.b = b;
function foo() { }
exports.foo = foo;


