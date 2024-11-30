declare module "nomad_assignment_03" {
    function head<T>(array : Array<T>) : unknown;
    function hasIn<T>(object : Object, path : Array<T> | string) : boolean;
    function isBoolean(value : unknown) : boolean;
    
}