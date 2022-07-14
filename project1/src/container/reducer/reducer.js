import {Add_To_Cart,Remove_From_Cart} from '../constant'

const initialValue={
    cardData:[]
}

export default function cardItem (state=initialValue,action){
    
        switch(action.type)
        
        {
            case Add_To_Cart :
                return{
                    ...state,
                    cardData:action.data
                }
                break;
            case Remove_From_Cart :
                    return{
                        ...state,
                        cardData:action.data
                    }
                    break;
            default : return state;
        }
    }

