var mysql=require('mysql');

var DatabaseConnectionConfig={
    host: "localhost",
    user: "root",
    password: "",
    database: "school_node"
}

var conn=mysql.createConnection(DatabaseConnectionConfig);

conn.connect(function(error){
    if(error){
       console.log("Connection Failed!!");
    }else{
        console.log("Connected Successfully!!");
        // insertData(conn);
        // deleteData(conn);
        //updateData(conn);
        selectData(conn);
    }
});

function insertData(connection){
    
    let query="INSERT INTO `student_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES('Md. Iqbal Hossain', '171-15-8659', 'One', '+8801408979487', 'Cumilla')";

    connection.query(query, function(error){
       if(error){
          console.log("Insertion Failed!!");
       }else{
        console.log("Inserted Successfully!!");
       }
    });

}

function deleteData(connection){
    
    let query="DELETE from `student_list` WHERE `id`='2'";

    connection.query(query, function(error){
       if(error){
          console.log("Deletation Failed!!");
       }else{
        console.log("Deleted Successfully!!");
       }
    });
    }

    function updateData(connection){
    
        let query="UPDATE `student_list` SET `class`='Three' WHERE `id`='3'";
    
        connection.query(query, function(error){
           if(error){
              console.log("Update Failed!!");
           }else{
            console.log("Updated Successfully!!");
           }
        });

    }

    function selectData(connection){
    
        let query="SELECT * FROM `student_list`";
    
        connection.query(query, function(error, result){
           if(error){
              console.log("Update Failed!!");
           }else{
            console.log("Updated Successfully!!");
            console.log(result);
           }
        });

    }