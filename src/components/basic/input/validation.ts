import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import {
    between, maxLength, maxValue, minLength, minValue, numeric
} from "vuelidate/lib/validators";

export default (state : any, arrayRules: Array<string>) : object => {
    const v$ = useVuelidate(getRules(arrayRules), state)

    return {
        state,
        v$
    };
}

const getRules = (arr : Array<string>) => {
    let rules = {};
    // arr.map(( el: string ) => {
    //
    // })
    // console.log(el)
    // console.log(rules)
    return {
        input: {
            required,
        }
    }
}

const getRulesEl = (el : string) : any => {
    if ( el === 'required' ){
        return { required }
    }
    if ( el.split(':')[0] === 'minLength' ){
        return { 'minLength' : 'minLength' }
    //     // return  { 'minLength' : minLength( Number(el.split(':')[1]) ) }
    }
    // if ( el.split(':')[0] === 'maxLength' ){
    //     this.paramsValidate['maxLength'] = maxLength( Number(el.split(':')[1]) )
    // }
    // if ( el.split(':')[0] === 'between' ){
    //     this.paramsValidate['between'] = between( Number(el.split(':')[1]), Number(el.split(':')[2]) )
    // }
    // if ( el.split(':')[0] === 'minValue' ){
    //     this.paramsValidate['minValue'] = minValue( Number(el.split(':')[1]) )
    // }
    // if ( el.split(':')[0] === 'maxValue' ){
    //     this.paramsValidate['maxValue'] = maxValue( Number(el.split(':')[1]) )
    // }
}
