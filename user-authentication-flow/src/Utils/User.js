class User {
    constructor(username, password, email, Name = "", city = "", image = "", role = "") {
        this.username = username;
        this.password = password;
        this.email = email;
        this.Name = Name;
        this.city = city;
        this.image = image;
        this.role = role;

    }
}

export default User;