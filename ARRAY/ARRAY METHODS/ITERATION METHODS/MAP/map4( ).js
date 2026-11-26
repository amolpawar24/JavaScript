        let fName=["Ajay","Vijay","Sanjay","Dhanajay","Digvijay","Jay"]

        console.log(fName);

        let nameIndex=fName.map((data,index1)=>{
            if (index1%2==0) {
                return {value : data +" Chavan",index1}
            }
        })

        console.log(nameIndex);