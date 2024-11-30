type Path = Array<string> | string;
type Collection<T> = Array<T> | Object;

declare module "nomad_assignment_03" {
    function head(array : Array<unknown>) : unknown;
    function hasIn(object : Object, path : Path) : boolean;
    function isBoolean(value : unknown) : boolean;
    function toString(value : unknown) : string;
    function split(string : string, separator : RegExp | string, limit? : number) : Array<string>;
    function hasPath(object : Object, path : Path, hasFunc? : Function) : boolean;
    function filter<T>(collection : Collection<T>, predicate : Function) : Array<T>;
    function every(collection : Collection<unknown>, predicate : Function, guard? : Object) : boolean;
    function map(collection : Collection<unknown>, iteratee : Function) : Array<unknown>;
}