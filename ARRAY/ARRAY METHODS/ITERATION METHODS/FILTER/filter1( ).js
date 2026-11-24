
    let language = ["javascript","java","python","node","react","c","c++"]

    function SearchFor(arr, query){
        function condition(ele){
            
            return ele.toLowerCase().indexOf(query.toLowerCase()) !== -1
        }
        return arr.filter(condition)
    }

    let newArr = SearchFor(language, "ja")
    console.log("newArr : ", newArr);
    
