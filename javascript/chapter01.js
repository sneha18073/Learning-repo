    /* 7 prmitive datatypes : NUmber, Null, String, Symbol, Undefined, Boolean, BigInt */

    /* Example for an Object declaration */
    const obj = {
        name: "Sneha",
        age: 20,
        place: "Earth"
    }

    console.log(obj.place)

    /* Exercise From Chapter 1 - Variables and Dtatypes */
    /* Question number - 01 */

    let str = "Hello"
    console.log(str + 10)

    /* Question number - 02 */
    let type = typeof(str)
    console.log(type)

    /* Question number - 03 */
    const num = 10
    //const num = 20  // Not possible to redeclare or change the variable

    /* Question number - 04 */
    obj.number = 18
    console.log(obj.number)

    /* Question number - 05 */
    const dict = {
        Abnegation : "Denial; renunciation of a doctrine or belief. ",
        Ambigue: "An ambiguous expression or statement. ",
        Athleisure: "Comfortable and casual footwear & clothing designed for exercise and rigorous activity. ",
        Broigus: "Angry or irritated.",
        ByCatch : "A catch of fish that cannot be put to commercial use. "
    }
    
    console.log(dict.Abnegation)
    console.log(dict.Ambigue)
    console.log(dict.Athleisure)
    console.log(dict.Broigus)
    console.log(dict.ByCatch)
