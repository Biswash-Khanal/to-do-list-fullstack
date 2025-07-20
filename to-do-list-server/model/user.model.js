import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: { required: true, type: String, unique: true },
	password: { type: String },
	email: { required: true, type: String, unique: true },
	isGoogleAccount:{required:true, type:Boolean, default:false}
});

const User = mongoose.models.User || mongoose.model("User", userSchema) ;

export default User;