import bcrypt from "bcrypt";

const passwordPlaintext1 = "pedal4e";
const passwordPlaintext2 = "golqmoPedal4e";
const hashedPassword = "$2b$12$LB6B/fH8o7yaNraw4XQoIO.oGFZRk/hLXv9YzEOkVCOz4/B68RFr6";

const encryptedpassword = await bcrypt.hash(passwordPlaintext1, 12);
console.log(encryptedpassword);

const isSame = await bcrypt.compare(passwordPlaintext2, hashedPassword);
console.log(isSame);