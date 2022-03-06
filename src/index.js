const string = "the rabbit jumps";

string.split(" ").map((word) => word.split("").reverse().join(""));
