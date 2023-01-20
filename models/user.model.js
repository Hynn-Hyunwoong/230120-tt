module.exports = (sequelize, Sequelize) => {
    class User extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    user_IDX : {
                        type: Sequelize.INTEGER,
                        primaryKey : true,
                        autoIncrement: true,
                    },
                    userId: {
                        type: Sequelize.STRING(60),
                        unique : true,
                    },
                    userPw: {
                        type: Sequelize.STRING(64),
                        allowNull: false,
                    },
                    userName: {
                        type: Sequelize.STRING(30),
                        allowNull: false,
                    },
                    provider: {
                        type: Sequelize.ENUM("local", "kakao"),
                        allowNull: false,
                        defaultValue: "local",
                    },
                    snsId: {
                        type: Sequelize.STRING(30),
                        allowNull: true,
                    },
                    userBirth: {
                        type : Sequelize.STRING(30),
                        allowNull : false,
                    },
                    userGender : {
                        type : Sequelize.ENUM("남자", "여자"),
                        allowNull : false,
                        defaultValue : "남자"
                    },
                    userPhone : {
                        type : Sequelize.INTEGER,
                        allowNull : false,
                    },
                    userEmail : {
                        type : Sequelize.STRING(128),
                        allowNull : false,
                    },
                    userAddress : {
                        type : Sequelize.STRING(256),
                        allowNull : false,
                    },
                    userRegistrationDate : {
                        type : Sequelize.DATE,
                        defaultValue : Sequelize.NOW()
                    }

                },
                {
                    sequelize,
                }
            )
        }
    }
    User.initialize()
}
