const changes = (state=0, action){
    
        if( action === 'Add'){
            return (action + action.payload)

        }else if(action === 'Minus'){
            return( state - action.payload)

        }else{
            return (state);
        }
   
}

export default changes;