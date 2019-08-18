var N=null,E="",T="t",U="u",searchIndex={};
var R=["state","string","option","exit_code","resource","result","perf_string","to_perf_string","try_from","try_into","borrow_mut","type_id","to_owned","clone_into","critical","warning","ordering","to_string","ResourceMetric","ToPerfString","Resource","PartialOrdMetric","SimpleMetric"];

searchIndex["nagiosplugin"]={"doc":"The nagiosplugin crate provides some basic utilities to…","i":[[3,R[20],"nagiosplugin","A Resource basically represents a single service if you…",N,N],[3,R[21],E,"A PartialOrdMetric is a metric which will automatically…",N,N],[3,R[22],E,"Represents a simple metric where no logic is performed.…",N,N],[4,"State",E,"Represents a service state from nagios.",N,N],[13,"Ok",E,E,0,N],[13,"Warning",E,E,0,N],[13,"Critical",E,E,0,N],[13,"Unknown",E,E,0,N],[5,"safe_run",E,"Runs the given closure and exits with a State::Critical…",N,[[["fn"]]]],[5,"safe_run_with_state",E,"Runs the given closure and exits with the given State…",N,[[["fn"],[R[0]]]]],[8,R[18],E,"Represents a single metric of a resource. You shouldn't…",N,N],[10,R[6],E,E,1,[[["self"]],[R[1]]]],[10,"name",E,E,1,[[["self"]],["str"]]],[10,R[0],E,E,1,[[["self"]],[[R[2],[R[0]]],[R[0]]]]],[8,R[19],E,"The purpose of ToPerfString is only so one can define…",N,N],[10,R[7],E,E,2,[[["self"]],[R[1]]]],[8,"Metric",E,"This trait can be implemented for any kind of metric and…",N,N],[16,"Output",E,E,3,N],[10,"name",E,E,3,[[["self"]],["str"]]],[10,R[0],E,E,3,[[["self"]],[[R[2],[R[0]]],[R[0]]]]],[10,"value",E,E,3,[[["self"]]]],[10,R[15],E,E,3,[[["self"]],[R[2]]]],[10,R[14],E,E,3,[[["self"]],[R[2]]]],[10,"min",E,E,3,[[["self"]],[R[2]]]],[10,"max",E,E,3,[[["self"]],[R[2]]]],[11,"new",E,"If state is set to Some(State) then it will always use…",4,[[[R[2],[R[0]]],[R[2],["str"]],[R[0]],["str"]],[R[4]]]],[11,"push",E,"Pushes a single ResourceMetric into the resource.",4,[[["self"],["m"]]]],[11,"metrics",E,"Returns a slice of the pushed metrics.",4,[[["self"]]]],[11,"set_state",E,"Manually set the state for this resource. This disabled…",4,[[["self"],[R[0]]]]],[11,"to_nagios_string",E,"Returns a string which nagios understands to determine the…",4,[[["self"]],[R[1]]]],[11,"get_state",E,"Will determine a State by the given metrics.",4,[[["self"]],[R[0]]]],[11,"get_description",E,"Get the description of this resource.",4,[[["self"]],[[R[2],[R[1]]],[R[1]]]]],[11,"set_description",E,"Set the description of this resource.",4,[[["self"],["str"]]]],[11,R[3],E,"Will return the exit code of the determined state via…",4,[[["self"]],["i32"]]],[11,"print_and_exit",E,"Will print Self::to_nagios_string and exit with the exit…",4,[[["self"]]]],[11,R[3],E,"Returns the corresponding nagios exit code to signal the…",0,[[["self"]],["i32"]]],[11,"new",E,"Creates a new PartialOrdMetric from the given values.",5,[[[R[2]],["bool"],["str"],[T]],["self"]]],[11,"new",E,E,6,[[[T],[R[2],[R[0]]],[R[2]],["str"],[R[0]]],["self"]]],[14,R[4],E,"Let's you simply create a resource from multiple metrics.…",N,N],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[8],E,E,4,[[[U]],[R[5]]]],[11,R[9],E,E,4,[[],[R[5]]]],[11,"borrow",E,E,4,[[["self"]],[T]]],[11,R[10],E,E,4,[[["self"]],[T]]],[11,R[11],E,E,4,[[["self"]],["typeid"]]],[11,R[6],E,E,5,[[["self"]],[R[1]]]],[11,"name",E,E,5,[[["self"]],["str"]]],[11,R[0],E,E,5,[[["self"]],[[R[0]],[R[2],[R[0]]]]]],[11,R[7],E,E,5,[[["self"]],[R[1]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[8],E,E,5,[[[U]],[R[5]]]],[11,R[9],E,E,5,[[],[R[5]]]],[11,"borrow",E,E,5,[[["self"]],[T]]],[11,R[10],E,E,5,[[["self"]],[T]]],[11,R[11],E,E,5,[[["self"]],["typeid"]]],[11,R[6],E,E,6,[[["self"]],[R[1]]]],[11,"name",E,E,6,[[["self"]],["str"]]],[11,R[0],E,E,6,[[["self"]],[[R[0]],[R[2],[R[0]]]]]],[11,R[7],E,E,6,[[["self"]],[R[1]]]],[11,R[12],E,E,6,[[["self"]],[T]]],[11,R[13],E,E,6,[[["self"],[T]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[],[U]]],[11,R[8],E,E,6,[[[U]],[R[5]]]],[11,R[9],E,E,6,[[],[R[5]]]],[11,"borrow",E,E,6,[[["self"]],[T]]],[11,R[10],E,E,6,[[["self"]],[T]]],[11,R[11],E,E,6,[[["self"]],["typeid"]]],[11,R[12],E,E,0,[[["self"]],[T]]],[11,R[13],E,E,0,[[["self"],[T]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[17],E,E,0,[[["self"]],[R[1]]]],[11,R[8],E,E,0,[[[U]],[R[5]]]],[11,R[9],E,E,0,[[],[R[5]]]],[11,"borrow",E,E,0,[[["self"]],[T]]],[11,R[10],E,E,0,[[["self"]],[T]]],[11,R[11],E,E,0,[[["self"]],["typeid"]]],[11,"name",E,E,5,[[["self"]],["str"]]],[11,R[0],E,E,5,[[["self"]],[[R[2],[R[0]]],[R[0]]]]],[11,"value",E,E,5,[[["self"]]]],[11,R[15],E,E,5,[[["self"]],[R[2]]]],[11,R[14],E,E,5,[[["self"]],[R[2]]]],[11,"min",E,E,5,[[["self"]],[R[2]]]],[11,"max",E,E,5,[[["self"]],[R[2]]]],[11,"name",E,E,6,[[["self"]],["str"]]],[11,R[0],E,E,6,[[["self"]],[[R[2],[R[0]]],[R[0]]]]],[11,"value",E,E,6,[[["self"]]]],[11,R[15],E,E,6,[[["self"]],[R[2]]]],[11,R[14],E,E,6,[[["self"]],[R[2]]]],[11,"min",E,E,6,[[["self"]],[R[2]]]],[11,"max",E,E,6,[[["self"]],[R[2]]]],[11,"default",E,E,4,[[],["self"]]],[11,"clone",E,E,0,[[["self"]],[R[0]]]],[11,"clone",E,E,6,[[["self"]],["simplemetric"]]],[11,"partial_cmp",E,E,0,[[["self"],[R[0]]],[[R[16]],[R[2],[R[16]]]]]],[11,"eq",E,E,0,[[["self"],[R[0]]],["bool"]]],[11,R[17],E,E,0,[[["self"]],[R[1]]]],[11,"fmt",E,E,0,[[["self"],["formatter"]],[R[5]]]]],"p":[[4,"State"],[8,R[18]],[8,R[19]],[8,"Metric"],[3,R[20]],[3,R[21]],[3,R[22]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);