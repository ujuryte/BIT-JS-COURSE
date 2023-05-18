export default function validateSubmit(types, setErrors, addMessage){
    
    const errors = new Set;
   
    if(!types.hasOwnProperty('title') 
    || typeof types.title !== 'string'
    || types.title.length < 3
    || types.title. length > 100
    ) {
        errors.add('title');
    }


    if(errors.size > 0) {
        setErrors(errors);
        addMessage({
            type:'error',
            title: 'Types Create',
            text: 'Types create has errors!'
        });
        return false;
    }

    

}