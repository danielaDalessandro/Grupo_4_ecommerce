module.exports = function(sequelize, dataTypes){
    let alias = "Label";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        
    }
    
    let config = {
        tableName: "label",
        timestamps: false
    }

    let Label = sequelize.define(alias, cols, config)
    return Label
}