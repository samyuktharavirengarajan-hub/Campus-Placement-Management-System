const bcrypt = require("bcrypt");

const hashPassword = async () => {

    const hashedPassword = await bcrypt.hash("admin123", 10);

    console.log(hashedPassword);

};

hashPassword();