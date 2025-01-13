class User {
    constructor(username, password, Name = "", city = "", image = "", role = "") {
        this.username = username;
        this.password = password;
        this.Name = Name;
        this.city = city;
        this.image = image;
        this.role = role;

    }
}

export default User;