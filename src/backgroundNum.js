function backgroundNum(lastNum) {

    try {

        let newNum = Math.floor(Math.random() * 10)

        if (newNum != lastNum) {
            return newNum;
        } else {
            throw Error;
        }
    
    } catch {        
        return backgroundNum(); 
    }

};

export default backgroundNum;