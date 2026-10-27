// Predictions & Actuals:
// "7" + 3              -> "73"
// "7" - 3              -> 4
// 7 + 3 + "1"          -> "101"
// "7" * "2"            -> 14
// 10 / 3               -> 3.3333333333333335
// typeof null          -> "object"
// typeof NaN           -> "number"
// Boolean("false")     -> true
// Boolean("0")         -> true
// 0 || "fallback"      -> "fallback"
// 0 ?? "fallback"      -> 0
// "" || "empty"        -> "empty"
// "10" == 10           -> true
// "10" === 10          -> false
// Number("12abc")      -> NaN
// parseInt("12abc")    -> 12
// "  hi  ".trim()      -> "hi"
// "cat".includes("a")  -> true

// I was most surprised that Boolean("0") and Boolean("false") evaluate to true! 
// It makes sense now that non-empty strings are always truthy, meaning we have to 
// check a string's length rather than trusting the string itself.